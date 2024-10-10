import React from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';


class FormExample_1 extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    handleSubmit(e){
        console.log('handleSubmit');
        e.preventDefault(); //прерываем Submit
    }
    
    componentDidMount(){
        console.log('componentDidMount');        
    }
    
    componentWillMount(){
        console.log('componentWillMount');        
    }
    
    render(){
        return <Form onSubmit={this.handleSubmit}>
            <Alert>{this.props.user.firstName} {this.props.user.lastName}</Alert>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" value={this.props.user.firstName} placeholder="First name"/>            
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" value={this.props.user.lastName} placeholder="Last name"/>  
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">Submit</Button>
            </Form>

    }   

}

export default FormExample_1;
