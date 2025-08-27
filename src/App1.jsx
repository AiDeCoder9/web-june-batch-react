//normal function value return or not
// react function or react component
// function name starts with Capital Letter
// react component must return jsx or null
import AvatarImage from "./assets/image.png";
import Button from "./button";
import Description from "./description";
import Title from "./title";
import { Article, SubTitle } from "./title";

function App() {
  let message = "Hello world";
  let description = "this is the description";

  return (
    <div>
      <Title />
      <Description />
      <Button />
      <Article />
      <SubTitle />
      <h1>{message}</h1>
      <p>{description}</p>
      <img src={AvatarImage} style={{ width: 100, height: 100 }} />
    </div>
  );
}
export default App;
