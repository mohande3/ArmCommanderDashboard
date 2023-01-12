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
    // CreateScript("/assets/vendor/libs/jquery/jquery.js");
    // CreateScript("/assets/vendor/libs/popper/popper.js");
    // CreateScript("/assets/vendor/js/bootstrap.js");
    // CreateScript("/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js");
    // CreateScript("/assets/vendor/js/menu.js");
    // CreateScript("/assets/js/main.js");
  }, []);

  return (
    <>
      <Toaster />
      <FullRoute />
    </>
  );
};

export default App;
