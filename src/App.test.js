import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { createMemoryHistory} from 'history';



describe(App, ()=> {
  it("All Recipes page has title RECIPES AND FOOD", ()=>{
    const { getByTestId } = render(<MemoryRouter><App/></MemoryRouter>);
    const titleValue = getByTestId("all-recipes").textContent;
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
});
describe(MainLayout, ()=> {
  it("Recipes Homepage link works", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><MainLayout/></MemoryRouter>);
    const histroy = createMemoryHistory();
    const recipesHomepageLink = getByRole("link", {name: "Recipes Homepage"})
    fireEvent.click(recipesHomepageLink);
    expect(location.pathname).toBe('/recipe_homepage');
  });
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
