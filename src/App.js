import LibraryContainer from "./container/LibraryContainer";
import "./App.css"


function App() {
  return (
    <div className = "film_quote">
      <div className ="film_quote_container"> 
        <h2>Film Quote Randomiser</h2>
        <LibraryContainer />
      </div>
    </div>
  );
}

export default App;
