import { Sidebar, Segment, Image,Grid } from 'semantic-ui-react'
import { useContext } from 'react'
import BottombarContext from './context/bottombar.js'
import "./BottomBar.css"
function BottomBar() {
    const { visible, setVisible, items, setItems } = useContext(BottombarContext)
    return (
        <Sidebar as={Segment} animation="push" direction="bottom" icon='labeled' vertical visible={visible} width='thin' style={{backgroundColor: "white"}} >
            <Grid textAlign='center'>
                <Grid.Row columns={3}>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                    <Grid.Column>
                        <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Sidebar>
    )
}

export default BottomBar;

//Add to the bottom bar:
//-Name
//-Buy Price
//-Price/Sell Price
//-Availability
//Truncate (text if too long with css)
//If resource is already on bottom bar, disable the "add to list" button to prevent redundancy.