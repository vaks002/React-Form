import React, { Component } from 'react';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CreateFrom extends Component {

   handleSubmit = (values) => {
         
   }

   render() {
       return (
           <div className="row row-content">
                    <div className="col-12 md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                            placeholder="First Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15) 
                                            }} />
                                    <Errors
                                       className="text-danger"
                                       model=".firstname"
                                       show="touched"
                                       messages={{
                                           required: 'Required  ',
                                           minLength: 'Must be Grater than 3  ',
                                           maxLength: 'Must be Less Than 15'
                                       }}
                                      />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                            placeholder="Last Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15) 
                                            }} />
                                    <Errors
                                       className="text-danger"
                                       model=".lastname"
                                       show="touched"
                                       messages={{
                                           required: 'Required  ',
                                           minLength: 'Must be Grater than 3  ',
                                           maxLength: 'Must be Less Than 15'
                                       }}
                                      />
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                            placeholder="Email"
                                            className="form-control"
                                            validators={{
                                                required, validEmail 
                                            }} />
                                    <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required  ',
                                        validEmail: 'Please Enter a Valid Email'
                                    }}
                                    />
                                   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                            placeholder="Tel. Number"
                                            className="form-control" 
                                            validators={{
                                                required, minLength: minLength(10), maxLength: maxLength(10), isNumber
                                            }} />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: 'Numbers is Less ',
                                            maxLength: 'Numbers is grater ',
                                            isNumber: 'Please Enter a Valid Number '
                                        }}
                                    />
                                </Col>
                            </Row> 
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                            rows="12"
                                            className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                       Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                         </Form> 
                    </div>
                </div>
       );
   }
}

export default CreateFrom;