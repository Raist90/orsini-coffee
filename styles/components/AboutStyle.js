import styled from "@emotion/styled";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 70px;
    padding: 100px 50px;
    background: rgb(27,18,18);
    background: linear-gradient(180deg, rgba(27,18,18,1) 20%, rgba(0,0,0,1) 100%);
    color: #fff;

    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
        row-gap: 50px;
}

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
        row-gap: 50px;
        padding: 30px;
    }
`

export const LeftCol = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
`
export const Title = styled.h2`
`

export const RightCol = styled.div`
    display: flex;
    flex: 1;
`

export const CupPic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0 8px 6px -6px black;
`

