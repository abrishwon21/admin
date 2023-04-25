import React,{Component, useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchSubjects } from './redux/actions/subject_action'
import { render } from 'react-dom';

 class SubjectList extends Component {
    

   componentDidMount(){

     this.props.fetchSubjects();
    
    }
   
  render()
  {
    // const {subject}=this.state;
  return(
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">Department</th>
      <th scope="col">Grade</th>
    </tr>
  </thead>
  <tbody>
  {this.props.subjects ?
    this.props.subjects.map((sub)=>{
        return <tr>
          <th scope="row">{sub.id}</th>
          <td>{sub.name}</td>
          <td>{sub.category}</td>
          <td>{sub.grade}</td>
        </tr>
    })
  :<h1>Loading ...</h1>

}
    
  </tbody>
</table>
    </div>
  )
}

 }

export default connect((state)=>({subjects:state.subjects.items}), {fetchSubjects})(SubjectList)