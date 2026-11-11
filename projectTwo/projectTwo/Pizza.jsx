function Pizza() {
  return (
    <div className="pizza-hero-container">
      <h1 className="main-title">make your own perfect pizza!</h1>
      <button className="start-btn">start</button>
      <img 
        src="/assets/mainPizza.png" 
        alt="Delicious customized pizza" 
        className="hero-pizza-img" 
      />
    </div>
  );
}

export default  Pizza