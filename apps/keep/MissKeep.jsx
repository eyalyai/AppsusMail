
import { KeepList } from "./cmp/KeepList.jsx"
import { AddNote } from "./cmp/AddNote.jsx"

export class MissKeep extends React.Component {
    state = {
        notes: null,
          
    }

    onSaveNote = (gNotes) => {
        this.setState({notes: gNotes})
    }

    render() {
       
        return (
            <div className="keep-app">
                <h1>MissKeep Main Page</h1>

                <section className="main-keep">
                        <AddNote onSaveNote={this.onSaveNote} />
                    <div className="keep-container">
                        <KeepList />
                    </div>
                </section>
            </div>
        )
    }
}




