import React, { Component } from 'react';
import { Button } from 'reactstrap';

class Tables extends Component {
 
  render() {
    return (
        <tbody>
          <tr>
            <td>{this.props.firstname}</td>
            <td>{this.props.lastname}</td>
            <td>{this.props.email}</td>
            <td>{this.props.mobileno}</td>
            <td>{this.props.dob}</td>
            <td>{this.props.shortbio}</td>
            <td>
              <Button outline color='primary' onClick={this.props.clicked}>Edit</Button>
            </td>
            <td>
              <Button outline color='danger' onClick={this.props.delete}>Delete</Button>
            </td>
          </tr>
        </tbody>
    );
  }
}

export default Tables;