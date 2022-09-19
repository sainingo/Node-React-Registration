import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return (
    <div className="w-full h-screen bg-blue-100">
    <Header />
   <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
   </Routes>
    </div>
  );
}

export default App;
