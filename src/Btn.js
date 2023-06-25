export default function Btn() {
  const onClickHandler = () => console.log("Clicked: ");

  return (
    <div>
      <button onClick={onClickHandler}>Click Me</button>
    </div>
  );
}
