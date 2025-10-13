export default function Input(props) {
  const { name, value, label, placeholder, error, handleChange } = props;
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-3 font-medium text-destructive text-sm leading-none"
      >
        {label}
      </label>
      <input
        type="text"
        value={value}
        name={name}
        onChange={handleChange}
        id={name}
        placeholder={placeholder}
        className="block bg-white px-3 py-2 rounded-md focus:outline-amber-200 w-full text-sm"
      />
      {error && <p className="mt-2 text-red-500 text-xs">{error}</p>}
    </div>
  );
}
