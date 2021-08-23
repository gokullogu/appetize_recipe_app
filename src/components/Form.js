import Form from 'react-bootstrap/Form'
import FormCheck from 'react-bootstrap/FormCheck'
import Button from 'react-bootstrap/Button'
import FormFile from 'react-bootstrap/FormFile'
const FormComp =()=>{
    return(
        <Form style={{ backgroundColor:'#E9ECEF',margin:'0px auto',padding:'15%'}}>
            <Form.Group controlId="formBasicEmail" style={{width:'70%'}}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group >
                <Form.Label>Your comments</Form.Label><br></br>
                <textarea rows="5" cols="65" placeholder="your comments"></textarea><br></br><br></br>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default FormComp;