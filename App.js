import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home';
import PortfolioPage from './Pages/PortfolioPage';

function App() {
return (
    <Router>
    <div className="App">
        <Header />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" component={PortfolioPage} />
          {/* Add routes for other sections */}
        </Switch>
        <Footer />
    </div>
    </Router>
);
}

export default App;
