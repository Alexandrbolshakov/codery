import React from 'react';
import Nav from './Nav';
import './index.css';


class Main extends React.Component{

    render(){
        return(
            <main class="row justify-content-center">
      <div class="col-8 col-sm-10">
      <div>
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Каталог</a></li>
            <li class="breadcrumb-item"><a href="#">Вентиляция</a></li>
            <li class="breadcrumb-item"><a href="#">ПВУ</a></li>
          </ol>
        </nav>
      </div>
      <div>
        <p>
        ПВУ Turkov ZENIT 350 HECO
        </p>
      </div>
      <div class="nav nav-tabs">
        <Nav tabs={["Описание","Характеристики", "Отзывы"]}/>
      </div>
      
      <div class="row">
      <img src="https://www.codery.school/content/course/lesson3-task-img.png" class="col-3 img-fluid"/>
      <p class="col">
      Вентиляционная установка с рекуперацией тепла и влаги в лёгком и универсальном корпуса из вспененного полипропилена предназначена для поддержания климата в жилых пмещениях, или небольших офисах, магазинах
      </p>
      </div>
      <button type="button" class="btn btn-primary">
      Заказать
      </button>
      </div>
    </main>
        )
    }
}

export default Main;