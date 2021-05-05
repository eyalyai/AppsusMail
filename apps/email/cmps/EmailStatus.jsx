// import { emailService } from '../services/email.service.js';
// import { eventBusService } from '../services/event-bus-service.js';


export class EmailStatus extends React.Component {
    removeEvent;
    state = {
        emailCount: 0,
        readCount: 0,
        unreadCount: 0
    }

    componentDidMount() {
        this.countData()
    }


    countData = () => {
        let readCount = 0
        const { emails } = this.props
        const emailCount = emails.length
        this.props.emails.forEach(email => {
            if (email.isRead) readCount++
        });
        // this.setState({ emailCount }, { readCount }, { unreadCount: (emailCount - readCount) })
    }

    render() {
        return (
            // TODO: add read and unread status
            <div>
                <span>Emails: { this.state.emailCount }</span>
                <span>unread: { this.state.unreadCount }</span>
            </div>
        )
    }
}
// componentDidMount() {
//     this.removeEvent = eventBusService.on('email-count', (emailCount) => {
//         this.setState({ emailCount })
//     })
// }

// ComponentWillUnmount() {
//     this.removeEvent()
// }
