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
        var info = { txt: this.state.inputVal, style: { backgroundColor: '#f4ab63' } }

        switch (this.state.type) {
            case 'NoteText': info = { txt: this.state.inputVal, style: { backgroundColor: '#f4ab63' } }
                break;
            case 'NoteImg': info = { url: this.state.inputVal, title: 'My image', style: { backgroundColor: '#f4ab63' } }
                break;
            case 'NoteTodos': {
                const todos = this.state.inputVal.split(',').map(todo => { return { txt: todo, doneAt: null } })
                info = { label: 'New Todo', todos , style: { backgroundColor: '#f4ab63' }}
            }
                break;
            case 'NoteVideo': info = { url: this.state.inputVal, style: { backgroundColor: '#f4ab63' } }
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
                    <button className="btn txt-btn" onClick={() => { this.setState({ type: 'NoteText' }) }}>T</button>
                    <button className="btn img-btn" onClick={() => { this.setState({ type: 'NoteImg' }) }}></button>
                    <button className="btn todo-btn" onClick={() => { this.setState({ type: 'NoteTodos' }) }}></button>
                    <button className="btn video-btn" onClick={() => { this.setState({ type: 'NoteVideo' }) }}></button>
                </nav>

                <this.DynamicInput />
            </div>
        )
    }
} 