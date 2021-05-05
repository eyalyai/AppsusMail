const { NavLink } = ReactRouterDOM
import { EmailNav } from "./EmailNav.jsx"
import { eventBusService } from "../services/event-bus-service.js"

function onAddEmail() {
    eventBusService.emit('add-email')
}

export function EmailSideBar({ emails }) {

    // onClick={() => { this.toggleCompose() }
    return (
        <div className="email-sidebar">
            {/* TODO add <EmailCompose> */ }
            <button className="add-email-btn" onClick={ onAddEmail }>+ Compose
                </button>
            <div>
                <EmailNav emails={ emails } />
            </div>
        </div>
    )

}