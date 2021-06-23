import { Icon, Menu, Sidebar, Segment, Image, Header } from 'semantic-ui-react'
import { useState, useContext } from 'react'

function BottomBar() {
    let [visible, setVisible] = useState(false)
    return (
        <Sidebar as={Menu} animation="scale down" direction="bottom" icon='labeled' inverted vertical visible={visible} width='thin'>
            <Menu.Item as='a'>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
            </Menu.Item>
        </Sidebar>
    )
}

export default BottomBar;