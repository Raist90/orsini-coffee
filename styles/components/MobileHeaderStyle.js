import styled from '@emotion/styled';

export const Container = styled.header`
    z-index: 999;
    display: none;
    width: 100%;
    background: #1B1212;
    color: #fff;
    padding: 0 30px;
    height: 60px;
    display: flex;
    align-items: center;
    position: fixed;

    p {
        margin: 0;
    }

    @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    }
`

export const Navbar = styled.nav`
    flex: 1;
`

export const NavbarUl = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
`

export const NavbarLi = styled.li`
    /* line-height: 0; */

    h2 {
        font-size: 1.2rem;
        margin: 0;
    }

    &:last-child {
        background: #1b1b1b;
        border: 1px solid #ebebeb;
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        line-height: 0;
        transition: background linear 400ms;
    }

        &:last-child:hover {
            background: #A52A2A;
        }
`