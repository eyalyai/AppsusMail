const { Link } = ReactRouterDOM
import { emailService } from '../services/email.service.js';
export class EmailPreview extends React.Component {
    state = {
        isRead: false,
    }

    getReadColor = () => {
        if (this.state.isRead) return 'read';
        return null;
    }

    render() {
        const { email } = this.props;
        // console.log(emailService);
        return (
            <Link to={ `/email/${email.id}` }>
                <div className="email-preview">
                    <div className="preview-details" className={ this }>
                        <h3 className="sender">{ email.sender }</h3>
                        <h3 className="subject">{ email.subject }</h3>
                        <h4 className="ebody">{ email.body }</h4>
                        <h3 className="sent-at">{ emailService.getFormatAMPM(email.sentAt) }</h3>
                    </div>
                </div>
            </Link>

        )
    }
}

{/* <EmailPreview>
• Has an email prop
• Renders the subject
• Gives visual indication for read/unread (i.e.: bold/unbold ; closed or open envelop) */}