import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApartmentDetail from './components/ApartmentDetail';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apartments/:id" element={<ApartmentDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
