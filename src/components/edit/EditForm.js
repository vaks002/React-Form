import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Input from '../Input/Input';
import './EditForm.css';
import axios from '../../axios-create';

class CreateFrom extends Component {

    state = {
        createForm: {
            firstname: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'First Name'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            lastname: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Last Name'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 3,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Email'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 25
                },
                valid: false,
                touched: false
            },
            mobileno: {
                elementType: 'input',
                elementConfig: {
                        type: 'text',
                        placeholder: 'Mobile No.'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 10,
                    maxLength: 15
                },
                valid: false,
                touched: false
            },
            dob: {
                elementType: 'input',
                elementConfig: {
                        type: 'date',
                        placeholder: 'DOB'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 10
                },
                valid: false,
                touched: false
            },
            shortBio: {
                elementType: 'textarea',
                elementConfig: {
                        type: 'text',
                        placeholder: 'short description'
                    },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 100
                },
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    
    checkValidity = (value, rules) => {
        let isValid = true;

        if(!rules) {
            return true;
        }

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if(rules.minLength) {
            isValid = value.length >= rules.minLength  && isValid;
        }

        
        if(rules.maxLength) {
            isValid = value.length <= rules.maxLength  && isValid;
        }

        return isValid;
    }

    componentWillMount() {
        const newForm = {
            ...this.state.createForm
        }
        axios.get('./info/'+this.props.match.params["id"]+'.json').then(res=>{
           Object.keys(res.data).map((key) => {
                newForm[key].value = res.data[key];
            });
            this.setState({createForm: newForm});
        })
    }
    submitHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let key in this.state.createForm) {
            formData[key] = this.state.createForm[key].value;
        }

        axios.put('/info/'+this.props.match.params["id"]+'.json', formData).then(response=>{
            this.setState({loading: false});
            this.props.history.push('/viewform');
        }).catch(error=>{
            this.setState({loading: false});
        });

    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedCreateForm = {
            ...this.state.createForm
        };

        const updatedFormElement = {
            ...updatedCreateForm[inputIdentifier]
        };
       
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedCreateForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedCreateForm) {
            formIsValid = updatedCreateForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({createForm: updatedCreateForm, formIsValid: formIsValid}); 
    }
   
   render() {
        const formElementArray = [];
        for(let key in this.state.createForm){
            formElementArray.push({
                id: key,
                config: this.state.createForm[key]  
            });
        }
        console.log(formElementArray);
        let form = (
            <form onSubmit={this.submitHandler}>
                {formElementArray.map(formArray => (
                    <Input 
                           key={formArray.id}
                           elementType={formArray.config.elementType}
                           elementConfig={formArray.config.elementConfig}
                           value={formArray.config.value}
                           Invalid={!formArray.config.valid}
                           shouldValidate={formArray.config.validation}
                           touched={formArray.config.touched}
                           changed={(event) => this.inputChangedHandler(event, formArray.id)} />
                ))} 
                    <Button outline color='primary' disabled={this.state.formIsValid}>Submit Form</Button> 
               </form>
        );

        if (this.state.loading) {
            form = <p>Your Details Is Posted</p>;
         }
       return (
            <div className="ContactData">
                <h2 style={{textAlign: 'center'}}>Enter Your Details</h2>
                {form} 
            </div>
       );
   }
}

export default CreateFrom;