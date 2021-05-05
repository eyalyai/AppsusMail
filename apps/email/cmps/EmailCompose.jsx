{/* <EmailCompose>
• Has a form with subject and body
• Use the service to add email to the list
• Yes, we are only supporting selfi-emails for now (-: */}

import { emailService } from "../services/email.service.js"

export function EmailCompose() {

    console.log(this)
    return <div className="email-list">
        { emails.map((email) => { return <EmailPreview email={ email } key={ email.id } /> }) }
    </div>

}