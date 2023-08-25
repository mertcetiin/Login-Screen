import { Route, Routes } from 'react-router-dom';
import './App.css'
import LoginUser from './components/LoginUser';
import LoginEmail from './components/LoginEmail';

function App() {


  return (
    <div>
      <Routes>
        <Route path='' element={<LoginUser />} />
        <Route path='/email' element={<LoginEmail />} />
      </Routes>
    </div>
  )
}

export default App;