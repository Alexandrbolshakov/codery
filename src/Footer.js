import React from 'react';
import Nav from './Nav';
import './index.css';


class Footer extends React.Component{

    render(){
        return(
            <>
            <footer class="row">
      <nav class="navbar fixed-bottom navbar-dark bg-dark col-12">
       <div class="navbar-nav ">
        <a class="nav-item nav-link" href="#"> @Codery.camp, 2019</a>
        </div>
      </nav>
   </footer>
            </>
        )
    }
}

export default Footer;