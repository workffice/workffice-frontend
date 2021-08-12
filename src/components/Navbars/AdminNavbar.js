/*!

=========================================================
* Paper Dashboard PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import classnames from 'classnames';
import { useLocation } from 'react-router-dom';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
} from 'reactstrap';
import logo from '../../assets/img/Recurso 4.png';
// import avatar from '../../assets/img/faces/erik-lucatero-2.jpg';
// import {Avatar} from '../Avatar/Avatar';

function AdminNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [color, setColor] = React.useState('navbar-transparent');
  const location = useLocation();
  React.useEffect(() => {
    window.addEventListener('resize', updateColor);
  });
  React.useEffect(() => {
    if (
      window.outerWidth < 993 &&
      document.documentElement.className.indexOf('nav-open') !== -1
    ) {
      document.documentElement.classList.toggle('nav-open');
    }
  }, [location]);
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setColor('bg-white');
    } else {
      setColor('navbar-transparent');
    }
  };
  // this function opens and closes the sidebar on small devices
  const toggleSidebar = () => {
    document.documentElement.classList.toggle('nav-open');
    setSidebarOpen(!sidebarOpen);
  };
  // this function opens and closes the collapse on small devices
  // it also adds navbar-transparent class to the navbar when closed
  // ad bg-white when opened
  const toggleCollapse = () => {
    if (!collapseOpen) {
      setColor('bg-white');
    } else {
      setColor('navbar-transparent');
    }
    setCollapseOpen(!collapseOpen);
  };
  return (
    <>
      <Navbar
        className={classnames('navbar-absolute fixed-top', color)}
        expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classnames('navbar-toggle', {
                toggled: sidebarOpen,
              })}>
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </button>
            </div>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              <span className="d-none d-md-block">
                <img className="nav__logo" src={logo}></img>
              </span>
              <span className="d-block d-md-none">
                <image src={logo} alt=""></image>
              </span>
            </NavbarBrand>
          </div>
          <button
            aria-controls="navigation-index"
            aria-expanded={collapseOpen}
            aria-label="Toggle navigation"
            className="navbar-toggler"
            // data-target="#navigation"
            data-toggle="collapse"
            type="button"
            onClick={toggleCollapse}>
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
            <span className="navbar-toggler-bar navbar-kebab" />
          </button>
          <Collapse
            className="justify-content-end"
            navbar
            isOpen={collapseOpen}>
            <Form>
              <InputGroup className="no-border">
                <Input defaultValue="" placeholder="Search..." type="text" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="nc-icon nc-zoom-split" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Form>
            <Nav navbar>
              {/* <NavItem>
                <NavLink
                  className="btn-magnify fix__navlink"
                  href="#pablo"
                  onClick={e => e.preventDefault()}>

                  <Avatar img={avatar}></Avatar>
                  <p>
                    <span className="d-lg-none d-md-block">Perfil</span>
                  </p>
                </NavLink>
              </NavItem> */}
              <UncontrolledDropdown className="btn-rotate" nav>
                <DropdownToggle
                  aria-haspopup={true}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  id="navbarDropdownMenuLink"
                  nav>
                  <i className="nc-icon nc-settings-gear-65" />
                  <p>
                    <span className="d-lg-none d-md-block">Oficinas</span>
                  </p>
                </DropdownToggle>
                <DropdownMenu
                  persist
                  aria-labelledby="navbarDropdownMenuLink"
                  right>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Sucursales
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Oficinas
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Noticias
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Reportes
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Perfil
                  </DropdownItem>
                  <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
