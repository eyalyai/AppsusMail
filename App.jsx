const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { EmailApp } from './apps/email/EmailApp.jsx'
import { EmailDetails } from './apps/email/pages/EmailDetails.jsx'
import { MissKeep } from './apps/keep/MissKeep.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { NoteTxt } from "./apps/keep/pages/NoteTxt.jsx"
import { NoteTodos } from "./apps/keep/pages/NoteTodos.jsx"
import { NoteImg } from "./apps/keep/pages/NoteImg.jsx"
import { NoteVideo } from "./apps/keep/pages/NoteVideo.jsx"

export function App() {
    return (
        <Router>
            <header>
                <AppHeader />
            </header>
            <main>
                <Switch>
                    <Route component={ EmailDetails } path="/mail/:emailId" />
                    <Route component={ EmailApp } path="/mail" />
                    {/* <Route component={ NoteTxt } path="/keep/notetxt" /> */}
                    {/* <Route component={ NoteTodos } path="/keep/notetodos" /> */}
                    {/* <Route component={ NoteImg } path="/keep/noteimg" /> */}
                    {/* <Route component={ NoteVideo } path="/keep/notevideo" /> */}
                    <Route component={ MissKeep } path="/keep" />
                    <Route component={ AboutUs } path="/about" />
                    <Route component={ Home } path="/" />
                </Switch>
            </main>
            <footer>
                coffeeRights &copy;
            </footer>
        </Router>
    )
}

