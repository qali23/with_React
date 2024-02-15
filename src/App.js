import {useState} from "react";
import yzma1 from "./Images/how_shall_I_do_it.gif";
import butterSandwich from "./Images/butter_sandwich.jpg";
import jamSandwich from "./Images/jam_sandwich.jpg";
import vomiting from "./Images/vomiting.jpg";


function App() {
  return (
    <div className="App">
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
            <button id="submit_button" type="submit">submit</button>
          </form> 
    
          <nav id="dish_names">
              <a href="#Butter Sandwitch">Butter Sandwitch</a>
              <a href="#Jam Sandwitch">Jam Sandwich</a>
          </nav> 
      </header>
      <article id="all-recipes">
          <img id="yzma" src={yzma1} height="200px" width="auto" alt = "an image" />
          

          <article class="recipe" id = "Butter Sandwitch">
            <h2>Butter Sandwitch - I cannot remember how to spell sandwich</h2>
            <img src ={butterSandwich} alt = "an image"/>
            <ul>
              <li>Start with bread</li>
              <li>Add butter :)</li>
            </ul>
          </article>

          <article class="recipe" id = "Jam Sandwitch">
            <h2>Jam Sandwich</h2>
            <img src = {jamSandwich} alt = "an image"/>
            <ul>
              <li>Start with bread</li>
              <li>Add JAM :)</li>
            </ul>
          </article>

          <article class="recipe" id = "Peanut Butter Sandwich">
            <h2>Peanut Butter Sandwich</h2>
            <img src = {vomiting} alt = "an image"/>
            <ul>
              <li>Why? Just why</li>
              <li>DONT START</li>
              <li>Its not very nice >:(</li>
              <li>Try Jam Sandwich please</li>
              <li class="small_text">get bread add peanut butter</li>
            </ul>
          </article>

        </article>
    </div>
  );
}

export default App;
