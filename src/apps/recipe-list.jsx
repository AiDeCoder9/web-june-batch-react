import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
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

      {loading && (
        <div className="mx-auto px-4 py-8 container">
          <div className="flex justify-center items-center">
            <div className="border-b-2 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
            <span className="ml-3 text-gray-600">Loading recipes...</span>
          </div>
        </div>
      )}

      <main className="mx-auto px-4 py-8 container">
        <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((recipe) => (
            <Link
              to={`/recipe-detail/${recipe.id}`}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition-shadow duration-300"
            >
              <div className="bg-gray-200 aspect-h-12 aspect-w-16">
                <img
                  src={recipe.image}
                  alt="${recipe.name}"
                  className="w-full h-48 object-cover"
                  onError="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZiNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='"
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
        {error && (
          <div id="error" className="py-12 text-center">
            <div className="mb-2 text-red-500 text-lg">
              Failed to load recipes
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
              Try Again
            </button>
          </div>
        )}
      </main>
    </>
  );
}

export default RecipeList;
