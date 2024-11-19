import React from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { FormInput } from './form/FormInput';
import { FormSkills } from './form/FormSkills';
import { StatusMessage } from './form/StatusMessage';
import { supabase } from '../lib/supabase';

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  skills: string[];
  otherSkills?: string;
  notes?: string;
}

export default function CommunitySignupForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<SignupFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      skills: [],
      otherSkills: '',
      notes: ''
    }
  });
  
  const [submitStatus, setSubmitStatus] = React.useState<'success' | 'error' | null>(null);
  const [statusMessage, setStatusMessage] = React.useState('');

  const onSubmit = async (data: SignupFormData) => {
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
      setSubmitStatus('error');
      setStatusMessage('Datenbankverbindung nicht konfiguriert. Bitte kontaktieren Sie den Administrator.');
      return;
    }

    try {
      const { error } = await supabase
        .from('community_members')
        .insert([{
          ...data,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      setStatusMessage('Ihre Anmeldung wurde erfolgreich übermittelt!');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        setStatusMessage(
          error.message.includes('Netzwerkfehler') || error.message.includes('fetch')
            ? 'Verbindungsfehler zur Datenbank. Bitte versuchen Sie es später erneut.'
            : 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.'
        );
      } else {
        setStatusMessage('Ein unerwarteter Fehler ist aufgetreten.');
      }
    }

    setTimeout(() => {
      setSubmitStatus(null);
      setStatusMessage('');
    }, 5000);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            id="firstName"
            label="Vorname"
            required
            register={register}
            validation={{ required: 'Vorname ist erforderlich' }}
            error={errors.firstName}
          />
          <FormInput
            id="lastName"
            label="Nachname"
            required
            register={register}
            validation={{ required: 'Nachname ist erforderlich' }}
            error={errors.lastName}
          />
        </div>

        <FormInput
          id="email"
          label="E-Mail"
          type="email"
          required
          register={register}
          validation={{
            required: 'E-Mail ist erforderlich',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Ungültige E-Mail-Adresse'
            }
          }}
          error={errors.email}
        />

        <FormInput
          id="phone"
          label="Telefon"
          type="tel"
          register={register}
          error={errors.phone}
        />

        <FormSkills
          register={register}
          validation={{ required: 'Mindestens ein Skill muss ausgewählt werden' }}
          error={errors.skills}
        />

        <FormInput
          id="otherSkills"
          label="Weitere Skills"
          register={register}
          error={errors.otherSkills}
          placeholder="Weitere relevante Fähigkeiten"
        />

        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">
            Bemerkungen (Optional)
          </label>
          <textarea
            id="notes"
            {...register('notes')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Weitere Informationen oder Anmerkungen"
          />
        </div>

        {submitStatus && <StatusMessage status={submitStatus} message={statusMessage} />}

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                Wird gesendet...
              </span>
            ) : (
              'Anmeldung absenden'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}