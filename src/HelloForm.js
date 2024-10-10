import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {Alert} from 'react-bootstrap';
import {useState} from 'react';

function HelloForm() {
    let user = {
        firstName: "Marianna",
        lastName: "Nikonova"
    };
    
    const [message, setMessage] = useState('');
    console .log(typeof([message, setMessage]));
    const [updated,setUpdated] = useState(message);
    const handleChange = (event) => {
        setMessage(event.target.value);
    };
    
    const handleClick = () =>{
        setUpdated(message);
    };
    
    const element = 
    <Form>
        <h2>Hello: {message}</h2>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">First Name </Form.Label>
            <Col sm="10">
              <Form.Control type="text" id="message" name="message" onChange={handleChange} placeholder="First name" defaultValue={user.firstName} />
            </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="2">Last Name </Form.Label>
            <Col sm="10">
              <Form.Control type="lastName" placeholder="Last name" defaultValue={user.lastName} />
            </Col>
        </Form.Group>
        <Button variant="primary" type="submit" onClick="{handleClick}">Submit</Button>
    </Form>;
    
    
    return (
        element
    );
}

export default HelloForm;
