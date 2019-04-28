import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = ['InputElement']

    if(props.Invalid && props.shouldValidate && props.touched) {
        inputClasses.push('Invalid');
    }

    switch(props.elementType) {
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig}
                                    value={props.value}
                                    onChange={props.changed} />;
            break;

        case('textarea'):
            inputElement = <textarea  className={inputClasses.join(' ')} {...props.elementConfig}
                                    value={props.value}
                                    onChange={props.changed} />;
            break;

        default:
            inputElement = <input  className='InputElement' {...props.elementConfig}
                                    value={props.value} />;
    }

    return (
            // <label className='Label'>{props.label}</label>
            <div className='Input'>
                {inputElement} 
            </div>  
    );
}

export default input;