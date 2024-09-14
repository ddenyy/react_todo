import React, { useState } from "react";
import "./NoteInput.css";

interface NoteInputProps {
  onAdd: (text: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    if (inputValue) {
      onAdd(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="input-container">
      <input
        className="input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст заметки"
      />
      <button onClick={handleAdd}>Добавить заметку</button>
    </div>
  );
};

export default NoteInput;
