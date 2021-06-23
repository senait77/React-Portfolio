import react, { Component } from 'react';
import {Route, Redirect, HashRouter} from "react-router-dom";
import Navigation from '../../components/Navigation';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Portfolio from '../../components/Portfolio';
import Resume from '../../components/Resume';


class Header extends Component {
    render() {
        return (
         
        <HashRouter>
             <div className="row Header" id="header">
                <a href="https://jpd61.github.io/jpd-react-portfolio/"><img src="https://img.icons8.com/color/48/000000/astronaut.png" alt="Joseph DeWoody" class="icon" id="astro"/></a>
                <Navigation/>
            </div>
        </HashRouter>

        );
    }
}

export default Header;