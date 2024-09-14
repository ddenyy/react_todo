# 📝 Note List Application

This project is a **Note List** application built with **React** and **TypeScript**, designed to manage your personal notes. The application follows best practices in **OOP**, **SOLID principles**, and React's design patterns.

## 📦 Features

1. **Add / Delete Notes**:
   - Users can easily add new notes and delete them when no longer needed.
2. **Edit Notes**:
   - Click on a note to enable editing mode, where you can modify the note's content.
3. **Favorite Notes**:
   - Mark important notes as favorites and quickly filter only favorite notes.
4. **Search Notes**:
   - Use the search bar to filter notes by a case-insensitive substring match.
5. **Favorite Filter**:
   - Toggle between showing all notes or only the favorite ones.
6. **Drag and Drop**:
   - Reorganize your notes using drag-and-drop functionality, implemented with `react-beautiful-dnd`.

## 🎨 Demo

You can check out the app's interface by running the project locally. The design is minimal and user-friendly, optimized for productivity.

## 🚀 Getting Started

To run the application locally, follow these steps:

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## 📚 Documentation

### Main Entities and Interfaces

#### Note

```ts
interface Note {
  id: string;
  text: string;
  isFavorite: boolean;
}
```

- `id`: Unique identifier for each note.
- `text`: The content of the note.
- `isFavorite`: Boolean indicating if the note is marked as favorite.

#### AppState

```ts
interface AppState {
  notes: Note[];
  searchQuery: string;
  showFavorites: boolean;
}
```

- `notes`: Array of `Note` objects.
- `searchQuery`: The current search input for filtering notes.
- `showFavorites`: Boolean flag to toggle the display of favorite notes.

### Components

#### NoteList

Displays the list of notes and handles the drag-and-drop functionality.

#### Note

Represents an individual note, with options to edit, delete, or mark it as favorite.

#### Search

Allows users to search notes by entering a case-insensitive query.

#### FavoriteFilter

A toggle button to switch between viewing all notes or only favorite notes.

### Public API

The application exposes the following methods for interacting with notes:

- **addNote(text: string)**: Adds a new note with the given text.
- **deleteNote(id: string)**: Removes a note by its unique ID.
- **editNote(id: string, newText: string)**: Updates the content of a specific note.
- **toggleFavorite(id: string)**: Toggles the "favorite" status of a note.
- **toggleShowFavorites()**: Toggles between showing all notes or only favorite ones.

## 🛠 Technologies Used

- **React** (with hooks and component-based architecture)
- **TypeScript** (for type safety and better development experience)
- **React Beautiful DnD** (for drag-and-drop functionality)
- **CSS** (for custom styling and layout)

## 📂 Project Structure

```
src/
│
├── components/        # React components for different parts of the UI
├── interfaces/        # TypeScript interfaces for the app's entities
└── main.tsx            # Main entry point of the app
```

## 💡 Design Philosophy

- **React Best Practices**: The project uses functional components with hooks and adheres to the "separation of concerns" principle, ensuring each component is responsible for a single task.
- **SOLID Principles**: The application is structured in such a way that it's easy to extend and maintain, keeping single responsibility and open-closed principles in mind.
- **OOP Concepts**: The entities in the application are modeled with clear interfaces and abstractions, making the code modular and scalable.

Ensure the application behaves as expected by checking the output of the tests.

## 🙌 Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to improve the project.

---

**Made by [Denis Osipov](https://t.me/ddennios)**

---
