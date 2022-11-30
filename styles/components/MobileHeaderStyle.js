import styled from '@emotion/styled';

export const Container = styled.header`
    display: none;

    p {
        margin: 0;
    }

    @media (min-width: 320px) and (max-width: 480px) {
        display: flex;
        width: 100%;
        background: #1B1212;
        color: #fff;
        padding: 0 30px;
        height: 60px;
        display: flex;
        align-items: center;
        position: fixed;
        z-index: 999;
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
        transition: all linear 400s;
    }

        &:last-child:hover, &:last-child:focus {
            background: #A52A2A;
        }
`

export const ToggleNavContainer = styled.div`
    position: fixed;
    width: 100%;
    background: rgba(27, 18, 18, .9);
    color: #fff;
    margin-top: 60px;
    z-index: 999;
    border: 1px solid #000;
    transition: all 100ms linear;

    ul {
        list-style: none;
        margin: 0;
        padding: 20px 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
`

export const Item = styled.span``