export default function Error() {
  return (
    <div id="error" className="py-12 text-center">
      <div className="mb-2 text-red-500 text-lg">Failed to load recipes</div>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white transition-colors">
        Try Again
      </button>
    </div>
  );
}
