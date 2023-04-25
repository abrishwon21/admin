import { FETCH_SUBJECTS } from "../types/subject"
import Axios from 'axios';
export const fetchSubjects=()=>async(dispatch)=>{
   const res = await Axios.get("https://fetena.inspireethiopia.net/subject/subject-list/")
   const data =await res.data.data;
   dispatch({
    type:FETCH_SUBJECTS,
    payload: data
   })
}