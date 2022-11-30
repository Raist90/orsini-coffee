import { useState } from 'react'
import { Container, Navbar, NavbarUl, NavbarLi } from '../styles/components/MobileHeaderStyle'
import { GiHamburgerMenu } from 'react-icons/Gi'

const MobileHeader = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(true);
    }

    if (toggle) {
        return (
            <Container>
                <p>Test riuscito</p>
            </Container>
        )
    } else {
        return (
            <Container>
                <Navbar>
                    <NavbarUl>
                        <NavbarLi><h2>Caffè Orsini</h2></NavbarLi>
                        <NavbarLi>
                            <GiHamburgerMenu />
                        </NavbarLi>
                    </NavbarUl>
                </Navbar>
            </Container>
        )
    }
}

export default MobileHeader