import {useState} from 'react';
import {Layers} from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Arquitectura e Ingeniería de Software',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-slate-100 p-8 text-center ${className}`}
      >
        <div className="w-12 h-12 rounded-xl border border-slate-700 bg-slate-800/80 flex items-center justify-center mb-3">
          <Layers className="w-6 h-6 text-blue-400" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-slate-200 max-w-xs">{fallbackTitle}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
