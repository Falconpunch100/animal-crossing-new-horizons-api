import { useEffect, useContext } from "react"
import { Card, Grid, Placeholder, Container } from 'semantic-ui-react'
import CardResource from "../CardResource.js"
import "./placeholder.css"
import "./items.css"
import resourceContext from "../context/resource.js"

function Resources({page}) {
    const {resources, setResources, setFullList} = useContext(resourceContext)
    useEffect(() => {
        async function getResource() {
            const response = await fetch(`http://acnhapi.com/v1/${page}`)
            const data = await response.json()
            setResources(Object.values(data))
            setFullList(Object.values(data))
        }
        getResource()
    }, [setResources, setFullList, page])
    useEffect(() => {
        document.title = `${page} - ANCH Items and Info`
    }, [page])
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
                            <Grid.Column key={bug.id} stretched={true}>
                                <CardResource resource={bug}></CardResource>
                            </Grid.Column>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default Resources;