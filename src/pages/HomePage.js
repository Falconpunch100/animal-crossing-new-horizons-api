import "./HomePage.css"
import { Header, Button, Image } from "semantic-ui-react"
import {Link} from "react-router-dom"
import {BUGS} from "../routes/routes.js"
import logo from "../animal-crossing-logo.png"
function HomePage() {
    return (
        <main id="home">
            {/* <div id="background"></div> */}
            <div id="hero">
                <Image src={logo}></Image>
                <Link to={BUGS}><Button animated="fade" size="huge">
                    <Button.Content visible>Sign-up for a Pro account</Button.Content>
                    <Button.Content hidden>$12.99 a month</Button.Content>
                </Button></Link>
            </div>
            {/* <h1>Welcome to the Animal Crossing: New Horizons App!</h1>
            <p>Here, you can browse the many collectible items and characters, including bugs, fish, villagers, and more!* You may add any item you wish to your list,
                where you can listen to the many songs of the game anywhere you go on the page, or remember a certain collectible you're hunting for.</p>
            <h6>*Furniture not included.</h6> */}
        </main>
    )
}
export default HomePage;