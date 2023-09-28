import { Note } from '../reducers/notesReducer'
import React from 'react';
import OneNote from './OneNote';

export const NoteList: React.FC<{ notes: Note[]; removeNote: (title: string) => void }> 
= ({ notes, removeNote }) => {

    return notes.map((note: Note, index: number) => (
    <OneNote key={index} note={note} removeNote={removeNote} />
    ))
}
