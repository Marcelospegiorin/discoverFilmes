import React, {useState} from 'react'
import './movierow.css';

import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export default ({title, items}) => {
  console.log(items)
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + 600;
    if (x > 0) {
      x = 0
    };
    setScrollX(x)
  }

  const handleRightArrow = () => {
    let y = scrollX - 600;
    if (y > 0) {
      y = 0
    };
    setScrollX(y)
  }

  return (
    <div className='movieRow'>
      <h1>{title}</h1>
      <div className='movieRow--left' onClick={handleLeftArrow}>
        <ArrowLeftIcon style={{fontSize: 80, color: 'white'}}/>
      </div>
      <div className='movieRow--right' onClick={handleRightArrow}>
        <ArrowRightIcon style={{fontSize: 80, color: 'white'}}/>
      </div>
      <div className='movieRow--listarea'>
        <div className='movieRow--list' style={{marginLeft: scrollX, marginRight: scrollY, width: 20*300}}>
          {items.map((item, key) => 
            <div key={key} className='movieRow--item'>
              <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
