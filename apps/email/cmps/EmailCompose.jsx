{/* <EmailCompose>
• Has a form with subject and body
• Use the service to add email to the list
• Yes, we are only supporting selfi-emails for now (-: */}

import { emailService } from "../services/email.service.js"
import { eventBusService } from "../services/event-bus-service.js"
import { utilService } from "../services/util.service.js"

export class EmailCompose extends React.Component {
    state = {
        email: {
            subject: '',
            to: '',
            body: '',
            id: utilService.makeId(),
            isRead: false
        }
    }

    componentDidMount() {
    }

    onSaveEmail = (ev) => {
        ev.preventDefault()
        emailService.saveEmail(this.state.email)
        eventBusService.emit('add-email')
    }

    onDeleteCompose = () => {
        eventBusService.emit('add-email')
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        console.log(field, value);
        this.setState(prevState => ({
            email: {
                ...prevState.email,
                [field]: value
            }
        }))
    }

    render() {
        console.log('this.props', this.props);

        const { body, isRead, subject, to } = this.state.email
        return <div className="compose-container flex column">
            <header className="email-compose-head">New mail</header>
            <form className="email-compose-form flex column" id="email-compose-form" onSubmit={ this.onSaveEmail }>
                <div className="email-compose-field email-compose-to">
                    <label htmlFor="to">To:</label>
                    <input autoFocus type="email" name="to" id="to" value={ to } required onChange={ this.handleChange } />
                </div>
                <div className="email-compose-field email-compose-subject">
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" name="subject" id="subject" value={ subject } required onChange={ this.handleChange } />
                </div>

                <textarea className="email-compose-field email-compose-body" style={ { width: '100%', height: '100%' } } type="text" name="compose-body" id="compose-body" name="body"
                    value={ body } required onChange={ this.handleChange } />
                <div className="flex ">
                </div>
            </form>
            <div className="email-compose-btn-container flex space-between">
                <button className="send-email-btn" form="email-compose-form" type="submit" ><img src="apps/email/assets/img/send.png" alt="send" /></button>
                <button className="goback" onClick={ () => this.onDeleteCompose }><img src="apps/email/assets/img/delete.png" alt="delete" /></button>
            </div>
        </div>

    }
}


