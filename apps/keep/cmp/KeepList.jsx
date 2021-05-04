import { KeepPreview } from "./KeepPreview.jsx"

export function KeepList({ notes }) {
    console.log(this)
    console.log(notes)
    return <div className="keep-list">
        { notes.map((note) => { return <KeepPreview note={ note } key={ note.id } /> }) }
    </div>

}