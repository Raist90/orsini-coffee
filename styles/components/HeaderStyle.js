import styled from "@emotion/styled"

export const Container = styled.div`
    width: 100%;
    height: 60px;
    padding: 0;
    border-bottom: 1px solid #000;
    background: #1B1212;
    color: #fff;
    position: fixed;
    z-index: 999;

    @media (min-width: 320px) and (max-width: 480px) {
        display: none;
    }
`

export const Navbar = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ItemList = styled.ul`
    display: flex;
    column-gap: 2em;
    padding: 0;
    margin: 0;
    list-style: none;
    font-family: 'Inter', sans-serif;

    @media (min-width: 320px) and (max-width: 480px) {
        column-gap: 10px;
    }
`

export const Item = styled.li`
    font-size: .9rem;
    text-transform: uppercase;
    letter-spacing: 2px;

    @media (min-width: 320px) and (max-width: 480px) {
        font-size: .6rem;
        letter-spacing: initial;
    }
`