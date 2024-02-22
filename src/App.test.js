import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { createMemoryHistory} from 'history';





describe(App, ()=> {
  it("All Recipes page has title RECIPES AND FOOD", ()=>{
    const { getByTestId } = render(<MemoryRouter><App/></MemoryRouter>);
    const titleValue = getByTestId("recipes_page").textContent;
    expect(titleValue).toEqual("RECIPES AND FOOD");
  });

  it("Dish input box Successfully displayed and can receive text input", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const dishInputBox = getByTestId("dish_box");
    fireEvent.change(dishInputBox, {target: {value: "test input"}});
    expect(dishInputBox.value).toEqual("test input");
  });
  it("Dish input box label successfully displayed", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const dishLabel = getByTestId("dish_label").textContent;
    expect(dishLabel).toEqual("Dish:");
  });


  it("Recipe input box Successfully displayed and can receive text input", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const recipeInputBox = getByTestId("recipe_box");
    fireEvent.change(recipeInputBox, {target: {value: "test input"}});
    expect(recipeInputBox.value).toEqual("test input");
  });
  it("Recipe input box label successfully displayed", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const recipeLabel = getByTestId("recipe_label").textContent;
    expect(recipeLabel).toEqual("Recipe:");
  });

  it("Submit Button displayed", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const submitButton = getByRole("button", {name: "submit"});

    fireEvent.click(submitButton);
    expect(submitButton.textContent).toEqual("submit");
  });

  it("Butter Sandwitch Recipe Link Displayed", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const butterSandwichRecipeLink = getByRole("link", {name: "Butter Sandwitch"});

    fireEvent.click(butterSandwichRecipeLink);
    expect(butterSandwichRecipeLink.textContent).toEqual("Butter Sandwitch");
  });
  it("Jam Sandwich Recipe Link Displayed", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const jamSandwichRecipeLink = getByRole("link", {name: "Jam Sandwich"});

    fireEvent.click(jamSandwichRecipeLink);
    expect(jamSandwichRecipeLink.textContent).toEqual("Jam Sandwich");
  });




  it("Yzma Image", ()=>{
    const {getAllByAltText} = render(<MemoryRouter><App/></MemoryRouter>);
    const yzma_image = getAllByAltText("yzma image");
    expect(yzma_image.length).toBeGreaterThan(0);
  });
  it("All recipes", async()=>{
    render(<MemoryRouter><App/></MemoryRouter>);
    const all_recipes = await screen.findAllByTestId("all-recipes");
    expect(all_recipes.length).toBeGreaterThan(0);
  });



  it("Butter Sandwitch Header", async()=>{
    render(<MemoryRouter><App/></MemoryRouter>);
    const butterSandwichTitle = await screen.findByTestId("Butter Sandwitch - I cannot remember how to spell sandwich");    
    expect(butterSandwichTitle).toBeInTheDocument();
  });

});






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
