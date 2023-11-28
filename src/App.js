import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Main from './components/pages/Main';
import { Cadastro } from './components/pages/Cadastro';
import Home from './components/pages/Home';
import Footer from './components/Footer'
import './App.css';
import { Login } from './components/pages/Login';
import { CardApi } from './components/pages/CardApi';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro1" element={<Cadastro />} />
          <Route path="/user" element={<CardApi />} />
          <Route path="/home/:id" element={<Home />} />
        </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
