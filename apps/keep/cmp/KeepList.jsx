import { KeepPreview } from "./KeepPreview.jsx"
import { keepService } from "../services/keep-service.js"


export class KeepList extends React.Component {

    state = {
        note: []
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query()
            .then((notes) => {
                this.setState({ notes: notes })
                // console.log(this.state.notes);

            })
    }

    // console.log(this)
    // console.log(notes)

    render() {
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>

        return <div className="notes-container">
            <h1>Pinned Notes</h1>
            <section className="pinned-notes">{
                notes.map((note) => {
                    if (note.isPinned) return <KeepPreview note={note} key={note.id} />
                    return ''
                })}
            </section>
            <h1>Notes</h1>
            <section className="notes">{
                notes.map((note) => {
                    if (!note.isPinned) return <KeepPreview note={note} key={note.id} isPinned={false} />
                    return ''
                })
            }

            </section>
        </div>

    }
}