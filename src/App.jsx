import { PROFILE_DATA } from "./data";

function App() {
  return (
    <div>
      <h1>{PROFILE_DATA.name}</h1>
      <p>Age:{PROFILE_DATA.age}</p>
      <p>Profession:{PROFILE_DATA.profession}</p>
    </div>
  );
}

export default App;
