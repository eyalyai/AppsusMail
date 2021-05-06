const { NavLink } = ReactRouterDOM

export function Home() {
    return <section className="home-page">
        <h1>Welcome to Appsus</h1>
        <h3>keep you precious ideas! in our <NavLink to="/keep">Keep app</NavLink></h3>
        <h3>discover your Email better! in our <NavLink to="/email">Email app</NavLink></h3>
    </section>
}
