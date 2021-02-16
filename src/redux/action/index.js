import axios from "axios"
import { FETCHDATA_FAILURE, FETCHDATA_REQUEST, FETCHDATA_SUCCESS } from "../constants"

const requestData = () =>{
    return{
        type: FETCHDATA_REQUEST,
    }
}
const receiveData = (data) =>{
    return {
        type: FETCHDATA_SUCCESS,
        payload: { data }
    }
}
const failureData = (data)=>{
    return{
        type: FETCHDATA_FAILURE,
        payload: { data }
    }
}
export const FetchData = () => dispatch =>{
    dispatch(requestData());
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res =>{
        const allpost = res.data;
        dispatch(receiveData(allpost));
    }).catch((err)=>{
        dispatch(failureData(err));
        console.log(err);
    })
}