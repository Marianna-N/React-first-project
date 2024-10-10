import React, {useState, useEffect} from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';


function FormExample(props){
    const [alert, setAlert] = useState("info");
    const [user, setUser] = useState(props.user);
    
    
    useEffect( ()=> {
        console.log(alert)
    })
    
    function handleSubmit(e){
        console.log('handleSubmit')
        setAlert(alert === "danger" ? "info" : "danger");
        e.preventDefault()
        
    }
    
    function handleChange(e){
        const target = e.target;
        console.log(e);
        console.log(target);
        const value = target.value;
        const name = target.name;
        setUser({
            ...user,
            [name]: value                
        })      
        
    }
    
    return <Form onSubmit={handleSubmit}>
    <Alert variant={alert}>{user.firstName} {user.lastName}</Alert>
    <Alert variant="danger">{user.firstName} {user.lastName}</Alert>
    <Alert variant="warning">{user.firstName} {user.lastName}</Alert>
    <Row className="mb-3">
        <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="firstName"
                          value={user.firstName}
                          placeholder="First name"
                          onChange={handleChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control name="lastName"
                          value={user.lastName}
                          placeholder="Last name"
                          onChange={handleChange}/>
        </Form.Group>
    </Row>
    <Button variant="primary" type="submit">Submit</Button>
    </Form>;  
        
}


export default FormExample;
