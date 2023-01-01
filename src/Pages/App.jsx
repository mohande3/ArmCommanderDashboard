import { useEffect } from "react";
import Dashboard from "./Dashboard";

const App = () => {
  const CreateScript = (path) => {
    const script = document.createElement("script");
    script.src = path;
    // script.type = "";
    document.body.appendChild(script);
  };

  useEffect(() => {
    CreateScript('/assets/vendor/js/menu.js');
    CreateScript('/assets/js/main.js');
  }, []);

  return <Dashboard />;
};

export default App;
