const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js';
import { LongTxt } from '../cmps/LongTxt.jsx'

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
            console.log(this.state.isRead);
        }
    }

    render() {
        const { email } = this.props;
        return (
            <Link to={ `/mail/${email.id}` }>
                <div className="email-preview">
                    <div className={ (email.isRead) ? 'preview-details read' : 'preview-details' }>
                        <h3 className="sender">{ email.sender }</h3>
                        <h3 className="subject">{ email.subject }</h3>
                        <LongTxt className="ebody" txt={ email.body } />
                        <h3 className="sent-at">{ emailService.getFormatAMPM(email.sentAt) }</h3>
                    </div>
                </div>
            </Link >

        )
    }
}

{/* <EmailPreview>
• Has an email prop
• Renders the subject
• Gives visual indication for read/unread (i.e.: bold/unbold ; closed or open envelop) */}