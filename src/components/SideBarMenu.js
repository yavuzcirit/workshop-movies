import React,{useState,useEffect} from 'react';
import axios from 'axios'
import './SideBarMenu.css'
import Videos from './Videos'



const SideBarMenu=()=>{


	const [term,setTerm]=useState('')

  

	const onClickHandler=(item)=>{
		
		setTerm(item)
		console.log(term)
	}

	

	const myFunction=()=>{
	document.getElementById("myDropdown").classList.toggle("show")
	}

	window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

	return (
		<div>


<div className="navbar">
  <div className="dropdown">
  <button className="dropbtn" onClick={myFunction}>Sort By Years
  </button>
  <div className="dropdown-content" id="myDropdown">
    <a id='2017' href="#2017" onClick={onClickHandler}>2017 Films</a>
    <a id='2018' href="#2018" onClick={onClickHandler}>2018 Films</a>
    <a id='2019' href="#2019" onClick={onClickHandler}>2019 Films</a>
    <a id='2020' href="#2020" onClick={onClickHandler}>2020 Films</a>
    <a id='2021' href="#2021" onClick={onClickHandler}>2021 Films</a>

  </div>
  </div> 
</div>

	

		</div>)
}



export default SideBarMenu;