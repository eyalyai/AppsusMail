const { Link } = ReactRouterDOM
import { keepService } from "../services/keep-service.js"
import { NoteTxt } from "../pages/NoteTxt.jsx"
import { NoteTodos } from "../pages/NoteTodos.jsx"
import { NoteImg } from "../pages/NoteImg.jsx"
// import { NoteVideo } from "../pages/NoteVideo.jsx"

export class KeepPreview extends React.Component {

    state = {
        note: null,
    }
    componentDidMount() {
        this.loadNote()
    }

    loadNote = () => {
        this.setState({ note: this.props.note })
        // console.log(this.props.note)
    }

    NoteImg = (props) => {
        return <img className="note-img" src={props.note.info.url} alt={props.note.info.title} />
    }
    NoteTxt = (props) => {
        return <p>{props.note.info.txt}</p>
    }

    NoteTodos = (props) => {
        return <div className="todos-list">
            {props.note.info.todos.map((todo, idx) => {
                return <div className="todos-container" key={idx} onClick={() => {
                    todo.doneAt = (todo.doneAt) ? null : Date.now();
                    keepService.saveNote(props.note)
                    this.loadNote()
                }}>
                    <p className={`todo ${todo.doneAt && 'todo-done'}`}>{todo.txt}</p>
                    {todo.doneAt && <span>{Intl.DateTimeFormat('IL-il').format(todo.doneAt)}</span>}
                </div>
            })
            }
        </div>
    }

    DynamicCmp = (props) => {
        // console.log(props.note.type)
        switch (props.note.type) {
            case 'NoteText':
                return <this.NoteTxt {...props} />
            case 'NoteImg':
                return <this.NoteImg {...props} />
            case 'NoteTodos':
                return <this.NoteTodos {...props} />
            default:
                return console.log('failed')
        }
    }

    handleChange = ({ target }) => {
        const field = target.name;
        const val = target.type === 'number' ? +target.value : target.value;
        this.setState(prevState => ({
            review: {
                ...prevState.review,
                [field]: val
            }
        }))
    }

    render() {
        console.log(this.props.note)
        return <article className="keep-preview">
            <this.DynamicCmp note={this.props.note} />
        </article>
    }

}
