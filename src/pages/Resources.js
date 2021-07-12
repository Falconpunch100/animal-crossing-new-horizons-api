import { useEffect, useContext, useRef } from "react"
import { Card, Grid, Placeholder, Container } from 'semantic-ui-react'
import CardResource from "../CardResource.js"
import "./items.css"
import resourceContext from "../context/resource.js"

function Resources({page, location}) {
    const {resources, setResources, setFullList} = useContext(resourceContext)
    let goTo = useRef(null)
    useEffect(() => {
        async function getResource() {
            const response = await fetch(`http://acnhapi.com/v1/${page}`)
            const data = await response.json()
            let newResources = Object.values(data)
            let temp = newResources.map(e => {
                return {...e, path: location.pathname}
            })
            setResources(temp)
            setFullList(temp)
        }
        getResource()
    }, [setResources, setFullList, page, location.pathname])
    useEffect(() => {
        document.title = `${page} - ANCH Items and Info`
    }, [page])
    useEffect(() => {
        if (goTo.current !== null) {
            goTo.current.scrollIntoView({behavior: "smooth"})
        }
    }, [goTo])
    return (
        <Container>
            <Grid columns={5} id="gridbugs">

                {resources === null ?
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                        return (
                            <Grid.Column key={num} stretched={true}>
                                <Card className="card">
                                    <Placeholder fluid>
                                        <Placeholder.Image square />
                                    </Placeholder>
                                    <Card.Content>
                                        <Placeholder fluid>
                                            <Placeholder.Header>
                                                <Placeholder.Line length='very short' />
                                                <Placeholder.Line length='medium' />
                                            </Placeholder.Header>
                                            <Placeholder.Paragraph>
                                                <Placeholder.Line length='short' />
                                            </Placeholder.Paragraph>
                                        </Placeholder>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })
                    :
                    resources.map((bug) => {
                        return (
                            <Grid.Column key={bug.id + bug.name["name-USen"]} stretched={true}>
                                <CardResource resource={bug} goTo={goTo} gotoName={location.state}></CardResource>
                            </Grid.Column>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Resources;