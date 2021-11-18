import React from "react";
import { AppProvider } from "./AppProvider";
import "./App.css";
import { Switch } from "./Switch";

function App() {
  return (
    <div className="app">
      <header className="App-header">
        <nav className="navigation">
          <ul>
            <li>
              <a href="/page1">PAGE 1</a>
            </li>
            <li>
              <a href="/page2">PAGE 2</a>
            </li>
            <li>
              <a href="/page3">PAGE 3</a>
            </li>
          </ul>
        </nav>
        <nav className="boxes">
          <ul>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
        </nav>
        <nav className="set">
          <ul>
            <li>-</li>
            <li>-</li>
            <li>-</li>
          </ul>
        </nav>
        <section className="content">
          <AppProvider>
            <Switch></Switch>
          </AppProvider>
        </section>
      </header>
    </div>
  );
}

export default App;
