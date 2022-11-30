import Link from 'next/link'
import { useState } from 'react'
import { Container, Navbar, NavbarUl, NavbarLi, ToggleNavContainer, Item } from '../styles/components/MobileHeaderStyle'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const MobileHeader = () => {
    let [toggleNav, setToggleNav] = useState(0)
    const handleToggleNav = () => {
        if (toggleNav == 0) {
            setToggleNav(toggleNav = 1);
        } else {
            setToggleNav(toggleNav = 0);
        }
        console.log(toggleNav);
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
                    <Link href="#" onClick={handleToggleNav}>
                        <Item>Contatti</Item>
                    </Link>
                </ul>
            </ToggleNavContainer>
        </>
    )

    // if (toggle) {
    //     return (
    //         <Container>
    //             <p>Test riuscito</p>
    //         </Container>
    //     )
    // } else {
    //     return (
    //         
    //     )
    // }
}

export default MobileHeader