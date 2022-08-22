import React,{useState,useContext} from 'react';
import { Link,useNavigate} from 'react-router-dom';
import {GlobalContext} from './context/GlobalState';
import {v4 as uuid} from 'uuid';
import  {
Form,
FormGroup,
Label,
Input,
Button
} from 'reactstrap';

export default function AddUser() {
  const[name,setName]=useState('');
  const {AddUser}=useContext(GlobalContext);

  const navigate=useNavigate();

  const onChange=(e)=>
  {
setName(e.target.value);
  }


  const onSubmit=(e)=>
  { 
    e.preventDefault();
    const newUser={
    id: uuid(),
    name:'user Four'
  }


  AddUser(newUser)
    navigate("/")
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>
          Name
          <Input type="text" value={name} 
          onChange={onChange} 
          name="name"
          placeholder="Enter User" required>
          </Input>
        </Label>

      </FormGroup>
      <Button type="submit">Submit</Button>
    <Link to="/" className='btn btn-danger ml-2'>Cancel
    </Link></Form>
  )
}
