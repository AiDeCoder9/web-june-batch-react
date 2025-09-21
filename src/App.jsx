import { BrowserRouter, Route, Routes } from "react-router";

import RecipeList from "./apps/recipe-list";
import RecipeDetail from "./apps/recipe-detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe-detail/:id" element={<RecipeDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
