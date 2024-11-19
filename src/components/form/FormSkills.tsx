import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

export const skillOptions = [
  'Blockchain Development',
  'Smart Contracts',
  'Frontend Development',
  'Backend Development',
  'DevOps',
  'UI/UX Design',
  'Technical Writing',
  'Community Management',
  'Marketing',
  'Translation',
  'Project Management',
  'Quality Assurance',
  'Security Analysis',
  'Legal/Compliance',
  'Business Development'
];

interface FormSkillsProps {
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError;
}

export function FormSkills({ register, validation, error }: FormSkillsProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Skills *
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skillOptions.map((skill) => (
          <div key={skill} className="flex items-center">
            <input
              type="checkbox"
              id={skill}
              value={skill}
              {...register('skills', validation)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={skill} className="ml-2 text-sm text-gray-700">
              {skill}
            </label>
          </div>
        ))}
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
}