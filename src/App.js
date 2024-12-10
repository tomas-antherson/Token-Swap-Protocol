import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router";
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
