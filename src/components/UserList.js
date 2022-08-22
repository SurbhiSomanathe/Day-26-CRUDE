import React ,{useContext} from "react";
import { Link } from "react-router-dom";
import './UserList.css';
import  { GlobalContext } from "./context/GlobalState";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export default function UserList() {
  const {users,RemoveUser}=useContext(GlobalContext);
  console.log(users,RemoveUser);
  return (
    <ListGroup className="mt-4">
      {
        users.map(user=>(
          <ListGroupItem className="d-flex">
        <strong>User One</strong>

        <div className="ml-auto">
          <Link className="btn btn-warning  md-1" to={`/edit/${user.id}`}>
            Edit
          </Link>
          <Button onClick={()=>RemoveUser(user.id)}color="danger">Delete</Button>
        </div>
      </ListGroupItem>
   
        ))
      }
     



      
    </ListGroup>
  )
}
