import React from 'react'
import { useNavigate } from 'react-router-dom'
import { imageUrl } from '../../Constants/constants'
import './List.css'
const List = (props) => {
  const navigate = useNavigate();
  return (
    <div className='movie-list'>
      {
        props.data.length === 0 ? (
          <div style={{color:'#fff',fontSize:'24px'}}>No results</div>
        ) : (
          
            props.data.map(item => {
              return (
                <div className="movie-list-image">
                  <img src={`${imageUrl + item.poster_path}`} alt="" className='search-card' />
                  <div className="movie-list-image-overlay" onClick={() => navigate(`/details?movieId=${item.id}`)}>
                    <h5>{item.title}</h5>
                  </div>
                </div>
              )
            })
          
        )
      }

    </div>
  )
}

export default List