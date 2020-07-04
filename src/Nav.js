import React from 'react';
import './App.css';

class Nav extends React.Component{

constructor(props){
  super(props);
  this.state = {
    activeIndex: 0
  }
  this.onActiveClick = this.onActiveClick.bind(this)
}

onActiveClick = (event) => {
  const dataIndex = Number(event.currentTarget.getAttribute("data-index"))
  this.setState({
    activeIndex: dataIndex
  })
} 

render(){
  let aI = this.state.activeIndex;
  return (
    <>
    <ul class="nav nav-tabs" >{
    this.props.tabs.map((item, index)=>{
      const act = "nav-link active";
      const noAct = "nav-link";
      return <li class="nav-item">
              <a class={aI===index ? act : noAct}  onClick={this.onActiveClick} href="#" data-index={index} >{item}</a>
           
            </li>
    })}
</ul>
</>
)
}
}

// const tabs = <Nav tabs={[ "Описание", "Фотографии", "Отзывы" ]} />
// const root = document.querySelector("#root")

// ReactDOM.render(tabs, root)
export default Nav;
