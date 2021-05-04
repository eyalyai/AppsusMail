const Router = ReactRouterDOM.HashRouter
const { Route, Switch, NavLink, Link } = ReactRouterDOM

import { keepService } from "./services/keep-service.js"
import { NoteTxt } from "./pages/NoteTxt.jsx"
import { NoteTodos } from "./pages/NoteTodos.jsx"
import { NoteImg } from "./pages/NoteImg.jsx"
import { NoteVideo } from "./pages/NoteVideo.jsx"


function ToNoteTxt({ name, onSomething }) {
    return <h1>
        hello there {name}
        <button onClick={onSomething}>Go!</button>
    </h1>
}
function GoodBye({ name, onSomething }) {
    return <h1>Good bye {name}</h1>
}
function WelcomeBack({ name, onSomething }) {
    return <h1>Welcome Back {name}</h1>
}




export class MissKeep extends React.Component {
    state = {
        currView: 'GoodBye',
    }

    DynamicCmp = (props) => {
        console.log(props)
        switch (this.state.currView) {
            case 'Hello':
                return <ToNoteTxt {...props} />
            case 'GoodBye':
                return <GoodBye {...props} />
            case 'WelcomeBack':
                return <WelcomeBack {...props} />
            default:
                return console.log('failed')
        }
    }

    updateCurrView(val) {
        currView = val
        DynamicCmp()
    }

    // button onClick={ () => {
    //     onUnSelectBook(book.id)
    // } }>Return</button>


    render() {

        console.log(this)
        return (
            <Router className="miss-keep">
                <main>
                    <h1>MissKeep Main Page</h1>
                    <button value="txt" onClick={updateCurrView(this.value)}> </button>
                    <button value="baba" onClick="updateCurrView(this.value)"> </button>
                    <button value="baba" onClick="updateCurrView(this.value)"> </button>
                    <DynamicCmp name={'Puki'} onSomething={() => {
                        this.props.history.push("/keep/notetxt")
                        // debugger;
                        // <p><NavLink to="/keep/notetxt">Txt Notes</NavLink></p>

                    }} />


                    {/* <nav className="keep-nav">
                        <NavLink to="/keep/notetxt">Txt Notes</NavLink>
                        <br></br>
                        <NavLink to="/keep/notetodos">Todos Notes</NavLink>
                        <br></br>
                        <NavLink to="/keep/noteimg">Img Notes</NavLink>
                        <br></br>
                        <NavLink to="/keep/notevideo">Img Videos</NavLink>
                    </nav> */}
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
