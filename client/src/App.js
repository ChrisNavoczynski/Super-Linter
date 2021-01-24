import DOG from './dog.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Meet Jasper (Doodoohead) 
        </p>
        <p>
          He likes bones, treats, head scratches and walks in the park.
        </p>
        <body>
        <p>
        <div> 
        <img src={DOG} alt="Photo of Jasper" width="600" height="400"></img>
        </div>
        </p>
        </body>
      </header>

    </div>

  );
}

export default App;
