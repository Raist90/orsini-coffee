import Link from 'next/link'
import { Container, Navbar, ItemList, Item } from '../styles/components/HeaderStyle'

const Header = () => {
    return (
        <Container>
            <Navbar>
                <ItemList>
                    <Link href="/"><Item>Home</Item></Link>
                    <Link href="#storia"><Item>Perché sceglierci</Item></Link>
                    <Link href="#caffe"><Item>I nostri caffè</Item></Link>
                    <Link href="#contattaci"><Item>Contattaci</Item></Link>
                </ItemList>
            </Navbar>
        </Container>
    )
}

export default Header