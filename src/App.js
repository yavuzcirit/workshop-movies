import React,{useState,useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import Videos from './components/Videos'
import Header from './components/Header'
import Banner from './components/Banner'




const App=()=> {

  
  const [query,setQuery]=useState('')
  const [videos,setVideos]=useState([])
  const [isLoading,setIsLoading]=useState(true)


  useEffect(()=>{
    const fetchData=async ()=>{
      const results=await axios(`http://www.omdbapi.com/?s=${query}&apikey=e406bf89`)
      setVideos(results.data.Search)
      console.log(videos)
      setIsLoading(false)
    }
    fetchData();
  },[query])


  return (
    <div className="App">
    
    
    <SearchBar onSubmit={setQuery}/>
    <Videos items={videos} isLoading={isLoading}/>
    </div>
  );
}

export default App;
