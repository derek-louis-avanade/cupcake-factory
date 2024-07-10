import factory from "./factory.png"
import cupcake from "./cupcake.png"
import './App.css';

function App() {

  const onButtonClick = () => {
      const cupcakeImg = document.createElement("img");
      cupcakeImg.src = cupcake;
      cupcakeImg.alt = "cupcake";
      cupcakeImg.className = "cupcake";
      cupcakeImg.style.left = `${Math.random() * window.innerWidth}px`;
      cupcakeImg.style.top = `${Math.random() * window.innerHeight}px`;
      cupcakeImg.style.transform = `rotate(${Math.random() * 360}deg)`;
      cupcakeImg.style.zIndex = Math.random() < 0.5 ? 0 : 2;
      document.body.appendChild(cupcakeImg);
  }

  return (
    <div className="App">
      <button id="cupcake-button" onClick={onButtonClick} />
      <img src={factory} alt="factory" id="factory-img" />
    </div>
  );
}

export default App;
