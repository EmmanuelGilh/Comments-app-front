import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditComment from './components/EditComment';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/edit/:id' element={<EditComment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
