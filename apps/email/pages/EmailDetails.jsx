const { Link, Route } = ReactRouterDOM
import { emailService } from '../services/email.service.js'
import { EmailSideBar } from '../cmps/EmailSideBar.jsx'
import { eventBusService } from "../services/event-bus-service.js"


export class EmailDetails extends React.Component {

    state = {
        email: null

    }

    componentDidMount() {
        this.loadEmail()
        eventBusService.emit('email-status')
    }

    loadEmail() {
        const id = this.props.match.params.emailId
        emailService.getEmailById(id)
            .then(email => {
                console.log(email);
                if (!email) return this.props.history.push('/')
                this.setState({ email })
                console.log(email);
                this.changeReadStatue(this.state.email.id)
            })

    }

    changeReadStatue = (id) => {
        console.log(id);
        emailService.updateReadStatue(id)
    }

    onDelete = () => {
        emailService.deleteEmail(this.state.email.id)
            .then(() => {
                this.props.loadEmails()
                eventBusService.emit('update-statistics')
            })
        return this.props.history.push('/mail')
    }

    render() {
        const { email } = this.state
        if (!email) return <div className="loader">Loading...</div>
        return <div className="email-details flex">
            <EmailSideBar />
            <section className="email-details-container flex column">
                <div className="email-details-setting">
                    {/* <button>foward</button>
                    <button>reply</button>
                    <button>star</button>
                    <button>mark as unread</button> */}
                    <button onClick={ this.onDelete }>Delete</button>
                </div>
                <div className="email-details-header flex column">
                    <h2 className="email-details-subject">{ email.subject }</h2>
                    <span className="email-details-sender">from: { email.sender }, ({ email.sender }@cacademy.org.il)</span>
                </div>
                <div className="email-details-main">
                    <p className="email-details-body">{ email.body }</p>
                </div>
            </section>
            {/* TODO: add  */ }
        </div>
    }



}