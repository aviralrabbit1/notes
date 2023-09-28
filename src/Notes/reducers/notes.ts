interface Note {
    title: string;
    body: string;
}

type NotesAction =
    | { type: 'POPULATE_NOTES'; notes: Note[] }
    | { type: 'ADD_NOTES'; title: string; body: string }
    | { type: 'REMOVE_NOTES'; title: string };

const notesReducer = (state: Note[], action: NotesAction): Note[] => {
    switch (action.type) {
    case 'POPULATE_NOTES':
        return action.notes
    case 'ADD_NOTES':
        return [ 
            ...state,
        { title: action.title, body: action.body}
        ]
    case 'REMOVE_NOTES':
        return state.filter((note) => note.title !== action.title);

    default:
        return state;
    }
}

export { notesReducer };

export type { Note };

