import JumbotranComp from './Jumbotran';
import CardComp from './Card'
import FormComp from './Form';
import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert'
export default function Home(){
    const APP_ID = "80702e35";
    const APP_KEY = "b711c11c047ea63658e0bc4423e15697";


    const [recipe, setRecipes] = useState([]);
    const [query, setQuery] = useState("mushroom"); 
     useEffect(() => {
        getRecipes();
    }, [query]); 


    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    };

     return(
         <div>
             <JumbotranComp />
             <Alert variant="primary" style={{ margin: '25px' }}>
                 <h3>Recommended for you</h3>
             </Alert>
             <div className="recipe_container" style={{width:'85%',margin:'0px auto'}}>
                 <div className="recipes">
                     {recipe.map(recipe => (
                         <CardComp className="recipeCard"
                             key={recipe.recipe.label}
                             title={recipe.recipe.label}
                             calories={recipe.recipe.calories}
                             image={recipe.recipe.image}
                             ingredients={recipe.recipe.ingredients}
                             cuisine={recipe.recipe.cuisineType[0]}
                             meal={recipe.recipe.mealType}
                             healthlabel={recipe.recipe.healthLabels}
                             protein={recipe.recipe.totalDaily}
                             url={recipe.recipe.url}
                         />
                     ))}
                 </div>

             </div>
        <FormComp />
         </div>
     );
}