const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink, Link } = ReactRouterDOM

import { keepService } from "./services/keep-service.js"
import { KeepList } from "./cmp/KeepList.jsx"


// function ToNoteTxt({ name, onSomething }) {
//     return <h1>
//         hello there { name }
//         <button onClick={ onSomething }>Go!</button>
//     </h1>
// }
// function GoodBye({ name, onSomething }) {
//     return <h1>Good bye { name }</h1>
// }
// function WelcomeBack({ name, onSomething }) {
//     return <h1>Welcome Back { name }</h1>
// }
export class MissKeep extends React.Component {
    state = {
        currView: 'GoodBye',
        notes: null
    }

    componentDidMount() {
        this.loadNotes()

    }


    loadNotes = () => {
        keepService.query(this.state.filterBy)
            .then((notes) => {
                this.setState({ notes })
                console.log(this.state.notes);
            })
    }






    render() {
        const { notes } = this.state
        if (!notes) return <div>Loading...</div>
        return (
            <div className="keep-app">
                <h1>MissKeep Main Page</h1>

                <section className="main-keep">
                    <div className="keep-container">
                        <KeepList notes={ notes } />
                    </div>
                </section>
            </div>
        )
    }
}




