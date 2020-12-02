import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import DM from './pages/DM'
import DSOD from './pages/DSOD'
import GX from './pages/GX'
import DS from './pages/5DS'
import ZEXAL from './pages/ZEXAL'
import Card from './components/Card'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap'

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink><Link to='/'>Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/decktracker/DM'>Duel Monsters</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/decktracker/DSOD'>DSOD</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/decktracker/GX'>GX</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/decktracker/5DS'>5DS</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to='/decktracker/ZEXAL'>ZEXAL</Link></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/decktracker/DM" component={DM} />
          <Route path="/decktracker/DSOD" component={DSOD} />
          <Route path="/decktracker/GX" component={GX} />
          <Route path="/decktracker/5DS" component={DS} />
          <Route path="/decktracker/ZEXAL" component={ZEXAL} />
          
        </Switch>
      </div>


    </Router>
  )
}

export default App
