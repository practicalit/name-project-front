
import Axios from 'axios'

import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
     FETCH_USERS_FAILURE
    } from './actionType'
    
    export const fetchUsersRequest=()=>{
        return{
            type: FETCH_USERS_REQUEST
        }
    }
     const fetchUsersSuccess=users=>{
         return{
             type: FETCH_USERS_SUCCESS,
             payload: users
         }
     }
      const fetchUsersFailure=error=>{
          return{
              type:FETCH_USERS_FAILURE,
              payload:error
          }
      }
      export const fetchUsers=()=>{
          return(dispatch)=>{
              dispatch(fetchUsersRequest)
            const payload = { meaning: detail, name: name };
            fetch(
              `${process.env.REACT_APP_BACK_SERVER}${process.env.REACT_APP_MEANING_API}`,
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
              }
            )
              .then(response=> 
                {const users= response.data
                dispatch(fetchUsersSuccess(users))})
            
              .catch(error=>{
                  const errorMsg= error.message
                  dispatch(fetchUsersFailure(errorMsg))
              } )
          } 
          
      }
    

          
      