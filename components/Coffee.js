import Image from 'next/image'
import Link from 'next/link'
import { Btn } from '../styles/components/ButtonStyle'
import { CardContainer, CardImg, CardText, Container, Grid, Title } from '../styles/components/CoffeeStyle'

const Coffee = () => {
    return (
        <Container>
            <div>
                <Title id="caffe">I nostri caffè</Title>
                <p>In irure in laboris voluptate magna officia amet ullamco ea non dolor.</p>
            </div>

            <Grid>
                <CardContainer>
                    <CardImg>
                        <Image
                            src="/../public/3.jpg"
                            layout="fill"
                        />
                    </CardImg>
                    <CardText>
                        <p>
                            Commodo duis magna magna pariatur mollit cupidatat sit consequat. Eu id dolor aliqua enim ut Lorem ea magna sunt esse minim esse.
                        </p>
                        <Link href="#">
                            <Btn><span>Scopri di più</span></Btn>
                        </Link>
                    </CardText>

                </CardContainer>
                <CardContainer>
                    <CardImg>
                        <Image
                            src="/../public/2.jpg"
                            layout="fill"
                        />
                    </CardImg>
                    <CardText>
                        <p>
                            Commodo duis magna magna pariatur mollit cupidatat sit consequat. Eu id dolor aliqua enim ut Lorem ea magna sunt esse minim esse.
                        </p>
                        <Link href="#">
                            <Btn><span>Scopri di più</span></Btn>
                        </Link>
                    </CardText>
                </CardContainer>

                <CardContainer>
                    <CardImg>
                        <Image
                            src="/../public/1.jpg"
                            layout="fill"
                        />
                    </CardImg>
                    <CardText>
                        <p>
                            Commodo duis magna magna pariatur mollit cupidatat sit consequat. Eu id dolor aliqua enim ut Lorem ea magna sunt esse minim esse.
                        </p>
                        <Link href="#">
                            <Btn><span>Scopri di più</span></Btn>
                        </Link>
                    </CardText>
                </CardContainer>

                <CardContainer>
                    <CardImg>
                        <Image
                            src="/../public/4.jpg"
                            layout="fill"
                        />
                    </CardImg>
                    <CardText>
                        <p>
                            Commodo duis magna magna pariatur mollit cupidatat sit consequat. Eu id dolor aliqua enim ut Lorem ea magna sunt esse minim esse.
                        </p>
                        <Link href="#">
                            <Btn><span>Scopri di più</span></Btn>
                        </Link>
                    </CardText>
                </CardContainer>
            </Grid>
        </Container>
    )
}

export default Coffee