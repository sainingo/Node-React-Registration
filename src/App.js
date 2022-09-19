import {Routes, Route} from 'react-router-dom';

import Header from "./components/Header";
import Login from "./components/Login";
import Registration from "./components/Registration";


function App() {
  return (
    <>
    <Header />
   <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/login" element={<Login />} />
   </Routes>
    </>
  );
}

export default App;
