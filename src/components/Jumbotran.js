import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

import React, { useEffect, useState } from 'react';
import CardComp from './Card'


const JumbotranComp =()=>{
    const APP_ID = "80702e35";
    const APP_KEY = "b711c11c047ea63658e0bc4423e15697";

    const [recipe, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
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

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }

    function ifnoresult () {
        if (recipe != "") {
            return (
                <Alert variant="success" style={{ margin: '25px' }}>
                    your search results
                </Alert>
            );
        }
    }


    return(
        <div>
            <Jumbotron className="welcomePage">
                <h1 style={{color: 'white',fontWeight:'bold'}}>Welcome, chefs!</h1>
                <p style={{fontSize:'30px',fontStyle:'italic',color:'white'}}>
                    Get the delicious recipes tips here...</p>
                <Form inline onSubmit={getSearch}>
                    <FormControl style={{padding:'25px'}} type="text" placeholder="Enter recipe name" className="mr-sm-2" value={search} onChange={updateSearch} />
                    <Button type="submit" style={{padding:'13px'}} variant="primary">Explore
                    </Button>
                </Form>
                {
                    ifnoresult()
                }
                <div className="recipes" id="reci">
                    {recipe.map(recipe => (
                        <CardComp className="recipeCard"
                           /*  key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            image={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            url={recipe.recipe.url} */
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
            </Jumbotron>
        </div>
    );
}

export default JumbotranComp;