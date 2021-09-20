import {NavLink,Route,Switch} from "react-router-dom"
import {Table,Button,Navbar,Container,Nav} from "react-bootstrap"
import './nav.css'
import DisplayComments from "../Components/displayComments"
export default function NavApp()
{
return(
    // <BrowserRouter>
    <Navbar  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">PostGram</Navbar.Brand>
    <Nav className="ms-auto ">
      <Nav.Link ><NavLink className="link" activeClassName="selected" exact to="/" activeClassName="selected">Home</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className="link" activeClassName="selected" to="/posts" activeClassName="selected">Posts</NavLink></Nav.Link>
      <Nav.Link ><NavLink  className="link" activeClassName="selected" to="/about" activeClassName="selected">About</NavLink></Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  /* <Switch>
    <Route path="/" exact  component={Home}/>
    <Route path="/posts"   component={Post}/>
    <Route path="/posts/:id"   component={DisplayComments}/>
    <Route path="/about"   component={About}/>
    
     </Switch> */
    // </BrowserRouter>
)
}