import styled from "@emotion/styled";

export const Container = styled.section`
    width: 100%;
    display: flex;

    @media (min-width: 320px) and (max-width: 480px) {
        flex-direction: column;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background: url('../../roasted-coffee.jpg') no-repeat center center;
    background-size: cover;
    color: #fff;
    position: relative;
    z-index: 0;
    padding: 50px 30px;

    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0, 0, 0, .9);
        z-index: -1;
    }
`