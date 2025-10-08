import { BrowserRouter, Route, Routes } from "react-router";

import RecipeList from "./apps/recipe-list";
import RecipeDetail from "./apps/recipe-detail";
import { useCallback, useMemo, useState } from "react";

// props
// states - useState
// component compositions
// hooks - useState -state management, useEffect - lifecycle methods
// other hooks - useContext, useReducer, useMemo, useCallback, useRef
// performance optimization : useMemo : memorized value, useCallback

const users = ["sajan", "ram", "shyam"];
export default function App() {
  //update sajan to rajan of users array
  const updatedUsers = users.map((user) => (user === "sajan" ? "rajan" : user));
  //solve this using useMemo

  const updatedUsers1 = useMemo(() => {
    return users.map((user) => (user === "sajan" ? "rajan" : user));
  }, []);

  useMemo(() => {}, []);

  const hello = () => {
    console.log("hello");
  };
  const bye = () => {
    console.log("hello");
  };

  return (
    <div>
      <button onClick={hello}>Click me</button>
      <button onClick={bye}>Click here</button>
    </div>
  );
}
