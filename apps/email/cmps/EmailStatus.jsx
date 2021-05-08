// import { emailService } from '../services/email.service.js';
import { eventBusService } from '../services/event-bus-service.js';


export class EmailStatus extends React.Component {
    removeStatueLis;
    state = {
        emailCount: 0,
        readCount: 0,
        unreadCount: 0
    }

    componentDidMount() {
        this.countData()
        this.removeStatueLis = eventBusService.on('email-status', () => this.countData())
    }

    componentWillUnmount() {
        this.removeStatueLis()
    }


    countData = () => {
        let readCount = 0
        const { emails } = this.props
        const emailCount = emails.length
        this.props.emails.forEach(email => {
            if (email.isRead) readCount++
        });
        this.setState({ emailCount, readCount, unreadCount: (emailCount - readCount) })
    }

    render() {
        return (
            // TODO: add read and unread status
            <div className="flex align-center">
                <div className="status-wrapper flex">
                    <div className="status-progress-bar stripes">
                        <span className="progress-bar-fill" >{ this.state.emailCount } Emails </span>
                    </div>
                    <div className="status-progress-bar stripes">
                        <span className="progress-bar-fill" > { this.state.unreadCount } Unread </span>
                    </div>
                </div>
            </div>
        )
    }
}
