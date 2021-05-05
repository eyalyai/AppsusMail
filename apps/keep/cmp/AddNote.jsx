import { keepService } from '../services/keep-service.js'
const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class AddNote extends React.Component {

    state = {
        inputVal:null
    }

    componentDidMount() {
    

    }

    handleChange = ({ target }) => {
    
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({inputVal: value})
    }

    addTextInput = () => {
        return <form onSubmit={(ev) => {
            ev.preventDefault();
            this.onAddTextNote(ev)
        }}> <input type="text" onInput={this.handleChange} /><button>+</button></form>
    }

    onAddTextNote = (ev) => {
        ev.preventDefault()
        keepService.addNote('NoteText', { txt: this.state.inputVal }).then(() => {
            this.props.onSaveNote()
            console.log(this.props)

        })
    }


    render() {
        return (
            <div className="add-note-container">
                <nav>
                    <NavLink to={`/keep/TextNote`}>Add Text</NavLink>
                    <NavLink to={`/keep/ImgNote`}>Add Img</NavLink>
                    <NavLink to={`/keep/TodoNote`}>Add Todo</NavLink>
                </nav>

                <Switch>
                    <Route component={this.addTextInput} path={`/keep/TextNote`} />
                    <Route component={this.addImgInput} path={`/keep/ImgNote`} />
                    <Route component={this.addTodoInput} path={`/keep/TodoNote`} />
                </Switch>
            </div>
        )
    }
}