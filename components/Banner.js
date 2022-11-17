import Link from 'next/link'
import { Container, Video, Content, Title, Paragraph } from '../styles/components/BannerStyle'
import { Btn } from '../styles/components/ButtonStyle'

const Banner = () => {
    return (
        <Container>
            <Video autoPlay loop muted plays-inline>
                <source src='../coffee.mp4' type="video/mp4" />
            </Video>
            <Content>
                <Title>Caffè Orsini</Title>
                <Paragraph>
                    Irure irure enim aliquip laboris nisi pariatur eiusmod irure fugiat culpa laboris nisi ipsum.
                </Paragraph>
                <Link href="#">
                    <Btn>
                        <span>Scopri di più</span>
                    </Btn>
                </Link>
            </Content>
        </Container>
    )
}

export default Banner