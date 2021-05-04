const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink } = ReactRouterDOM

import { keepService } from "./services/keep-service.js"
import { NoteTxt } from "./pages/NoteTxt.jsx"
import { NoteTodos } from "./pages/NoteTodos.jsx"
import { NoteImg } from "./pages/NoteImg.jsx"
import { NoteVideo } from "./pages/NoteVideo.jsx"

export class MissKeep extends React.Component {

    state = {
        notes: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query(this.state.filterBy)
            .then((notes) => {
                this.setState({ notes })
            })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadNotes)
    }
    render() {
        const { notes, filterBy } = this.state
        if (!notes) return <div>Loading...</div>
        return (

            <Router className="miss-keep">
                <main>
                    <h1>MissKeep Main Page</h1>
                    <nav className="keep-nav">
                        <NavLink to="/keep/notetxt">Txt Notes</NavLink>
                        <br></br>
                        <NavLink to="/keep/notetodos">Todos Notes</NavLink>
                        <br></br>
                        <NavLink to="/keep/noteimg">Img Notes</NavLink>
                        <br></br>
                        <NavLink to="/keep/notevideo">Img Videos</NavLink>
                    </nav>
                    <Switch>
                        <Route component={NoteTxt} path="/keep/notetxt" />
                        <Route component={NoteTodos} path="/keep/notetodos" />
                        <Route component={NoteImg} path="/keep/noteimg" />
                        <Route component={NoteVideo} path="/keep/notevideo" />
                    </Switch>


                </main>
            </Router>
        )
    }
}
