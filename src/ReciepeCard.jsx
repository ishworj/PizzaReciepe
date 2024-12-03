import React from 'react'

const ReciepeCard = ({item,setShowReciepe,setCurrentItem}) => {
  const {image,name,shortDesc}=item;

  const showAndUpdate = () => {
    setShowReciepe(true);
    setCurrentItem(item)
  }
  return (
    <div className='reciepeList'>
      <div className='reciepeCard'>
      <img src={image}/>
        <div className='name'>{name}</div>
        <div>{shortDesc}</div>
        <button onClick={showAndUpdate}>Veiw Reciepe</button>
    </div>
    </div>
    
  )
}

export default ReciepeCard