import { SET_USER, LOGOUT, REGISTRATION } from '../actions/actionTypes'

const init = {
    isAuthentication:false,
    user:null
}


const authReducer = (store = init, action) => {
    switch(action.type){
        case SET_USER:{
            return {
                isAuthentication:action.payload ? true:false,
                user:action.payload
            }
        }
        case LOGOUT:{
            return{
                isAuthentication:false,
                user:null,
            }
        }
        case REGISTRATION:{
            return{
                init
            }
        }
        default:return store
    }
}


export default authReducer