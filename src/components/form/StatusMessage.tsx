import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface StatusMessageProps {
  status: 'success' | 'error' | null;
  message: string;
}

export function StatusMessage({ status, message }: StatusMessageProps) {
  if (!status) return null;

  return (
    <div className={`p-4 rounded-md ${
      status === 'success' ? 'bg-green-50' : 'bg-red-50'
    }`}>
      <div className="flex items-center">
        {status === 'success' ? (
          <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-400 mr-2" />
        )}
        <p className={`text-sm ${
          status === 'success' ? 'text-green-700' : 'text-red-700'
        }`}>
          {message}
        </p>
      </div>
    </div>
  );
}