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
        let variant = this.state.alert === "danger" ? "info" : "danger";
        this.setState({user:this.props.user, alert: variant});
        
//        if(this.state.alert === "danger"){
//            this.setState({user:this.props.user, alert:"info"})
//        }else{
//            this.setState({user:this.props.user, alert:"danger"})
//        }

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
                    <Form.Control name="firstName" value={this.state.user.firstName} placeholder="First name"/>            
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" value={this.state.user.lastName} placeholder="Last name"/>  
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">Submit</Button>
            </Form>

    }   

}

export default FormExample;
