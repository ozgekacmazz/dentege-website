import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';




function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tedaviler" element={<Treatments />} />
                    <Route path="/hakkimizda" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/iletisim" element={<Contact />} />
                    <Route path="/randevu" element={<Appointment />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
