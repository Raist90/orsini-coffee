import { Container, FormContainer } from '../styles/components/CtaStyle'
import Image from 'next/image'

const Cta = () => {
    return (
        <Container id="contattaci">
            <FormContainer>
                <h2>Contattaci</h2>
                <form>
                    <input type="text" name="name" placeholder="Il tuo nome" />
                    <input type="email" name="email" placeholder="La tua email" />
                    <textarea name="textarea" rows="5" placeholder="Scrivi qui il tuo messaggio..." />
                    <input type="submit" value="Invia messaggio" />
                </form>
            </FormContainer>
        </Container>
    )
}

export default Cta