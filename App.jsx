const Router = ReactRouterDOM.HashRouter
const { Route, Switch, Link } = ReactRouterDOM

import { EmailApp } from './apps/email/EmailApp.jsx'
import { EmailDetails } from './apps/email/pages/EmailDetails.jsx'
import { MissKeep } from './apps/keep/MissKeep.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Home } from './pages/Home.jsx'
import { AppHeader } from './cmps/AppHeader.jsx'
import { BookShopApp } from './apps/books/BookShopApp.jsx'


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
                    {/* <Route component={ NoteTxt } path="/keep/notetxt" /> */ }
                    {/* <Route component={ NoteTodos } path="/keep/notetodos" /> */ }
                    {/* <Route component={ NoteImg } path="/keep/noteimg" /> */ }
                    {/* <Route component={ NoteVideo } path="/keep/notevideo" /> */ }
                    <Route component={ MissKeep } path="/keep" />
                    <Route component={ BookShopApp } path="/books" />
                    <Route component={ AboutUs } path="/about" />
                    <Route component={ Home } path="/" />
                </Switch>
            </main>
            <footer className="flex align-center justify-center">
                <small>coffeeRights &copy;</small>
            </footer>
        </Router>
    )
}

