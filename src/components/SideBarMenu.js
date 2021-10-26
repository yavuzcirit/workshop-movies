import React,{useState,useEffect} from 'react';

import './SideBarMenu.css'




const SideBarMenu=({takeYear})=>{


	const [term,setTerm]=useState('')

  

	useEffect(()=>{
		takeYear(term)
	},[term])

	

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


console.log(term)

	return (
		<div>


<div className="navbar">
  <div className="dropdown">
  <button className="dropbtn" onClick={myFunction}>Sort By Years
  </button>
  <div className="dropdown-content" id="myDropdown">
    <a id='2012' href="#2012" onClick={(item)=>setTerm(item.target.innerHTML)}>2012</a>
    <a id='2013' href="#2013" onClick={(item)=>setTerm(item.target.innerHTML)}>2013</a>
    <a id='2014' href="#2014" onClick={(item)=>setTerm(item.target.innerHTML)}>2014</a>
    <a id='2015' href="#2015" onClick={(item)=>setTerm(item.target.innerHTML)}>2015</a>
    <a id='2016' href="#2016" onClick={(item)=>setTerm(item.target.innerHTML)}>2016</a>

    <a id='2017' href="#2017" onClick={(item)=>setTerm(item.target.innerHTML)}>2017</a>
    <a id='2018' href="#2018" onClick={(item)=>setTerm(item.target.innerHTML)}>2018</a>
    <a id='2019' href="#2019" onClick={(item)=>setTerm(item.target.innerHTML)}>2019</a>
    <a id='2020' href="#2020" onClick={(item)=>setTerm(item.target.innerHTML)}>2020</a>
    <a id='2021' href="#2021" onClick={(item)=>setTerm(item.target.innerHTML)}>2021</a>

  </div>
  </div> 
</div>

	

		</div>)
}



export default SideBarMenu;