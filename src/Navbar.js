import { Menu, Button } from 'semantic-ui-react'
import { useState, useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { HOMEPAGE, LOGIN, SIGNUP, FISH, SEACREATURES, BUGS, FOSSILS, SONGS, VILLAGERS, ART, BGM } from "./routes/routes.js"
import Searchbar from "./Searchbar.js"
import resourceContext from "./context/resource.js"
import BottombarContext from './context/bottombar.js'

function Navbar() {
    const { setResources, setFullList } = useContext(resourceContext)
    const location = useLocation()
    const { visible, setVisible } = useContext(BottombarContext)
    let [activeItem, setActiveItem] = useState(location.pathname.slice(1))
    function handleItemClick(_, { name }) {
        setActiveItem(name)
    }
    return (
        <div>
            <Menu fixed="top" inverted color="green">
                <Link to={HOMEPAGE} onClick={() => { if (location.pathname !== HOMEPAGE) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={BUGS} onClick={() => { if (location.pathname !== BUGS) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='bugs'
                        active={activeItem === 'bugs'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={FISH} onClick={() => { if (location.pathname !== FISH) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='fish'
                        active={activeItem === 'fish'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={SEACREATURES} onClick={() => { if (location.pathname !== SEACREATURES) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='sea_creatures'
                        active={activeItem === 'sea_creatures'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={FOSSILS} onClick={() => { if (location.pathname !== FOSSILS) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='fossils'
                        active={activeItem === 'fossils'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={ART} onClick={() => { if (location.pathname !== ART) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='art'
                        active={activeItem === 'art'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={VILLAGERS} onClick={() => { if (location.pathname !== VILLAGERS) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='villagers'
                        active={activeItem === 'villagers'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={SONGS} onClick={() => { if (location.pathname !== SONGS) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='songs'
                        active={activeItem === 'songs'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Link to={BGM} onClick={() => { if (location.pathname !== SONGS) { setResources(null); setFullList(null) } }}>
                    <Menu.Item
                        name='backgroundmusic'
                        active={activeItem === 'backgroundmusic'}
                        onClick={handleItemClick}
                        as={"li"}
                    /></Link>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button onClick={() => {
                            setVisible(!visible)
                        }}>Toggle Bottom Bar</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Searchbar></Searchbar>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}

export default Navbar;