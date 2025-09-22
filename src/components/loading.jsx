export default function Loading(props) {
  const { message } = props;
  return (
    <div className="mx-auto px-4 py-8 container">
      <div className="flex justify-center items-center">
        <div className="border-b-2 border-blue-600 rounded-full w-12 h-12 animate-spin"></div>
        <span className="ml-3 text-gray-600">{message}...</span>
      </div>
    </div>
  );
}
