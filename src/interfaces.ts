export interface Note {
  id: string;
  text: string;
  isFavorite: boolean;
}

export interface NoteProps {
  note: Note;
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
  onFavoriteToggle: (id: string) => void;
}
