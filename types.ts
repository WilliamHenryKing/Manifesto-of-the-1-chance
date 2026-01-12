export interface SubSection {
  title: string;
  content: string;
}

export interface ManifestoSection {
  id: string;
  title: string;
  content: (string | SubSection)[];
}

export interface AppendixScenario {
  id: string;
  title: string;
  subtitle?: string;
  situation: string;
  weight: string;
  quote: string;
  shift: string;
}