const { NavLink } = ReactRouterDOM

export function Home() {
    return <section className="home-page background">
        <div className="blur">
            <h1>Welcome to Appsus</h1>
            <div className="home-hero-text flex align-center">
                <div className="flex column">
                    <span>keep you precious ideas</span>
                    <NavLink to="/keep">Keep app</NavLink>
                </div>
                <div className="flex column">
                    <span>discover your Email better </span>
                    <NavLink to="/mail">Email app</NavLink>
                </div>
                <div className="flex column">
                    <span>Awesome book collection</span>
                    <span className="flex align-center"><NavLink to="/books">books app</NavLink></span>
                </div>
            </div>
        </div>
    </section>
}
