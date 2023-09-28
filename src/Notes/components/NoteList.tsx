import { Note } from '../reducers/notesReducer'
import React, { useContext } from 'react';
import OneNote from './OneNote';
import NotesContext from '../context/notes-context';

interface NoteListProps {
    removeNote: (title: string) => void;
  }

export const NoteList: React.FC<NoteListProps> = ({ removeNote }) => {
    const { notes } = useContext(NotesContext);

    return notes.map((note: Note, index: number) => (
    <OneNote key={index} note={note} removeNote={removeNote} />
    ))
}
