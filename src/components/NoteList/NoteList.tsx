import React from "react";
import Note from "../Note/Note";
import { Note as NoteType } from "../../interfaces";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

interface NoteListProps {
  notes: NoteType[];
  onEdit: (id: string, newText: string) => void;
  onDelete: (id: string) => void;
  onFavoriteToggle: (id: string) => void;
  onDragEnd: (result: DropResult) => void;
}

const NoteList: React.FC<NoteListProps> = ({
  notes,
  onEdit,
  onDelete,
  onFavoriteToggle,
  onDragEnd,
}) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {notes.map((note, index) => (
              <Draggable key={note.id} draggableId={note.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Note
                      note={note}
                      onEdit={onEdit}
                      onDelete={onDelete}
                      onFavoriteToggle={onFavoriteToggle}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default NoteList;
