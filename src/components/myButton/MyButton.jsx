import "./MyButton.css";

function MyButton({ func, onClick, type = "button", text = "click me!", className = "my-button-def" }) {
  const handleClick = (e) => {
    func?.(e);
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} type={type} className={className}>
      {text}
    </button>
  );
}

export default MyButton;
