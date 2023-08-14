import { useState } from "react";
import { logger } from "@kirklin/logger";

function App() {
  const [count, setCount] = useState(0);

  logger.info("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*");
  return (
    <>
      <h1>Vite + React</h1>
      <div className="">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
