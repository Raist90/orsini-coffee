import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Link from 'next/link'
import { Container, LeftCol, RightCol, Title, CupPic } from '../styles/components/AboutStyle'
import { Btn } from '../styles/components/ButtonStyle'

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Container>
            <LeftCol>
                <Title id="storia">Perché sceglierci?</Title>
                <p>
                    Consectetur consectetur id enim quis amet pariatur officia officia est quis occaecat. Ut fugiat minim duis nisi tempor ad velit eiusmod. In nulla eu sit aute incididunt elit laboris voluptate labore ullamco consectetur incididunt. Sunt consequat id velit est dolore incididunt consectetur eu dolore nulla minim.
                </p>
                <p>
                    Cillum proident ex sint ullamco cillum eiusmod aliqua ipsum tempor officia adipisicing exercitation velit aute.
                </p>
                <Link href="#">
                    <Btn><span>Contattaci</span></Btn>
                </Link>
            </LeftCol>

            <RightCol>
                <CupPic
                    src="../tazza-caffe.jpg"
                    alt="tazza di caffè"
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                />
            </RightCol>
        </Container>
    )
}

export default About