function Hero_cards({ props: { id, isDark, name, age, weapons, image } }) {
  return (
    <div className={`hero-box hero-box-${isDark ? "dark" : "light"}`}>
      <div className="hero-box-text">
        <p>
          {name}, {age}, {isDark ? "👺" : "👼"}
        </p>
        <ul>
          {weapons.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
      <div className="hero-img">
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Hero_cards;
