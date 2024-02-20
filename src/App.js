import {useEffect, useState} from "react";
import yzma1 from "./Images/how_shall_I_do_it.gif";
import yzma2 from "./Images/its_dinner_time.gif";
import butterSandwich from "./Images/butter_sandwich.jpg";
import jamSandwich from "./Images/jam_sandwich.jpg";
import vomiting from "./Images/vomiting.jpg";
import ohYeahImage from "./Images/oh_yeah_its_all_coming_together.gif";


  function Submit_new_recipe(){
    let dish_name = document.getElementById("fname").value;
    let dish_recipe = document.getElementById("lname").value;

    <Recipe name={dish_name} recipe = {dish_recipe}/>
  }


  function Header(){
    return (
      <header className="App-header">
      <h1>RECIPES AND FOOD</h1>
          <nav>
            <a href="recipe_homepage.html">Home Page</a>
            <a href="ingredients.html">Ingredients</a>
          </nav> 
          

          <form>
            <div class = "input">
              <label for="dish">Dish:</label>
              <input type="text" id="fname" name="fname"/>
            </div>
            <div class = "input">
              <label for="Recipe">Recipe:</label>
              <input type="text" id="lname" name="lname"/>
            </div>
            <button id="submit_button" type="submit" onClick={() => Submit_new_recipe}>submit</button>
          </form> 
    
          <nav id="dish_names">
              <a href="#Butter Sandwitch - I cannot remember how to spell sandwich">Butter Sandwitch</a>
              <a href="#Jam Sandwich">Jam Sandwich</a>
          </nav> 
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

  function Recipe({name, recipe, imageSrc = ohYeahImage}){
    return(
      <article class="recipe" id={name}>
        <h2>{name}</h2>
        <img src ={imageSrc} alt = "an image"/>
        <ul>{recipe}</ul>
      </article>
    )
  }


  function All_Recipes(){
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

    const [recipe, setRecipe] = useState([]);

    const addRecipes = () => {
      setRecipe([...recipe,
        <Recipe name="Butter Sandwitch - I cannot remember how to spell sandwich"
        recipe = {butterSandwich_recipe} imageSrc={butterSandwich}/>,
        <Recipe name="Jam Sandwich"
        recipe = {jamSandwich_recipe} imageSrc={jamSandwich}/>,
        <Recipe name="Peanut Butter Sandwich"
        recipe = {peanutButterSandwich_recipe} imageSrc={vomiting}/>])
    }

    useEffect(() => {
      addRecipes();
    },[]);

    return(
      <article id="all-recipes">
          <Yzma_image/>
          {recipe}
        </article>
    )
  }

function App() {
  return (
    <div className="App">
      <Header/>
      <All_Recipes/>
    </div>
  );
}

export default App;
