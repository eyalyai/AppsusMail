import { EmailNav } from "./EmailNav.jsx"

export function EmailSideBar({ emails }) {
    return (
        <div className="email-sidebar">
            {/* TODO add <EmailCompose> */ }
            <button>+ Compose
                {/* <EmailCompose> */}
                </button>
            <div>
                <EmailNav emails={ emails } />
            </div>
        </div>
    )

}