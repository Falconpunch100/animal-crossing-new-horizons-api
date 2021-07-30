import 'semantic-ui-css/semantic.min.css'
import { Loader, Sidebar } from "semantic-ui-react"
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { HOMEPAGE, BUGS, FISH, SEACREATURES, FOSSILS, ART, SONGS, BGM, VILLAGERS } from "./routes/routes.js"
import { lazy, Suspense } from "react"
import Navbar from "./Navbar.js"
import BottomBar from "./BottomBar.js"
import resourceContext from "./context/resource.js"
import BottombarContext from './context/bottombar.js'
import { useState } from "react"
import "./index.css"

const HomePage = lazy(() => {
  return import("./pages/HomePage.js")
})
const Resources = lazy(() => {
  return import("./pages/Resources.js")
})
const Songs = lazy(() => {
  return import("./pages/Songs.js")
})
const Villagers = lazy(() => {
  return import("./pages/Villagers.js")
})
const NotFound = lazy(() => {
  return import("./pages/NotFound.js")
})

function App() {
  const [resources, setResources] = useState(null)
  const [fullList, setFullList] = useState(null)
  const [visible, setVisible] = useState(false)
  const [items, setItems] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <BottombarContext.Provider value={{
            visible, setVisible, items, setItems
          }}>
            <resourceContext.Provider value={{
              resources, setResources, fullList, setFullList
            }}>
              <Navbar></Navbar>
              <Suspense fallback={<Loader active={true} size="huge"></Loader>}>
                <Sidebar.Pushable id="pushbar">
                  <BottomBar></BottomBar>
                  <Sidebar.Pusher>
                    <Route path={HOMEPAGE} exact>
                      <HomePage></HomePage>
                    </Route>
                    <Route path={BUGS} render={(routeProps) => { return <Resources page={"bugs"} {...routeProps}></Resources> }}></Route>
                    <Route path={FISH} render={(routeProps) => { return <Resources page={"fish"} {...routeProps}></Resources> }}></Route>
                    <Route path={SEACREATURES} render={(routeProps) => { return <Resources page={"sea"} {...routeProps}></Resources> }}></Route>
                    <Route path={FOSSILS} render={(routeProps) => { return <Resources page={"fossils"} {...routeProps}></Resources> }}></Route>
                    <Route path={ART} render={(routeProps) => { return <Resources page={"art"} {...routeProps}></Resources> }}></Route>
                    <Route path={SONGS} render={(routeProps) => { return <Songs page={"songs"} {...routeProps}></Songs> }}></Route>
                    <Route path={BGM} render={(routeProps) => { return <Songs page={"backgroundmusic"} {...routeProps}></Songs> }}></Route>
                    <Route path={VILLAGERS} render={(routeProps) => { return <Villagers page={"villagers"} {...routeProps}></Villagers> }}></Route>
                    <Route render={(routeProps) => { return <NotFound {...routeProps}></NotFound> }}></Route>
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
              </Suspense>
            </resourceContext.Provider>
          </BottombarContext.Provider>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;