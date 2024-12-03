import React from 'react'

const DetailedReciepe = ({currentItem,setShowReciepe}) => {
  const {image,name,longDesc,ingredients}=currentItem;
  return (
    <div className='detailedReciepe'>

      <div className='details'>
        <div className='imagediv'>
        <img src={image} />
        <div><b>{name}</b></div>
        </div>

        <div className='description'>
        <div>{longDesc}</div>
        
        <div className='ingridents'>
  <b>Ingredients:</b>
  <ul>
    {ingredients.split(',').map((ingredient, index) => (
      <li key={index}>{ingredient.trim()}</li> // Use .trim() to remove any extra spaces
    ))}
  </ul>
</div>



        </div>
        
    </div>

    <div>
      <button onClick={()=>{setShowReciepe(false)}}>Close Reciepe</button>
      </div>

    </div>
  )
}

export default DetailedReciepe