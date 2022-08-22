import React,{useContext,useState,useEffect} from 'react'
import { Link ,useParams} from 'react-router-dom';
import { GlobalContext } from './context/GlobalState';
import { useNavigate } from 'react-router-dom';
import  {
Form,
FormGroup,
Label,
Input,
Button
} from 'reactstrap';
export  default function EditUser(props) {
  const navigate=useNavigate();
  const {EditUser,users}=useContext(GlobalContext);
  const[selectedUser,setSelectedUser]=useState({
    id:null,
    name:''
  });
  
  const currentUserId=useParams();
  console.log(currentUserId);


  useEffect(() => {
   const userId=currentUserId;
   const selectedUser=users.find(user=>user.id===userId);
   setSelectedUser(selectedUser);
  },[currentUserId,users])



  const onChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    EditUser(selectedUser);
    console.log(selectedUser);
    navigate("/")
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>
          Name
          <Input onChange={onChange} type="text" placeholder="Enter the Name">

          </Input>
        </Label>
      </FormGroup>
      <Button type="submit">Edit Name</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  )
}
