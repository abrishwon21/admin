
import './App.css';
import Navbar from './components/Navbar';
import CreateSubject from './components/create_subject';
import { Provider } from 'react-redux';
import Store from './components/redux/store';
import SubjectList from './components/subject_list';
function App() {
  return (
    <Provider store={Store }>
    
    <div className="container">
      <Navbar/>
<CreateSubject/>
<SubjectList/>
    </div>
    </Provider>
  );
}

export default App;
