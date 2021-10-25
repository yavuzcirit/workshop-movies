import React,{useState,Fragment} from 'react';
import Spinner from './Spinner'
import VideoDetail from './VideoDetail'


const Videos=({items,isLoading})=>{

	const [selectedCount,setselectedCount]=useState('');

	return isLoading ? (<Spinner/>) : <div>
	<p>{selectedCount}</p>

		<table className="ui celled table">
 		 <thead>
    		<tr>

    			<th><i className="images icon"></i></th>
    			<th>Title</th>
    			<th>Type</th>
    			<th>ID</th>
    			<th>Year</th>
    			


  			</tr>
  			</thead>
  				<tbody>


	
		{items&&items.map(item=>
			<VideoDetail selectedBox={setselectedCount} item={item} key={item.imdbID}/>)}
	 


				</tbody>
				</table>

		</div>
	
}


export default Videos