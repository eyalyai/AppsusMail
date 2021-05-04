import { EmailPreview } from "./EmailPreview.jsx"

export function EmailList({ emails }) {

        console.log(emails)
        return <div className="email-list">
                { emails.map((email) => { return <EmailPreview email={ email } key={ email.id } /> }) }
        </div>

}