import React, { useState } from "react";
import { NoteProps } from "../../interfaces";
import "./Note.css";

const Note: React.FC<NoteProps> = ({
  note,
  onEdit,
  onDelete,
  onFavoriteToggle,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(note.text);

  const handleEdit = () => {
    onEdit(note.id, newText);
    setIsEditing(false);
  };

  return (
    <div
      className="note-container"
      style={{ borderColor: note.isFavorite ? "blue" : "#ccc" }}
    >
      {isEditing ? (
        <div className="note-content_editing">
          <textarea
            className="note-content__text_editing"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleEdit}>Сохранить</button>
        </div>
      ) : (
        <div className="note-content">
          <span className="note-content__text">{note.text}</span>
          <div className="button-group">
            <button onClick={() => setIsEditing(true)}>Редактировать</button>
            <button onClick={() => onDelete(note.id)}>Удалить</button>
            <button onClick={() => onFavoriteToggle(note.id)}>
              {note.isFavorite ? "Убрать из избранного" : "В избранное"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
