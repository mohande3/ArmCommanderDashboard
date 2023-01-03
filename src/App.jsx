import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import FullRoute from "./Routes/Route";

const App = () => {
  const CreateScript = (path) => {
    const script = document.createElement("script");
    script.src = path;
    // script.type = "";
    document.body.appendChild(script);
  };

  useEffect(() => {
    CreateScript("/assets/vendor/js/menu.js");
    CreateScript("/assets/js/main.js");
  }, []);

  return (
    <>
      <Toaster />
      <FullRoute />
    </>
  );
};

export default App;
