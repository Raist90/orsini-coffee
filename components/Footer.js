import { StyledFooter } from "../styles/components/FooterStyle"

const Footer = () => {
    return (
        <StyledFooter>
            <p>© {new Date().getFullYear()} Caffè Orsini. All rights reserved.</p>
        </StyledFooter>
    )
}

export default Footer