import React from 'react';
import './VideoDetail.css'

const VideoDetail = ({ item, onToggle }) => {





	return (
		<>
			<tr>
				<td style={{ padding: '5px', alignContent: 'center' }} data-label="Name">
					<input value={item.imdbID} style={{ margin: 'auto', textAlign: 'center' }} type='checkbox' onChange={(e) => onToggle(e, item)} />
					<img src={item.Poster} alt={item.imdbID} style={{ height: '70px', width: '50px' }} />
				</td>
				<td data-label="Age" ><a  href='#' id={item.imdbID} >{item.Title}</a></td>
				<td data-label="Job">{item.Type}</td>
				<td data-label="Job">{item.imdbID}</td>
				<td data-label="Job">{item.Year}</td>
			</tr>
		</>)
}

export default VideoDetail