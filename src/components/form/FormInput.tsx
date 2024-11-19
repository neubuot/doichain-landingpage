import React from 'react';
import { UseFormRegister, FieldError, RegisterOptions } from 'react-hook-form';

interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  validation?: RegisterOptions;
  error?: FieldError;
  placeholder?: string;
}

export function FormInput({
  id,
  label,
  type = 'text',
  required = false,
  register,
  validation,
  error,
  placeholder
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        {...register(id, validation)}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
}