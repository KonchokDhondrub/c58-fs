function MyInput({ name = "not defined", type = "not defined", placeholder = "write here", label = "no data", onChange = "not defined" }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange}></input>
    </>
  );
}

export default MyInput;
