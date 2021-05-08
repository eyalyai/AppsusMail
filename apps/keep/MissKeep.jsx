
import { KeepList } from "./cmp/KeepList.jsx"
import { AddNote } from "./cmp/AddNote.jsx"
// import { NoteFilter } from './cmp/NoteFilter.jsx'


export class MissKeep extends React.Component {
    state = {
        notes: null,
        // filterBy: null,

    }
    

    onSaveNote = (gNotes) => {
        this.setState({ notes: gNotes })
    }
    // onSetFilter = (filterBy) => {
    //     this.setState({ filterBy }, this.loadNotes)
    // }
    render() {

        return (
            <div className="keep-app">
                <h1>MissKeep</h1>

                <section className="main-keep">
                    {/* <NoteFilter onSetFilter={this.onSetFilter} /> */}
                    <AddNote onSaveNote={this.onSaveNote} />
                    <div className="keep-container">
                        <KeepList />
                    </div>
                </section>
            </div>
        )
    }
}




