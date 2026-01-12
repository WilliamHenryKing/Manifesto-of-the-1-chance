import React from 'react';
import { ManifestoSection as IManifestoSection, SubSection } from '../types';
import { FormatText } from './TextFormatters';

interface Props {
  section: IManifestoSection;
}

const ManifestoSection: React.FC<Props> = ({ section }) => {
  return (
    <article className="mb-16 md:mb-24">
      <header className="mb-6 md:mb-8 border-b-2 border-stone-200 pb-4">
        <span className="block text-amber-700 font-display font-semibold tracking-widest text-sm mb-2 uppercase">
          Part {section.id}
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 leading-tight">
          {section.title}
        </h2>
      </header>

      <div className="space-y-6">
        {section.content.map((item, index) => {
          // If it's a string, it's a paragraph
          if (typeof item === 'string') {
            return (
              <p key={index} className="text-lg md:text-xl leading-relaxed text-stone-700 font-serif antialiased">
                <FormatText text={item} />
              </p>
            );
          }

          // If it's an object, it's a subsection (like in Part III)
          const sub = item as SubSection;
          return (
            <div key={index} className="mt-8 pl-0 md:pl-6 border-l-0 md:border-l-4 border-stone-200">
              <h3 className="text-xl font-bold text-stone-900 mb-2 font-sans">
                {sub.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-stone-700 font-serif">
                 <FormatText text={sub.content} />
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ManifestoSection;