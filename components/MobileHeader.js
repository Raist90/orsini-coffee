import Link from 'next/link'
import { useState } from 'react'
import { Container, Navbar, NavbarUl, NavbarLi, ToggleNavContainer, Item } from '../styles/components/MobileHeaderStyle'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const MobileHeader = () => {
    let [toggleNav, setToggleNav] = useState(0)
    const handleToggleNav = () => {
        toggleNav == 0
            ? setToggleNav(toggleNav = 1)
            : setToggleNav(toggleNav = 0)
    }

    return (
        <>
            <Container>
                <Navbar>
                    <NavbarUl>
                        <NavbarLi><h2>Caffè Orsini</h2></NavbarLi>
                        {toggleNav == 1 ? (
                            <NavbarLi onClick={handleToggleNav}>
                                <AiOutlineClose />
                            </NavbarLi>
                        ) : (
                            <NavbarLi onClick={handleToggleNav}>
                                <GiHamburgerMenu />
                            </NavbarLi>
                        )
                        }
                    </NavbarUl>
                </Navbar>
            </Container>
            <ToggleNavContainer className={toggleNav == 1 ? 'showMe' : 'hideMe'}>
                <ul>
                    <Link href="/" onClick={handleToggleNav}>
                        <Item>Home</Item>
                    </Link>
                    <Link href="#storia" onClick={handleToggleNav}>
                        <Item>Perché sceglierci</Item>
                    </Link>
                    <Link href="#caffe" onClick={handleToggleNav}>
                        <Item>I nostri caffè</Item>
                    </Link>
                    <Link href="#contattaci" onClick={handleToggleNav}>
                        <Item>Contattaci</Item>
                    </Link>
                </ul>
            </ToggleNavContainer>
        </>
    )
}

export default MobileHeader