import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [troll, setTroll] = useState(false);
  const [sorry, setSorry] = useState(false);
  const [msg, setMsg] = useState('Sike. Nobody cares.');
  return (
    <div className="App">
      <header className="App-header">
        {!troll && (
          <>
            <img src="./bij.jpg" className="App-logo" alt="logo" />
            <p>
              <h1>Me, Bijen</h1> what's yours ? <br />
              <input
                type="text"
                value={name}
                onChange={() => {
                  setTroll(true);
                }}
              />
            </p>
          </>
        )}
        {troll && (
          <div onClick={()=>{setMsg('Sorry. Work in progress. Comeback later.')
                      setSorry(true)}}>
            {!sorry && <img
              src="https://img.wattpad.com/cover/110852044-416-k23308.jpg"
              alt="logo"
              width={200}
            />}
            <p>{msg}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
