import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardComp from './Card'

const ContainerComp = ()=>{
    return(
        <Container>
            <Row>
                <Col ><CardComp /></Col>
                <Col><CardComp /></Col>
                <Col><CardComp /></Col>
            </Row>
        </Container>
    );
}

export default ContainerComp;