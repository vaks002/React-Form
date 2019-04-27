import React, { Component } from 'react';
import { NavLink, Button } from 'reactstrap';

class Buttons extends Component {
    render() {
        return (
            <div className="container App">
                <div className="Button1">
                    <NavLink href="/createform">
                        <Button outline color="primary">Create Form</Button>
                    </NavLink>
                </div>
                <div className="Button2">
                    <NavLink href="/viewform">
                        <Button outline color="danger">View Form</Button>
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default Buttons;