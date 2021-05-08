const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js';
import { LongTxt } from '../cmps/LongTxt.jsx'
import { eventBusService } from "../services/event-bus-service.js"

export class EmailPreview extends React.Component {

    state = {
        isRead: false,
    }

    componentDidMount() {
        this.getReadColor()
    }

    getReadColor() {
        if (this.props.email.isRead) {
            this.setState({ isRead: true });
        }
    }

    onDelete = () => {
        eventBusService.emit('delete-email', this.props.email.id)
    }

    render() {
        const { email } = this.props;
        return (
            <section className={ (email.isRead) ? 'email-preview read-true' : 'email-preview' }>
                <Link to={ `/mail/${email.id}` }>
                    <div className="email-preview-info flex align-center">
                        <h3 className="sender">{ email.sender }</h3>
                        <div className="email-preview-body">
                            <h3 className="subject">{ email.subject }</h3>
                            <LongTxt className="ebody" txt={ email.body } />
                        </div>
                        <h3 className="sent-at">{ emailService.getFormatAMPM(email.sentAt) }</h3>
                    </div>
                </Link >
                <div className="email-preview-btns">
                    <button className="remove-btn" onClick={ this.onDelete } > <img src="apps/email/assets/img/delete.png" alt="delete" /> </button>
                </div>
            </section >

        )
    }
}

