import React, { useState } from "react";
import NoteList from "../NoteList/NoteList";
import NoteInput from "../NoteInput/NoteInput";
import Search from "../Search/Search";
import Filter from "../Filter/Filter";
import { Note } from "../../interfaces";
import { DropResult } from "react-beautiful-dnd";
import "./index.css";

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFavorites, setShowFavorites] = useState<boolean>(false);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      text,
      isFavorite: false,
    };
    setNotes([...notes, newNote]);
  };

  const editNote = (id: string, newText: string) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, text: newText } : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const toggleFavorite = (id: string) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, isFavorite: !note.isFavorite } : note
      )
    );
  };

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedNotes = Array.from(notes);
    const [removed] = reorderedNotes.splice(result.source.index, 1);
    reorderedNotes.splice(result.destination.index, 0, removed);

    setNotes(reorderedNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.text.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!showFavorites || note.isFavorite)
  );

  return (
    <div className="root">
      <h1>Заметки</h1>
      <NoteInput onAdd={addNote} />
      <Search query={searchQuery} setQuery={setSearchQuery} />
      <Filter
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />
      <NoteList
        notes={filteredNotes}
        onEdit={editNote}
        onDelete={deleteNote}
        onFavoriteToggle={toggleFavorite}
        onDragEnd={onDragEnd}
      />
    </div>
  );
};

export default App;
