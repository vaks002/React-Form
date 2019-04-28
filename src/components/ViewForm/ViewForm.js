import React, { Component } from 'react';
import axios from '../../axios-create';
import Tables from '../Tables/Tables';
import { Table } from 'reactstrap';
import Input from '../Input/Input';


class ViewForm extends Component {

   state = {
       details: [],
       loading: true,
       datainfo: []
   }
   
   componentDidMount () {
       axios.get('./info.json').then(res => {
        const fetchDetails = []
        for (let key in res.data) {
            fetchDetails.push({
                ...res.data[key],
                 id: key});
        }
        this.setState({loading: false, details: fetchDetails});
       }).catch(err => {
           this.setState({loading: false});
       });
   }

   deleteHandler =  postId => {
       axios.delete('./info/'+postId+'.json').then(
           res=>{
              this.props.history.push('/');
           }).catch(err => {
               console.log(err);
           })
   }

   updateHandler = postsId => {
       axios.get('./info/'+postsId+'.json').then(res=>{
            this.props.history.push('/editform/'+postsId)
           });
   }

   render() {
       return (
           <div>
               <Table hover>
                 <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Mobile No.</th>
                        <th>DOB</th>
                        <th>Short Bio</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                 </thead>
                 {this.state.details.map(detail => (
                      <Tables key={detail.id}
                            firstname={detail.firstname}
                            lastname={detail.lastname}
                            email={detail.email}
                            mobileno={detail.mobileno}
                            dob={detail.dob}
                            shortbio={detail.shortBio}
                            delete = {() => this.deleteHandler(detail.id)}
                            clicked = {() => this.updateHandler(detail.id)} />
                  ))}
                </Table>
            </div>
       );
   }
}

export default ViewForm;