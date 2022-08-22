import React,{createContext,useReducer } from 'react';
import AddReducer from './AppReducer';



const initialState= {
  
   users:
   []
}



//create context
export const GlobalContext=createContext(initialState);

//provider
//context.provider

export const GlobalProvider=({children})=>
{


const[state,dispatch]=useReducer(AddReducer,initialState);



// const[state,dispatch]=useReducer(AddReducer,initialState);

//actions
const RemoveUser=( id)=>{

    dispatch({
        type:'REMOVE_USER',
        payload:id
    })
}


const AddUser=(user)=>
{
    dispatch({
        type:'ADD_USER',
        payload:user
    })
}

const EditUser=(user)=>
{
    dispatch({
        type:'EDIT_USER',
        payload:user
    })
    
   
}
 return(
     <GlobalContext.Provider value={{
 users:state.users,
  RemoveUser,
 AddUser,
 EditUser
     }}> 

        {children}
        </GlobalContext.Provider>
)}


