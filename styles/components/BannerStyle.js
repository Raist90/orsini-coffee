import styled from "@emotion/styled"

export const Container = styled.div`
    width: 100%;
    height: 400px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
`

export const Video = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%; 
    height: 100%;
    color: #fff;
    text-align: center;

    @media (min-width: 320px) and (max-width: 480px) {
        width: 80%;
    }
`

export const Title = styled.h1`
    letter-spacing: 2px;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 15px;
`

export const Paragraph = styled.p`
    margin-top: 0;
    margin-bottom: 15px;
`