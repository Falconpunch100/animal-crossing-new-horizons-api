import 'semantic-ui-css/semantic.min.css'
import { Loader, Sidebar } from "semantic-ui-react"
import { Route, BrowserRouter } from "react-router-dom"
import { HOMEPAGE, BUGS, FISH, SEACREATURES, FOSSILS, ART, SONGS, BGM, VILLAGERS } from "./routes/routes.js"
import { lazy, Suspense } from "react"
import Navbar from "./Navbar.js"
import BottomBar from "./BottomBar.js"
import resourceContext from "./context/resource.js"
import { useState } from "react"
import "./index.css"


// const Signup = lazy(() => {
//   return import("./pages/Signup.js")
// })
// const Login = lazy(() => {
//   return import("./pages/Login.js")
// })
const Resources = lazy(() => {
  return import("./pages/Resources.js")
})
const Songs = lazy(() => {
  return import("./pages/Songs.js")
})
const Villagers = lazy(() => {
  return import("./pages/Villagers.js")
})

function App() {
  const [resources, setResources] = useState(null)
  const [fullList, setFullList] = useState(null)
  return (
    <div className="App">
      <BrowserRouter>
        <resourceContext.Provider value={{
          resources, setResources, fullList, setFullList
        }}>
          <Navbar></Navbar>
          <Suspense fallback={<Loader active={true} size="huge"></Loader>}>
            <Sidebar.Pushable>
            <BottomBar></BottomBar>
              <Sidebar.Pusher>
                <Route path={HOMEPAGE}>
                </Route>
                <Route path={BUGS}>
                  <Resources page={"bugs"}></Resources>
                </Route>
                <Route path={FISH}>
                  <Resources page={"fish"}></Resources>
                </Route>
                <Route path={SEACREATURES}>
                  <Resources page={"sea"}></Resources>
                </Route>
                <Route path={FOSSILS}>
                  <Resources page={"fossils"}></Resources>
                </Route>
                <Route path={ART}>
                  <Resources page={"art"}></Resources>
                </Route>
                <Route path={SONGS}>
                  <Songs page={"songs"}></Songs>
                </Route>
                <Route path={BGM}>
                  <Songs page={"backgroundmusic"}></Songs>
                </Route>
                <Route path={VILLAGERS}>
                  <Villagers></Villagers>
                </Route>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Suspense>
        </resourceContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
