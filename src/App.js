import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Videos from './components/Videos'
import SideBarMenu from './components/SideBarMenu'
import Label from './components/Label'






const App=()=> {

  
  const [query,setQuery]=useState('')
  const [videos,setVideos]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [year,setYear]=useState('')
  


  useEffect(()=>{
    const fetchData=async ()=>{
      const results=await axios(`http://www.omdbapi.com/?s=${query}${year}&apikey=e406bf89`)
      setVideos(results.data.Search)
      console.log(videos)
      setIsLoading(false)
    }
    fetchData();
  },[query,year])

  

  const taker=(val)=>{
    setYear(val);
  }

  const eraseYear=()=>{
    setYear('');
   
  }
  const eraseQuery=()=>{
    setQuery('');
   
  }




  return (
    <div className="App">
    
    <SideBarMenu takeYear={taker}/>
    <div className="ui container">
    <SearchBar className='search-bar' onSubmit={setQuery}/>
    <Label query={query} year={year} eraserQ={eraseQuery} eraserY={eraseYear}/>
    <Videos items={videos} isLoading={isLoading}/>
    </div>
    </div>
  );
}

export default App;
