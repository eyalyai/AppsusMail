const { NavLink } = ReactRouterDOM
import { EmailNav } from "./EmailNav.jsx"
import { eventBusService } from "../services/event-bus-service.js"

export class EmailSideBar extends React.Component {
    removeToggleMenu;
    state = {
        status: 'close-sidebar'
    }

    componentDidMount() {
        this.removeToggleMenu = eventBusService.on('toggle-menu', this.toggleMenu)
    }


    ComponentWillUnmount() {
        this.removeToggleMenu()
    }
    onAddEmail = () => {
        eventBusService.emit('add-email')
    }

    toggleMenu = () => {
        console.log('im toggling');
        const newClass = (this.state.status === 'close-sidebar') ? 'open-sidebar' : 'close-sidebar'
        this.setState({ status: newClass })
    }


    render() {
        return (
            <div className={ "email-sidebar " + this.state.status }>
                <button className="add-email-btn flex" onClick={ this.onAddEmail }><img src="apps/email/assets/img/add.png" alt="delete" /> Compose
                </button>
                <div>
                    <EmailNav emails={ this.props.emails } />
                </div>
            </div>
        )

    }

}