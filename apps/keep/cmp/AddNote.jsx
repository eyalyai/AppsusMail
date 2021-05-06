import { keepService } from '../services/keep-service.js'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link, NavLink } = ReactRouterDOM
import { showUserMsg } from '../../../services/event-bus-service.js'

export class AddNote extends React.Component {
    
    state = {
        inputVal: null,
        type: null
    }
    componentDidMount() {
        this.setState({type:'NoteText'})
    }


    DynamicInput = () => {
        var placeHolderText = ''
        switch (this.state.type) {
            case 'NoteText': placeHolderText = 'Enter text'
                break;
            case 'NoteImg': placeHolderText = 'Enter image url'
                break;
            case 'NoteTodos': placeHolderText = 'Enter notes saperated by ,'
                break;
            case 'NoteVideo': placeHolderText = 'Enter video url'
                break;
        }
        return <form onSubmit={(ev) => {
            ev.preventDefault();
            this.onAddTextNote()
        }}> <input placeholder={placeHolderText} type="text" onInput={this.handleChange} /><button className="icon">+</button></form>
    }

    onAddTextNote = () => {
        if(!this.state.inputVal||!this.state.inputVal.length===0) return
        var info = { txt: this.state.inputVal }

        switch (this.state.type) {
            case 'NoteText': info = { txt: this.state.inputVal }
                break;
            case 'NoteImg': info = { url: this.state.inputVal, title: 'My image' }
                break;
            case 'NoteTodos': {
                const todos = this.state.inputVal.split(',').map(todo => { return { txt: todo, doneAt: null } })
                info = { label: 'New Todo', todos }
            }
                break;
            case 'NoteVideo': info = { url: this.state.inputVal }
                break;
            
        }
        keepService.addNote(this.state.type, info).then(() => {
            this.props.onSaveNote()
            // showUserMsg('Added Note!','success')
        })
    }

    handleChange = ({ target }) => {
        const value = target.value
        this.setState({ inputVal: value })
    }
    render() {
        return (
            <div className="add-note-container">
                <nav>
                    <button className="txt-btn" onClick={() => { this.setState({ type: 'NoteText' }) }}>txt</button>
                    <button className="img-btn" onClick={() => { this.setState({ type: 'NoteImg' }) }}>img</button>
                    <button className="todo-btn" onClick={() => { this.setState({ type: 'NoteTodos' }) }}>todos</button>
                    <button className="video-btn" onClick={() => { this.setState({ type: 'NoteVideo' }) }}>video</button>
                </nav>

                <this.DynamicInput />
            </div>
        )
    }
}