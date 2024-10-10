import React from 'react';
import {Alert, Button, Col, Form, Row} from 'react-bootstrap';


class FormExample extends React.Component{
    constructor(props){
        super(props);  
        this.state = {user:props.user, alert: "info"};
        this.handleSubmit = this.handleSubmit.bind(this); // подружим "state" с функцией класса // чтобы был один контекст
        this.handleChange = this.handleChange.bind(this); 
    }
    
    handleSubmit(e){
        console.log('handleSubmit');
        
        this.setState((state,props) => {
            let variant = state.alert === "danger" ? "info" : "danger";
            return Object.assign({}, state, {alert: variant})
        })

        e.preventDefault(); //прерываем Submit
    }
    
    handleChange(e){
        console.log(e);
        const target = e.target;
        console.log(target);
        const value = target.value;
        const name = target.name;
        console.log(name);
        console.log(this.state);
        console.log(this.state.user);
        this.setState((state) => ({
            user: {
                ...state.user,
                [name]: value ///ключ берётся из переменной, т.е. это будет или LastName или FirstName
            }
        }))
        console.log(this.state);
        
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
                    <Form.Control name="firstName"
                                  value={this.state.user.firstName}
                                  placeholder="First name"
                                  onChange={this.handleChange}/>            
                </Form.Group>
                <Form.Group as={Col} controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control name="lastName" 
                                  value={this.state.user.lastName}
                                  placeholder="Last name"
                                  onChange={this.handleChange}/>  
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">Submit</Button>
            </Form>

    }   

}

export default FormExample;
