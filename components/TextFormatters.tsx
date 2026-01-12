import React from 'react';

// Helper to handle bold text (Markdown style **)
export const FormatText: React.FC<{ text: string }> = ({ text }) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  
  return (
    <span>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={index} className="font-bold text-stone-900">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return <em key={index} className="italic text-stone-800">{part.slice(1, -1)}</em>;
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
