import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';

import { Login } from './pages/Auth';
import { Home } from './pages/Home';
import { Posts } from './pages/Posts';



function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
