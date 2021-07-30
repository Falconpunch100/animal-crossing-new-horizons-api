import {Container} from "semantic-ui-react"
import MrResetti from "../MrResettiNotFound.webp"
function NotFound() {
    return (
        <Container id="FourOhFourPage">
            <img src={MrResetti} style={{maxWidth: "40%"}}></img>
            <h1>404 Not Found</h1>
            <h4>Please make sure the page url is correct and try again.</h4>
        </Container>
    )
}

export default NotFound;