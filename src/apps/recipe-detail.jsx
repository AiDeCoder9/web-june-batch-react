import {
  ArrowLeft,
  Clock,
  Fire,
  Heart,
  Share,
  Star,
  StarHalf,
} from "phosphor-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router";

function RecipeDetail() {
  //params
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchRecipeDetail = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: `https://dummyjson.com/recipes/${id}`,
      });
      setLoading(false);
      setData(response.data);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipeDetail();
  }, []);
  console.log(data, "data");

  return (
    <>
      {loading && (
        <div className="mx-auto px-4 py-8 container">
          <div className="flex justify-center items-center">
            <div className="border-b-2 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
            <span className="ml-3 text-gray-600">Loading recipes...</span>
          </div>
        </div>
      )}
      <header className="bg-white shadow-sm border-b">
        <div className="flex justify-between items-center mx-auto px-4 py-4 max-w-4xl">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="mr-2 text-xl" />
            <span className="font-medium text-sm">Back</span>
          </Link>
          <div className="flex space-x-3">
            <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
              <Heart weight="fill" className="text-gray-600" />
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors">
              <Share weight="fill" className="text-gray-600" />
            </button>
          </div>
        </div>
      </header>
      {error && <p className="text-center">{error}</p>}
      {data && (
        <main className="mx-auto px-4 pb-8 max-w-4xl">
          <div className="relative -mt-0 mb-6">
            <img
              src={data?.image}
              alt={data?.name}
              className="shadow-lg rounded-b-2xl w-full h-80 object-cover"
            />
            <div className="bottom-4 left-4 absolute bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="font-medium text-orange-600 text-sm">
                {data?.cuisine}
              </span>
            </div>
          </div>

          <div className="bg-white shadow-sm mb-6 p-6 border rounded-2xl">
            <h1 className="mb-3 font-bold text-gray-900 text-3xl">
              {data?.name}
            </h1>

            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <div className="flex mr-2 text-yellow-400">
                  <Star weight="fill" />
                  <Star weight="fill" />
                  <Star weight="fill" />
                  <Star weight="fill" />
                  <StarHalf weight="fill" />
                </div>
                <span className="font-semibold text-gray-900 text-lg">
                  {data?.rating}
                </span>
                <span className="ml-1 text-gray-500">
                  ({data?.reviewCount} reviews)
                </span>
              </div>
            </div>

            <div className="gap-4 grid grid-cols-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Clock weight="fill" className="mb-2 text-orange-500 text-xl" />
                <p className="text-gray-600 text-sm">Prep Time</p>
                <p className="font-semibold text-gray-900">
                  {data?.prepTimeMinutes} min
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Fire weight="fill" className="mb-2 text-red-500 text-xl" />
                <p className="text-gray-600 text-sm">Cook Time</p>
                <p className="font-semibold text-gray-900">
                  {data?.cookTimeMinutes} min
                </p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <i className="mb-2 text-blue-500 text-xl fas fa-users"></i>
                <p className="text-gray-600 text-sm">Servings</p>
                <p className="font-semibold text-gray-900">{data?.servings}</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <i className="mb-2 text-green-500 text-xl fas fa-tachometer-alt"></i>
                <p className="text-gray-600 text-sm">Difficulty</p>
                <p className="font-semibold text-gray-900">
                  {data?.difficulty}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {data?.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-100 px-3 py-1 rounded-full font-medium text-orange-700 text-sm"
                >
                  {tag}
                </span>
              ))}

              <span className="bg-purple-100 px-3 py-1 rounded-full font-medium text-purple-700 text-sm">
                Dinner
              </span>
              <span className="bg-green-100 px-3 py-1 rounded-full font-medium text-green-700 text-sm">
                {data?.caloriesPerServing} cal/serving
              </span>
            </div>
          </div>

          <div className="gap-6 grid lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="top-4 sticky bg-white shadow-sm p-6 border rounded-2xl">
                <h2 className="flex items-center mb-4 font-bold text-gray-900 text-xl">
                  <i className="mr-2 text-orange-500 fas fa-shopping-basket"></i>
                  Ingredients
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded focus:ring-orange-500 w-4 h-4 text-orange-500"
                    />
                    <span className="text-gray-700">Pizza dough</span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded focus:ring-orange-500 w-4 h-4 text-orange-500"
                    />
                    <span className="text-gray-700">Tomato sauce</span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded focus:ring-orange-500 w-4 h-4 text-orange-500"
                    />
                    <span className="text-gray-700">
                      Fresh mozzarella cheese
                    </span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded focus:ring-orange-500 w-4 h-4 text-orange-500"
                    />
                    <span className="text-gray-700">Fresh basil leaves</span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded focus:ring-orange-500 w-4 h-4 text-orange-500"
                    />
                    <span className="text-gray-700">Olive oil</span>
                  </li>
                  <li className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-3 rounded focus:ring-orange-500 w-4 h-4 text-orange-500"
                    />
                    <span className="text-gray-700">
                      Salt and pepper to taste
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white shadow-sm p-6 border rounded-2xl">
                <h2 className="flex items-center mb-6 font-bold text-gray-900 text-xl">
                  <i className="mr-2 text-orange-500 fa-list-ol fas"></i>
                  Instructions
                </h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex flex-shrink-0 justify-center items-center bg-orange-500 mt-1 mr-4 rounded-full w-8 h-8 font-bold text-white text-sm">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Preheat the oven to 475°F (245°C).
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-shrink-0 justify-center items-center bg-orange-500 mt-1 mr-4 rounded-full w-8 h-8 font-bold text-white text-sm">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Roll out the pizza dough and spread tomato sauce evenly.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-shrink-0 justify-center items-center bg-orange-500 mt-1 mr-4 rounded-full w-8 h-8 font-bold text-white text-sm">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Top with slices of fresh mozzarella and fresh basil
                        leaves.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-shrink-0 justify-center items-center bg-orange-500 mt-1 mr-4 rounded-full w-8 h-8 font-bold text-white text-sm">
                      4
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Drizzle with olive oil and season with salt and pepper.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-shrink-0 justify-center items-center bg-orange-500 mt-1 mr-4 rounded-full w-8 h-8 font-bold text-white text-sm">
                      5
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Bake in the preheated oven for 12-15 minutes or until
                        the crust is golden brown.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex flex-shrink-0 justify-center items-center bg-orange-500 mt-1 mr-4 rounded-full w-8 h-8 font-bold text-white text-sm">
                      6
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">
                        Slice and serve hot.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-4 mt-8">
            <button className="flex flex-1 justify-center items-center bg-orange-500 hover:bg-orange-600 px-6 py-4 rounded-xl font-semibold text-white transition-colors">
              <i className="mr-2 fas fa-play"></i>
              Start Cooking
            </button>
            <button className="flex flex-1 justify-center items-center px-6 py-4 border border-gray-300 hover:border-gray-400 rounded-xl font-semibold text-gray-700 transition-colors">
              <i className="mr-2 fas fa-bookmark"></i>
              Save Recipe
            </button>
          </div>
        </main>
      )}
    </>
  );
}

export default RecipeDetail;
