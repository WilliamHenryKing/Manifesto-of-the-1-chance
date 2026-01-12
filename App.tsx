import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';
import { MANIFESTO_SECTIONS, MANIFESTO_INTRO, APPENDIX_INTRO, APPENDIX_SCENARIOS } from './constants';
import ManifestoSection from './components/ManifestoSection';
import AppendixCard from './components/AppendixCard';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-stone-900 pb-20">
      
      {/* Hero Header */}
      <header className="pt-20 pb-16 px-6 md:px-12 bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-stone-100 rounded-full mb-6">
            <BookOpen className="text-stone-600" size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-stone-900 mb-6 leading-tight">
            The Manifesto of the <br className="hidden md:block"/>
            <span className="text-amber-700">Non-Zero Chance</span>
          </h1>
          <p className="text-lg md:text-xl font-serif text-stone-500 italic max-w-2xl mx-auto leading-relaxed">
            {MANIFESTO_INTRO}
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-6 md:px-8">
        
        {/* The Manifesto Sections */}
        <div className="pt-16 md:pt-24">
          {MANIFESTO_SECTIONS.map((section) => (
            <ManifestoSection key={section.id} section={section} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-20 md:my-32 flex items-center justify-center gap-4 text-stone-300">
          <div className="h-px bg-stone-300 w-24"></div>
          <div className="font-display text-2xl text-stone-400">❖</div>
          <div className="h-px bg-stone-300 w-24"></div>
        </div>

        {/* Appendix Intro */}
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded text-xs font-bold tracking-widest uppercase bg-stone-200 text-stone-600 mb-4">
            Appendix
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6">
            The Doctrine in Practice
          </h2>
          <p className="text-lg md:text-xl font-serif text-stone-600 leading-relaxed max-w-2xl mx-auto">
            {APPENDIX_INTRO}
          </p>
        </div>

        {/* Appendix Scenarios */}
        <div className="space-y-8">
          {APPENDIX_SCENARIOS.map((scenario) => (
            <AppendixCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-32 border-t border-stone-200 bg-white py-12 px-6 text-center">
        <div className="max-w-lg mx-auto">
          <BookOpen className="mx-auto text-stone-300 mb-4" size={20} />
          <p className="text-stone-400 font-sans text-sm">
            The width of the door does not matter as much as the fact that it is open.
          </p>
          <div className="mt-8 text-stone-300 text-xs uppercase tracking-widest">
            Non-Zero Chance
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;