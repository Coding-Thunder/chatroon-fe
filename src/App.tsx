
import './App.css';
import Login from './pages/Login/Login';
import {
  Route,
  Routes
} from 'react-router-dom'
import SingnUp from './pages/SignUp/SingnUp';
import { useEffect, useState } from 'react';
import ChatRooms from './pages/ChatRooms/ChatRooms';


function App() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const user = sessionStorage.getItem("user")
    if (user) setUser(user)
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SingnUp />} />
        <Route path='/' element={<ChatRooms />} />
      </Routes>
    </div>
  );
}

export default App;
