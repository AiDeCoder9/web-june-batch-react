import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import Loading from "../components/loading";
import Error from "../components/error";
function RecipeList() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  //synchornous function meaning it will wait for the response
  //asynchronous function meaning it will not wait for the response

  const fetchRecipe = async () => {
    const response = await axios({
      method: "GET",
      url: "https://dummyjson.com/recipes",
    });
    setData(response.data.recipes);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="mx-auto px-4 py-6 container">
          <h1 className="font-bold text-gray-800 text-3xl">
            Recipe Collection
          </h1>
          <p className="mt-2 text-gray-600">
            Discover delicious recipes from around the world
          </p>
        </div>
      </header>

      {loading && <Loading message="Loading recipes" />}
      {error && <Error />}

      <main className="mx-auto px-4 py-8 container">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((recipe) => (
            <Link
              key={recipe.name}
              to={`/recipe-detail/${recipe.id}`}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
            >
              <div className="bg-gray-200 aspect-h-12 aspect-w-16">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-2 font-semibold text-gray-800 text-lg line-clamp-2">
                  {recipe.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="bg-blue-100 px-2 py-1 rounded-full font-medium text-blue-800 text-xs">
                      {recipe.cuisine}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg
                      className="mr-1 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{recipe.cookTimeMinutes} minutes</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export default RecipeList;
