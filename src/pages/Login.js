import { useState, useEffect } from "react"
import { Icon, Button, Input, Container, Form, Segment } from "semantic-ui-react"
import "./Login.css"

function Login() {
    let [loader, setLoader] = useState(false)
    useEffect(() => {
        document.title = "Log In - ANCH Items and Info"
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
                <Button loading={loader} size="big" >Log In</Button>
            </Form>
            <Segment padded>Don't have an account? Use the Sign Up page here.</Segment>
        </Container>
    )
}

export default Login;