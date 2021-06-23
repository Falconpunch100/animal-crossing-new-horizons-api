import { useState, useEffect } from "react"
import { Icon, Button, Input, Container, Form, Segment } from "semantic-ui-react"
import "./Signup.css"

function Signup() {
    let [loader, setLoader] = useState(false)
    useEffect(() => {
        document.title = "Sign Up - ANCH Items and Info"
    }, [])
    return (
        <Container id="container-login">
            <Form className="signup-form" onSubmit={() => {
                setLoader(true)
                setTimeout(() => {
                    setLoader(false)
                }, 2000);
            }}>
                <Icon name="user outline" size="big" color="green"></Icon>
                <Input placeholder="Username" size="big"></Input>
                <Input placeholder="Password" size="big" type="password"></Input>
                <Button loading={loader} size="big" color="yellow">Sign Up</Button>
            </Form>
            <Segment padded>Already have an account? Log in here.</Segment>
        </Container>
    )
}

export default Signup;