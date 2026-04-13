// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";


function App() {
  const [film,setFilm] = React.useState("");
  const [type,setType] = React.useState("");
  function handleSubmit() {
    console.log("Tytuł:",film," Rodzaj:",type);
  }
  return (
      <form>
        <div className="form-group">
          <label htmlFor="filmInput">Tytuł Filmu</label>
          <input type="text" value={film} onChange={(e) => setFilm(e.target.value)} className="form-control" id="filmInput" />
        </div>
        <div className="form-group">
          <label htmlFor="rodzajSelect"></label>
          <select className="form-control" id="rodzajSelect" value={type} onChange={(e) => setType(e.target.value)}>
            <option value=""></option>
            <option value="1">Komedia</option>
            <option value="2">Obyczajowy</option>
            <option value="3">Sencasyjny</option>
            <option value="4">Horror</option>
          </select>
          <button onClick={handleSubmit} type="button" className="btn btn-primary">Dodaj</button>
        </div>
      </form>
  );
}

export default App;
