function Title() {
  return <h1>This is the Title</h1>;
}

function Article() {
  return (
    <div>
      <Title />
      <p>lorem 5 </p>
    </div>
  );
}
function SubTitle() {
  return <h2>This is the SubTitle</h2>;
}

export default Title; // default export
export { Article, SubTitle }; //named export
