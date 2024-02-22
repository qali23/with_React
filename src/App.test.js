import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe(App, ()=> {
  it("All Recipes page has title RECIPES AND FOOD", ()=>{
    const { getByTestId } = render(<MemoryRouter><App/></MemoryRouter>);
    const titleValue = getByTestId("all-recipes").textContent;
    expect(titleValue).toEqual("RECIPES AND FOOD");
  });
  it("Navigation Bar Main Layout Successfully displayed", ()=>{
    const { getByTestId , getByRole} = render(<MemoryRouter><App/></MemoryRouter>);
    const recipesHomepageLink = getByRole("Link", {name: "Recipes Homepage"})
    expect(titleValue).toEqual("RECIPES AND FOOD");
  });
});


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
