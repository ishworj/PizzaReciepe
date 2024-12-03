import React, { useState } from 'react'
import ReciepeCard from './ReciepeCard'
import DetailedReciepe from './DetailedReciepe'
import { Accordion } from 'react-bootstrap'
const Recipes = [
  {
    "image": "./pizza.jpg",
    "name": "Pepperoni Pizza",
    "shortDesc": "A fan-favorite pizza loaded with spicy pepperoni and melted cheese.",
    "longDesc": "Pepperoni Pizza is a popular choice, featuring a crispy crust topped with zesty tomato sauce, generous mozzarella cheese, and plenty of spicy, flavorful pepperoni slices. It's perfect for any occasion.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, pepperoni."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Veggie Pizza",
    "shortDesc": "A colorful and healthy pizza packed with fresh vegetables.",
    "longDesc": "Veggie Pizza is a delightful option for vegetarians and health-conscious individuals. It includes a vibrant mix of bell peppers, onions, mushrooms, tomatoes, and olives on a crispy base.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, bell peppers, onions, mushrooms, tomatoes, olives."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "BBQ Chicken Pizza",
    "shortDesc": "A smoky, savory pizza with barbecue sauce and chicken.",
    "longDesc": "BBQ Chicken Pizza offers a unique twist with tender chicken, a tangy barbecue sauce base, mozzarella cheese, and red onions, topped with fresh cilantro for added flavor.",
    "ingredients": "Flour, water, yeast, salt, barbecue sauce, mozzarella cheese, chicken, red onions, cilantro."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Hawaiian Pizza",
    "shortDesc": "A tropical treat with ham and sweet pineapple.",
    "longDesc": "Hawaiian Pizza combines the savory flavor of ham with the sweetness of pineapple on a cheesy base, delivering a perfect balance of sweet and salty.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, ham, pineapple."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Meat Lovers Pizza",
    "shortDesc": "A hearty pizza for meat enthusiasts.",
    "longDesc": "Meat Lovers Pizza is a protein-packed delight featuring pepperoni, sausage, ham, bacon, and ground beef layered with cheese and tomato sauce.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, pepperoni, sausage, ham, bacon, ground beef."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Four Cheese Pizza",
    "shortDesc": "A cheesy indulgence with four types of cheese.",
    "longDesc": "Four Cheese Pizza is a creamy, cheesy masterpiece with mozzarella, cheddar, Parmesan, and blue cheese melting together for a rich flavor experience.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella, cheddar, Parmesan, blue cheese."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Buffalo Chicken Pizza",
    "shortDesc": "A spicy pizza with buffalo sauce and chicken.",
    "longDesc": "Buffalo Chicken Pizza is a zesty combination of tangy buffalo sauce, grilled chicken, mozzarella cheese, and a drizzle of ranch or blue cheese dressing.",
    "ingredients": "Flour, water, yeast, salt, buffalo sauce, mozzarella cheese, chicken, ranch dressing."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Spinach and Feta Pizza",
    "shortDesc": "A Mediterranean-inspired pizza with spinach and feta cheese.",
    "longDesc": "Spinach and Feta Pizza is a light and refreshing option that features fresh spinach, tangy feta cheese, garlic, and olive oil on a thin crust.",
    "ingredients": "Flour, water, yeast, salt, olive oil, spinach, feta cheese, garlic."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Mushroom Pizza",
    "shortDesc": "A savory pizza topped with earthy mushrooms.",
    "longDesc": "Mushroom Pizza is a delightful choice for mushroom lovers, offering sautéed mushrooms, mozzarella cheese, and a hint of garlic on a crispy crust.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, mushrooms, garlic."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Truffle Pizza",
    "shortDesc": "A gourmet pizza with the luxurious flavor of truffles.",
    "longDesc": "Truffle Pizza elevates your pizza experience with a white sauce base, mozzarella cheese, truffle oil, and mushrooms for a rich, aromatic flavor.",
    "ingredients": "Flour, water, yeast, salt, white sauce, mozzarella cheese, truffle oil, mushrooms."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Seafood Pizza",
    "shortDesc": "A delightful pizza loaded with fresh seafood.",
    "longDesc": "Seafood Pizza combines shrimp, calamari, and other fresh seafood with a light tomato sauce and mozzarella cheese for a coastal-inspired treat.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, shrimp, calamari, garlic."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Taco Pizza",
    "shortDesc": "A fusion of Mexican and Italian flavors.",
    "longDesc": "Taco Pizza blends the best of tacos and pizza with seasoned ground beef, lettuce, tomatoes, cheddar cheese, and a drizzle of sour cream.",
    "ingredients": "Flour, water, yeast, salt, tomato sauce, mozzarella cheese, ground beef, lettuce, tomatoes, cheddar cheese, sour cream."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Pesto Pizza",
    "shortDesc": "A fresh and vibrant pizza with pesto sauce.",
    "longDesc": "Pesto Pizza offers a bright and herby flavor with a pesto sauce base, mozzarella cheese, cherry tomatoes, and fresh basil.",
    "ingredients": "Flour, water, yeast, salt, pesto sauce, mozzarella cheese, cherry tomatoes, basil."
  },
  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "White Garlic Pizza",
    "shortDesc": "A creamy pizza with a rich garlic flavor.",
    "longDesc": "White Garlic Pizza features a white sauce infused with roasted garlic, mozzarella cheese, and optional toppings like spinach or chicken.",
    "ingredients": "Flour, water, yeast, salt, white sauce, garlic, mozzarella cheese, spinach (optional)."
  },
  {
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Cheeseburger Pizza",
    "shortDesc": "A pizza with all the flavors of a classic cheeseburger.",
    "longDesc": "Cheeseburger Pizza includes ground beef, cheddar cheese, pickles, onions, and a drizzle of ketchup and mustard for a fun twist.",
    "ingredients": "Flour, water, yeast, salt, tomato sauce, cheddar cheese, ground beef, pickles, onions, ketchup, mustard."
  },
  {
   "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sa7ESdl-AIhJD46jXYQZ8qDGeodbNGlbnw&s",
    "name": "Bacon Pizza",
    "shortDesc": "A pizza topped with crispy, smoky bacon.",
    "longDesc": "Bacon Pizza is a savory treat with layers of crispy bacon, mozzarella cheese, and a rich tomato sauce.",
    "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, bacon."
  }
]

