{/* <EmailCompose>
• Has a form with subject and body
• Use the service to add email to the list
• Yes, we are only supporting selfi-emails for now (-: */}

import { emailService } from "../services/email.service.js"
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
            .then(() => {
                this.props.history.goBack()
            })
    }

    onDeleteCompose = (ev) => {
        ev.preventDefault()
        this.props.history.goBack()
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
            <form className="flex column" onSubmit={ this.onSaveEmail }>
                <div>
                    <label htmlFor="to">To</label>
                    <input type="email" name="to" id="to" value={ to } onChange={ this.handleChange } />
                </div>
                {/* <label htmlFor="cc">Cc</label>
                <input type="email" name="cc" id="cc" value={ cc } onChange={ this.handleChange } />
                <label htmlFor="Bcc">Bcc</label>
                <input type="email" name="bcc" id="bcc" value={ Bcc } onChange={ this.handleChange } /> */}
                <div className="flex">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" value={ subject } onChange={ this.handleChange } />
                </div>

                <div className="flex">
                    <textarea rows="10" cols="50" type="text" name="compose-body" id="compose-body" name="body"
                        value={ body } onChange={ this.handleChange } />
                </div>
                <div className="flex ">
                    <button className="send-email-btn" onClick={ this.onSaveEmail }>Sent</button>
                    <button className="goback" onClick={ this.onDeleteCompose }>Delete</button>
                </div>

            </form>
        </div>

    }
}


