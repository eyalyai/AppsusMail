import { keepService } from '../services/keep-service.js'
const { Route, Switch, Link, NavLink } = ReactRouterDOM

export class AddNote extends React.Component {

    componentDidMount() {

    }

    state = {
        input:null
    }

    addTextInput = () => {
        return <form onSubmit={(ev) => {
            ev.preventDefault();
            this.onAddTextNote(ev)
        }}> <input type="text" onInput={this.handleChange} /><button>+</button></form>
    }

    onAddTextNote = () => {
        keepService.addNote('NoteText',{info:this.state.input}).then(()=>{
            this.props.renderPage()
            console.log(this.state.input)
           
        })
    }

    handleChange = ({ target }) => {
        const value = target.value
        this.setState({input:value})
    }
    render() {
        // console.log(this.props)
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