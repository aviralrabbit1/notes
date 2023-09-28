import React from 'react';

const notesDataString = localStorage.getItem('notes'); // may return null
const notesData = notesDataString ? JSON.parse(notesDataString) : [];

const NotesContext = React.createContext(notesData);

export { NotesContext as default }