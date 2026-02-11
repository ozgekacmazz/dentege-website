import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Treatments from './pages/Treatments';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import BlogDetail from "./pages/BlogDetail";




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
                    <Route path="/blog/:slug" element={<BlogDetail />} />

                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
