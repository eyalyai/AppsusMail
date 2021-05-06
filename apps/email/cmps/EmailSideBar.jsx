const { NavLink } = ReactRouterDOM
import { EmailNav } from "./EmailNav.jsx"
import { eventBusService } from "../services/event-bus-service.js"

function onAddEmail() {
    eventBusService.emit('add-email')
}

export function EmailSideBar({ emails }) {

    return (
        <div className="email-sidebar">
            <button className="add-email-btn" onClick={ onAddEmail }>+ Compose
                </button>
            <div>
                <EmailNav emails={ emails } />
            </div>
        </div>
    )

}