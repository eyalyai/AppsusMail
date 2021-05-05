const { Link } = ReactRouterDOM
import { NoteTxt } from "../pages/NoteTxt.jsx"
import { NoteTodos } from "../pages/NoteTodos.jsx"
import { NoteImg } from "../pages/NoteImg.jsx"
// import { NoteVideo } from "../pages/NoteVideo.jsx"

export function KeepPreview({ note }) {
    switch (note.type) {
        case 'NoteText':
            return <NoteTxt note={ note } />
        case 'NoteImg':
            return <NoteImg note={ note } />
        case 'NoteTodos':
            return <NoteTodos note={ note } />
        default:
            return console.log('failed')
    }
}
