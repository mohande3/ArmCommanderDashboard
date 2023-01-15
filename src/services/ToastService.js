import { toast } from "react-hot-toast";

class ToastService {
  Dark = (message) => {
    toast.custom(<span className="alert alert-dark">{message}</span>);
  };
  Warning = (message) => {
    toast.custom(<span className="alert alert-warning">{message}</span>);
  };
}

export default new ToastService();
