import React, {useEffect, useState, useContext} from "react";
import { Link, useSearchParams } from "react-router-dom";
import yzma1 from "./Images/how_shall_I_do_it.gif";
import yzma2 from "./Images/its_dinner_time.gif";
import butterSandwich from "./Images/butter_sandwich.jpg";
import jamSandwich from "./Images/jam_sandwich.jpg";
import vomiting from "./Images/vomiting.jpg";
import ohYeahImage from "./Images/oh_yeah_its_all_coming_together.gif";
import MainLayout from "./layout/MainLayout";



function Header({recipeLink, setRecipeLink, add_new_recipe, eachRecipe}){
  
  function EachLink({dish_name, href_for_recipe}){
    return(
      <a key={dish_name} href={href_for_recipe}>{dish_name}</a>
    )
  }

  const addRecipeLinks = () => {
    setRecipeLink([...recipeLink,
      <EachLink dish_name="Butter Sandwitch" href_for_recipe="#Butter Sandwitch - I cannot remember how to spell sandwich"/>,
      <EachLink dish_name="Jam Sandwich" href_for_recipe="#Jam Sandwich"/>])
  }

  useEffect(() => {
    addRecipeLinks();
  },[]);

  function Add_recipe_links(){
    let dish_name = document.getElementById("fname").value;
    let dish_recipe = document.getElementById("lname").value;
    const href_for_recipe = "#" + dish_name;
    setRecipeLink([...recipeLink, <EachLink dish_name={dish_name} href_for_recipe={href_for_recipe}/>])
  }

  function check_recipe_already_exists(){
    let dish_name = document.getElementById("fname").value;
    const existingRecipe = eachRecipe.find((recipe) => recipe.props.name === dish_name);
    if (!existingRecipe){
      add_new_recipe();
      Add_recipe_links();
    }
  }

  return (
    <header className="App-header">
    <h1>RECIPES AND FOOD</h1>
        <MainLayout>
          <form>
            <div class = "input">
              <label for="dish">Dish:</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class = "input">
              <label for="Recipe">Recipe:</label>
              <input type="text" id="lname" name="lname"/>
            </div>
            <button id="submit_button" type="submit" onClick= {(e) => {
              e.preventDefault();
              check_recipe_already_exists();
              }}>submit</button>
          </form> 
          <nav id="dish_names">
            {recipeLink}
          </nav>
        </MainLayout>
    </header>
  )
}

  
function Yzma_image(){
  const [mouseHover, setMouseHover] = useState(false);
  return (
    <img src= {mouseHover? yzma2 : yzma1 }
    id="yzma" height="200px" width="auto" alt = "an image" 
    onMouseEnter={() => setMouseHover(true)}
    onMouseLeave={() => setMouseHover(false)}/>
  )
}

function Secret_NewGroove(){
  return(
    <Link to="/blog">
      <img src= {ohYeahImage} alt = "an image"/>
    </Link>
  )
}

function Recipe({name, recipe, imageSrc}){
  const image_or_link = imageSrc? 
    <img src ={imageSrc} alt = "an image"/>:
    <Link to="/blog">
      <img src= {ohYeahImage} alt = "an image"/>
    </Link>
  return(
    <article class="recipe" id={name} key={name}>
      <h2>{name}</h2>
        {image_or_link}
      <ul>{recipe}</ul>
    </article>
  )
}


function All_Recipes({recipeLink, setRecipeLink, eachRecipe, setRecipe}){
  let butterSandwich_recipe = <ul>
        <li>Start with bread</li>
        <li>Add butter :)</li>
      </ul>;

  let jamSandwich_recipe = <ul>
      <li>Start with bread</li>
      <li>Add JAM :)</li>
    </ul>;

  let peanutButterSandwich_recipe = <ul>
      <li>Why? Just why</li>
      <li>DONT START</li>
      <li>Its not very nice >:(</li>
      <li>Try Jam Sandwich please</li>
      <li class="small_text">get bread add peanut butter</li>
    </ul>;


  async function wait_meal_data(){
    let meal_data = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res=>res.json())
    
    let meal_ID = `${meal_data.meals[0].idMeal}`;
    let meal_name = `${meal_data.meals[0].strMeal}`;
    let food_info = `${meal_data.meals[0].strInstructions}
    
    `;
    return {name: meal_name, recipe: food_info};
  }

  
  useEffect(() => {
    wait_meal_data().then(rec => {
      setRecipe([...eachRecipe,
        <Recipe name="Butter Sandwitch - I cannot remember how to spell sandwich"
          recipe = {butterSandwich_recipe} imageSrc={butterSandwich}/>,
        <Recipe name="Jam Sandwich"
          recipe = {jamSandwich_recipe} imageSrc={jamSandwich}/>,
        <Recipe name="Peanut Butter Sandwich"
          recipe = {peanutButterSandwich_recipe} imageSrc={vomiting}/>,
        <Recipe name={rec.name} recipe = {rec.recipe}/>,
      ]);
            
    })
  },[]);

  
  return(
    <article id="all-recipes">
        <Yzma_image/>

        {eachRecipe}
      </article>
  )
}

function App() {
  const [eachRecipe, setRecipe] = useState([]);
  const [recipeLink, setRecipeLink] = useState([]);


  function Submit_new_recipe(){
    let dish_name = document.getElementById("fname").value;
    let dish_recipe = document.getElementById("lname").value;
    setRecipe([...eachRecipe, <Recipe name={dish_name} recipe = {dish_recipe}/>]);
  }

  return (
    <div className="App">
      <Header recipeLink={recipeLink} setRecipeLink={setRecipeLink} add_new_recipe={Submit_new_recipe} eachRecipe={eachRecipe}/>
      <All_Recipes recipeLink={recipeLink} setRecipeLink={setRecipeLink} eachRecipe={eachRecipe} setRecipe={setRecipe}/>
    </div>
  );
}

export default App;
