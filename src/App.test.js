import { render, waitFor, screen , fireEvent, getByTestId} from '@testing-library/react';
import App from './App';
import Film from './pages/Films';
import Actor from './pages/Actors';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { createMemoryHistory} from 'history';


describe(Actor, ()=> {
  it("Title Displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const titleValue = screen.getByTestId("Actors_title").textContent;
    expect(titleValue).toEqual("ACTORS");
  })
  it("Homepage Link Displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const pageHomepageLink = document.getElementById("homepage");
    expect(pageHomepageLink).toBeInTheDocument();
  })
  it("Actor Link Displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const pageActorsLink = document.getElementById("actors");
    expect(pageActorsLink).toBeInTheDocument();
  })
  it("Films Link Displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const pageFilmsLink = document.getElementById("films");
    expect(pageFilmsLink).toBeInTheDocument();
  })


  it("Form to add remove actor Displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const actorForm = document.getElementById("add+remove_actor");
    expect(actorForm).toBeInTheDocument();
  })
  it("firstName input box", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const FN_inputBox = document.getElementById("firstName");
    expect(FN_inputBox).toBeInTheDocument();
  })
  it("lastName input box", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const LN_inputBox = document.getElementById("lastName");
    expect(LN_inputBox).toBeInTheDocument();
  })
  it("Submit button on page", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const submitButton = document.getElementById("new_actor_submit_button");
    expect(submitButton).toBeInTheDocument();
  })
  it("Submit button text displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const submitButtonText = document.getElementById("new_actor_submit_button").textContent;
    expect(submitButtonText).toEqual("Submit");
  })
  it("Delete button on page", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const deleteButton = document.getElementById("delete_actor_submit_button");
    expect(deleteButton).toBeInTheDocument();
  })
  it("Delete button text displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const deleteButtonText = document.getElementById("delete_actor_submit_button").textContent;
    expect(deleteButtonText).toEqual("Delete");
  })


  it("Actor Names list displayed", ()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    const actorNameListBox = document.getElementById("actorNames");
    expect(actorNameListBox).toBeInTheDocument();
  })
  it("Each actor button", async()=>{
    render(<MemoryRouter><Actor/></MemoryRouter>);
    await waitFor(() => {
      const eachActorButton = document.querySelectorAll("each_actor_button");
      expect(eachActorButton.length).toBeGreaterThan(0);
      const firstActorButton = eachActorButton[0];
      expect(firstActorButton).toBeInTheDocument();
    })
  })
  

})

describe(Film, () =>{
  it("Title Displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const titleValue = screen.getByTestId("Films_title").textContent;
    expect(titleValue).toEqual("FILMS");
  })
  it("Homepage Link Displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const pageHomepageLink = document.getElementById("homepage");
    expect(pageHomepageLink).toBeInTheDocument();
  })
  it("Actor Link Displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const pageActorsLink = document.getElementById("actors");
    expect(pageActorsLink).toBeInTheDocument();
  })
  it("Films Link Displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const pageFilmsLink = document.getElementById("films");
    expect(pageFilmsLink).toBeInTheDocument();
  })


  it("Form to add remove film Displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const filmForm = document.getElementById("add+remove_film");
    expect(filmForm).toBeInTheDocument();
  })
  it("title input box", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const T_inputBox = document.getElementById("title");
    expect(T_inputBox).toBeInTheDocument();
  })
  it("lastName input box", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const D_inputBox = document.getElementById("description");
    expect(D_inputBox).toBeInTheDocument();
  })
  it("Submit button on page", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const submitButton = document.getElementById("new_film_submit_button");
    expect(submitButton).toBeInTheDocument();
  })
  it("Submit button text displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const submitButtonText = document.getElementById("new_film_submit_button").textContent;
    expect(submitButtonText).toEqual("Submit");
  })
  it("Delete button on page", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const deleteButton = document.getElementById("delete_film_submit_button");
    expect(deleteButton).toBeInTheDocument();
  })
  it("Delete button text displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const deleteButtonText = document.getElementById("delete_film_submit_button").textContent;
    expect(deleteButtonText).toEqual("Delete");
  })


  it("Film list displayed", ()=>{
    render(<MemoryRouter><Film/></MemoryRouter>);
    const filmNameListBox = document.getElementById("filmNames");
    expect(filmNameListBox).toBeInTheDocument();
  })
})


// describe(App, ()=> {
//   it("All Recipes page has title RECIPES AND FOOD", ()=>{
//     const { getByTestId } = render(<MemoryRouter><App/></MemoryRouter>);
//     const titleValue = getByTestId("recipes_page").textContent;
//     expect(titleValue).toEqual("RECIPES AND FOOD");
//   });

//   it("Dish input box Successfully displayed and can receive text input", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const dishInputBox = getByTestId("dish_box");
//     fireEvent.change(dishInputBox, {target: {value: "test input"}});
//     expect(dishInputBox.value).toEqual("test input");
//   });
//   it("Dish input box label successfully displayed", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const dishLabel = getByTestId("dish_label").textContent;
//     expect(dishLabel).toEqual("Dish:");
//   });


//   it("Recipe input box Successfully displayed and can receive text input", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const recipeInputBox = getByTestId("recipe_box");
//     fireEvent.change(recipeInputBox, {target: {value: "test input"}});
//     expect(recipeInputBox.value).toEqual("test input");
//   });
//   it("Recipe input box label successfully displayed", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const recipeLabel = getByTestId("recipe_label").textContent;
//     expect(recipeLabel).toEqual("Recipe:");
//   });

//   it("Submit Button displayed", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const submitButton = getByRole("button", {name: "submit"});

//     fireEvent.click(submitButton);
//     expect(submitButton.textContent).toEqual("submit");
//   });

//   it("Butter Sandwitch Recipe Link Displayed", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const butterSandwichRecipeLink = getByRole("link", {name: "Butter Sandwitch"});

//     fireEvent.click(butterSandwichRecipeLink);
//     expect(butterSandwichRecipeLink.textContent).toEqual("Butter Sandwitch");
//   });
//   it("Jam Sandwich Recipe Link Displayed", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
//     const jamSandwichRecipeLink = getByRole("link", {name: "Jam Sandwich"});

//     fireEvent.click(jamSandwichRecipeLink);
//     expect(jamSandwichRecipeLink.textContent).toEqual("Jam Sandwich");
//   });




//   it("Yzma Image", ()=>{
//     const {getAllByAltText} = render(<MemoryRouter><App/></MemoryRouter>);
//     const yzma_image = getAllByAltText("yzma image");
//     expect(yzma_image.length).toBeGreaterThan(0);
//   });
//   it("All recipes", async()=>{
//     render(<MemoryRouter><App/></MemoryRouter>);
//     const all_recipes = await screen.findAllByTestId("all-recipes");
//     expect(all_recipes.length).toBeGreaterThan(0);
//   });



//   it("Butter Sandwitch Header", async()=>{
//     render(<MemoryRouter><App/></MemoryRouter>);
//     const butterSandwichTitle = await screen.findByTestId("Butter Sandwitch - I cannot remember how to spell sandwich");    
//     expect(butterSandwichTitle).toBeInTheDocument();
//   });

// });






// describe(MainLayout, ()=> {
//   it("Recipes Homepage link works", ()=>{
//     const { getByTestId , getByRole} = render(<MemoryRouter><MainLayout/></MemoryRouter>);
//     const histroy = createMemoryHistory();
//     const recipesHomepageLink = getByRole("link", {name: "Recipes Homepage"})
//     fireEvent.click(recipesHomepageLink);
//     expect(location.pathname).toBe('/recipe_homepage');
//   });
// });


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
