
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from '@material-ui/core/Button';
import Form from 'react-bootstrap/Form';
import logo from '../../../images/logo.png';
/*import NavBarCart from './NavBarCart';
import NavBarAvatar from './NavBarAvatar';
*/
const linkStyle = {
    color: "#fff",
    fontFamily: 'Poppins',
    fontWeight: 300
}

const buttonStyle = {
    color: "#fff",
    backgroundColor: "#FA334E",
    fontFamily: 'Poppins',
    fontWeight: 400,
    borderRadius: '6px',
    width: '100px',
    boxShadow: '0px 0px 4px #FA334E'
}

function NavBar(props) {
    return (
        <div>
            <Navbar className="shadow-sm p-3 navbar-custom" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand href="/"><img src={logo} alt="shop-logo" className="logo-image" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="/" style={linkStyle} className="mx-3">HOME</Nav.Link>
                        <Nav.Link href="/cart" style={linkStyle} className="mx-3">SHOP</Nav.Link>
                        <Nav.Link href="/gallery" style={linkStyle} className="mx-3">ABOUT</Nav.Link>
                        <Nav.Link href="#pricing" style={linkStyle} className="mx-3">CONTACT</Nav.Link>
                        <Nav.Link href="/profile" style={linkStyle} className="mx-3">PROFILE</Nav.Link>
                    </Nav>
                    <Nav>
                        
                        {/*(props.getUserRole === "User" || props.getUserRole === "Admin") ? ( 
                            <Form>
                                <Nav className="mx-auto">
                                    <Nav.Link style={linkStyle} className="mx-2">
                                        <NavBarCart />
                                    </Nav.Link>
                                    <Nav.Link style={linkStyle} className="mx-2"><NavBarAvatar getUser={props.getUserName}></NavBarAvatar></Nav.Link>
                                </Nav>


                            </Form>
                        ) : (*/}
                            <Form>
                                <Button className="mx-3" variant="contained" style={buttonStyle} href="/signin">SIGN IN</Button>
                                <Button className="mx-3" variant="contained" style={buttonStyle} href="/signup">SIGN UP</Button>
                            </Form>
                       {/*} )*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar;