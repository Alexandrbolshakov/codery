import React from 'react';
import Nav from './Nav';
import './index.css';



class Header extends React.Component{

    render(){
        return(
            <>
            <header class="row bg-primary">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary navbar-expand col-8 col-sm-10 offset-1 offset-sm-2">   
<div >
  <div class="navbar-nav ">
        <Nav tabs={["Каталог","Доставка","Гарантии","Контакты"]}/>
        </div>
</div>
</nav>

  </header>
            </>
        )
    }
}

export default Header;