const ReciepeLists = () => {

  const [showingRecepies,setShowingRecipies]=useState(Recipes);
  const [showReciepe,setShowReciepe]=useState(false);
  const [currentItem , setCurrentItem]=useState(
    {
      "image": "pepperoni_pizza_image_url",
      "name": "Pepperoni Pizza",
      "shortDesc": "A fan-favorite pizza loaded with spicy pepperoni and melted cheese.",
      "longDesc": "Pepperoni Pizza is a popular choice, featuring a crispy crust topped with zesty tomato sauce, generous mozzarella cheese, and plenty of spicy, flavorful pepperoni slices. It's perfect for any occasion.",
      "ingredients": "Flour, water, yeast, salt, olive oil, tomato sauce, mozzarella cheese, pepperoni."
    }
    
  )
  const [searchVariable,setSearchVariable]=useState("BBQ pizza");

  const handleOnChange = (event)=>{
    setSearchVariable(event.target.value);

    const filteredrecipes = Recipes.filter((item)=>item.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
    console.log(filteredrecipes)

   setShowingRecipies(filteredrecipes);
  }


  return (
    <div>
        
        <div className='header'>
          <div className='tag'>Pizza reciepe 🍕 </div>
          <div>
        

        <div class="input">
        <label htmlFor="">Search</label>
        <input class="form-control me-2" type="search"  aria-label="Search"  value={searchVariable.toLowerCase()} onChange={handleOnChange} />
        </div>
          
        {/* <i class="fa-solid fa-star"></i> */}
      
        </div>
        </div>   
        
        <div className='reciepeList'>
        {showingRecepies.map( (item,index) => (
          <ReciepeCard key={index} item={item}  setShowReciepe={setShowReciepe} setCurrentItem={setCurrentItem}/>
        ))}

        {showReciepe?(<DetailedReciepe currentItem={currentItem} setShowReciepe={setShowReciepe}/>):("") }
        </div>

        <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>which pizza is the most looked receipe for?</Accordion.Header>
        <Accordion.Body>
          The most looked receipe is peri peri . it is very easy to make and indegidents are easily available.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>which pizze is faster to prepare?</Accordion.Header>
        <Accordion.Body>
          very fastest and easiest pizza receipe is bbq pizza.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        
        <footer>
          <p>Made by ishwor karki , for pizza lovers🍕🍕</p>
        </footer>
    </div>    
  )
}

export default ReciepeLists