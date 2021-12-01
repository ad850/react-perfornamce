import React, { createContext } from "react";

import One from "./One";

const App = () => {
  const Name = createContext();

  return (
    <div>
      <Name.Provider name="aditya">
        <One />
      </Name.Provider>
    </div>
  );
};

export default App;

export { Name };
