import React from 'react';
import { AppendixScenario } from '../types';
import { FormatText } from './TextFormatters';
import { Quote } from 'lucide-react';

interface Props {
  scenario: AppendixScenario;
}

const AppendixCard: React.FC<Props> = ({ scenario }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone-100 overflow-hidden mb-12">
      <div className="bg-stone-100 p-4 border-b border-stone-200 flex flex-col md:flex-row md:items-baseline gap-2">
         <span className="font-display font-bold text-stone-500 uppercase tracking-widest text-sm">
           Case {scenario.id}
         </span>
         <h3 className="text-xl font-bold text-stone-900 font-sans">
           {scenario.title} <span className="font-normal text-stone-600 text-lg">{scenario.subtitle}</span>
         </h3>
      </div>
      
      <div className="p-6 md:p-8 space-y-8">
        {/* The Conflict */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-red-800 mb-2">The Situation</h4>
            <p className="font-serif text-stone-700 leading-relaxed">
              <FormatText text={scenario.situation} />
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-500 mb-2">The Weight (99%)</h4>
            <p className="font-serif text-stone-600 leading-relaxed">
               <FormatText text={scenario.weight} />
            </p>
          </div>
        </div>

        {/* The Voice */}
        <div className="relative">
          <div className="absolute -top-3 -left-2 text-amber-200 opacity-50">
             <Quote size={48} />
          </div>
          <blockquote className="relative z-10 p-6 bg-amber-50/50 border-l-4 border-amber-600 rounded-r-lg">
            <p className="text-xl md:text-2xl font-serif italic text-stone-800 leading-relaxed">
              "{scenario.quote}"
            </p>
          </blockquote>
        </div>

        {/* The Shift */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">The Shift (1%)</h4>
          <p className="font-serif text-lg text-stone-800 leading-relaxed border-t border-stone-100 pt-4">
             <FormatText text={scenario.shift} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppendixCard;