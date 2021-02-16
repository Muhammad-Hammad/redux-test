import { FETCHDATA_FAILURE, FETCHDATA_REQUEST, FETCHDATA_SUCCESS } from "../constants";

const initalState = {
    fetchData:{
        loading: true,
        success: false,
        error: false,
        errorMsg: "",
    },
    Data: [],
}
export default function reducer(state = initalState,action) {
    switch(action.type){
        case FETCHDATA_REQUEST:{
            return{
                ...state,
                fetchData:{
                    loading: true,
                    success: false,
                    error: false,
                    errorMsg: "",
                },
            }
        }
        case FETCHDATA_SUCCESS:{
            return{
                ...state,
                fetchData:{
                    loading: false,
                    success: true,
                    error: false,
                    errorMsg: "",
                },
                Data: [action?.payload?.data]
            }
        }
        case FETCHDATA_FAILURE:{
            return{
                ...state,
                ...state,
                fetchData:{
                    loading: false,
                    success: false,
                    error: false,
                    errorMsg: "",
                },
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

