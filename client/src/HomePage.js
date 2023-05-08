
import { Route, Routes, useNavigate } from 'react-router';
import logo from './phoenix-36-logo.png';
import StudentRegistration from './StudentRegistration';
function HomePage(){

  const navigate=useNavigate()
   
    return (<>

      
      <Routes>
    
      <Route exact path='/student/list'></Route>
      <Route exact path='/book/hostel'></Route>
      <Route exact path='/library/assign'></Route>
      <Route exact path='/contact'></Route>
      
     </Routes>
      </>
      )
}


export default HomePage;
