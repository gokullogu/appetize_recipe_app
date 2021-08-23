import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl  from 'react-bootstrap/FormControl'

import { Link } from 'react-router-dom'


const NavbarComp = ({ item1, item2, item3,/*  searchvalue */})=>{

    return(
        <Navbar bg="primary" variant="dark" >
            <Navbar.Brand href="#home">
                <img
                    src="./mylogoo.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="logo"
                />
                <span style={{position:'relative',top:'3.5px',left:'10px',padding:'0',alignItems:'center',color:'#FED047'}}>Appetizing Recipes</span>
            </Navbar.Brand> 
            <Nav className="mr-auto" style={{marginLeft:'25px'}}>
                <Nav.Link href="/">{item1}</Nav.Link>
                <Nav.Link href="/contact">{item2}</Nav.Link>
                <Nav.Link href="/about">{item3}</Nav.Link>
            </Nav>
            {/* <Form inline  onSubmit={Search_input()} >
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/*   onChange={Search_input() }  />
                <Button variant="outline-success">Search
                </Button>
            </Form> */}
            <Button variant="danger" style={{borderRadius:'20px'}}>
                <Link to="/Login" style={{color:'white',textDecoration:'none'}}>register</Link>
            </Button>
        </Navbar>
    );
}
export default NavbarComp;