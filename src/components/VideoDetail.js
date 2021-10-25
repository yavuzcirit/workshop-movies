import React,{useState,useEffect,Fragment} from 'react';
import './VideoDetail.css'

const VideoDetail=({item,selectedBox})=>{

	// const [selected, setSelected] = useState([]);

	// const onChange=(event,item)=>{
	// 	if (event.target.checked) {
 //      setSelected([...selected, item]);
 //    } else {
 //      setSelected((prev) =>
 //        prev.filter((currItem) => currItem.value !== item.value)
 //      );
 //    }
   
	// }

	// useEffect(()=>{
	// 	const changer=()=>{
	// 		 selectedBox(selected.length)
	// 	}
	// 	changer();
	// },[selected])



	

	return(
		<Fragment>
			<tr>

			      <td style={{padding:'5px',alignContent:'center'}} data-label="Name"><input value={item.imdbID}  style={{margin:'auto',textAlign:'center'}} type='checkbox'/><img src={item.Poster} style={{height:'70px',width:'50px'}} /></td>
			      <td data-label="Age" ><a id={item.imdbID} href='#'>{item.Title}</a></td>
			      <td data-label="Job">{item.Type}</td>
			      <td data-label="Job">{item.imdbID}</td>
			      <td data-label="Job">{item.Year}</td>

			      	
			
			    </tr>

	






		</Fragment>)
}

export default VideoDetail