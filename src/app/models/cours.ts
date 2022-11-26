export interface Cours {
  nom: string;
  chapitres: Chapitre[];
}

export interface Chapitre {
  nom: string;
  texte: string;
  chapitres?: Chapitre[]
}
