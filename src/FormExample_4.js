import React from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';


class FormExample extends React.Component{
    constructor(props){
        super(props);  
        this.state = {user:props.user, alert: "info"};
        this.handleSubmit = this.handleSubmit.bind(this); // подружим "state" с функцией класса // чтобы был один контекст
    }
    
    handleSubmit(e){
        console.log('handleSubmit');
        
        this.setState((state,props) => {
            let variant = state.alert === "danger" ? "info" : "danger";
            return ({...state.user, alert: variant})
        })

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
            <Alert variant={this.state.alert}>{this.state.user.firstName} {this.state.user.lastName}</Alert>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control name="firstName" defaultValue={this.state.user.firstName} placeholder="First name"/>            
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" defaultValue={this.state.user.lastName} placeholder="Last name"/>  
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">Submit</Button>
            </Form>

    }   

}

export default FormExample;
