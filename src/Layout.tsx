import React from "react";
import { Home } from "./page";

function App() {
  return (
    <div className="flex flex-col text-white min-h-screen">
      <header className="italic text-xl bg-slate-800 py-6 px-4 font-semibold">
        Coding Challenge
      </header>
      <main className="column p-0 flex-grid">
        <Home />
      </main>
    </div>
  );
}

export default App;
