import styled from "@emotion/styled"

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 50px;
    text-align: center;
    background: #1b1212;
    color: #fff;

    @media (min-width: 320px) and (max-width: 480px) {
        padding: 50px 30px;
    }
`

export const Title = styled.h2`
    position: relative;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 50px;
    width: 100%;
    justify-items: center;
    position: relative;

    @media (min-width: 721px) and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        row-gap: 50px;
    }

    @media (min-width: 320px) and (max-width: 720px) {
        grid-template-columns: 1fr;
        row-gap: 50px;
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
    color: #2b2b2b;
    text-align: left;
`

export const CardImg = styled.div`
    height: 200px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px 6px 0 0;
    }
`

export const CardText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    flex: 1;
    padding: 20px;
    background: #fff;
    text-align: center;

    p {
        margin: 0;
        font-size: .9rem;
    }
`