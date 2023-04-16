
import './App.css';
import useFetch from './customHooks/useFetch';


function App() {
  const fetch = useFetch()

  return (
    <div className="App">
      <header className="App-header">
        {fetch.loading && <h4>data is loading..</h4>}
        <p onClick={fetch.fetchData}>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
