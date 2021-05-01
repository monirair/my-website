import { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio from './pages/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails';
import FrontPage from './pages/FrontPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { AboutPage } from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Header />
      <Route path='/' exact component={FrontPage} />
      <Route path='/about' exact component={AboutPage} />
      <Route path='/contact' exact component={ContactPage} />
      <Route path='/blog' exact component={BlogPage} />
      <Route path='/portfolio' exact component={Portfolio} />
      <Route path='/portfolio/:id' component={PortfolioDetails} />
      <Footer />
    </Router>
  );
};

export default App;
