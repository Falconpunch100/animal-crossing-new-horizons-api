import { Input } from 'semantic-ui-react'
import {useState, useContext, useEffect} from "react"
import {useLocation} from "react-router-dom"
import resourceContext from "./context/resource.js"
import Fuse from "fuse.js"
const SCORE = 0.5
function Searchbar() {
    let [text, setText] = useState("")
    const {setResources, fullList} = useContext(resourceContext)
    const location = useLocation()
    useEffect(() => {
        if (text === "") {
            setResources(fullList)
        }
    }, [text, fullList, setResources])
    function onSearch() {
        const options = {
            includeScore: true,
            keys: ['name.name-USen']
        }
        const fuse = new Fuse(fullList, options)
        const result = fuse.search(text)
        const filteredSearch = result.filter(e => {
            if (e.score > SCORE) {
                return false;
            }
            else {
                return true;
            }
        })
        let finalArray = filteredSearch.map(e => {
            return e.item
        })
        setResources(finalArray)
    }
    return (
        <Input icon='search' placeholder='Search...' disabled={location.pathname === "/backgroundmusic" || location.pathname === "/login" || location.pathname === "/signup" ? true : false} value={text} onKeyPress={e => {
            if (e.key === "Enter" && text !== "") {
                onSearch()
            }
        }} onChange={e => {
            setText(e.target.value)
        }}/>
    )
}
export default Searchbar