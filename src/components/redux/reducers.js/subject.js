import { FETCH_SUBJECTS } from "../types/subject";

export const subjectReducer = (state={}, action)=>{
    switch(action.type){
        case FETCH_SUBJECTS:
            return {items:action.payload};
        default:
            return state;
    }
}