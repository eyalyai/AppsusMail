const { NavLink, Route, Switch } = ReactRouterDOM

function AboutTeam() {
    return (
        <div className="team-container">
            <h4>The Team</h4>
            <ul>
                <li>Eyal Yaish</li>
                <li>Aylam Bar-On</li>
            </ul>
        </div>
    )
}

function AboutVision() {
    return (
        <div className="vision-container">
            <h4>Our Vision</h4>
            <ul>
                <li>Finish all the projects before we are 80</li>
                <li>Make everthing work perfect</li>
                <li>Do it while having fun 😁</li>
            </ul>
        </div>
    )
}

export function AboutUs(props) {
    return <section className="about-us">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est laudantium earum veniam in aspernatur nam fuga tempore! Doloribus, possimus nesciunt.</p>

        <nav className="team">
            <NavLink to="/about/team">Team</NavLink>
            <NavLink to="/about/vision">Vision</NavLink>
        </nav>

        <Switch>
            <Route component={ AboutTeam } path="/about/team" />
            <Route component={ AboutVision } path="/about/vision" />
        </Switch>
    </section>
}