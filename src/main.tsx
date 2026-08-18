import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App.tsx";
import "./index.css";

ReactGA.initialize("G-DJBJE1TBX0");

createRoot(document.getElementById("root")!).render(
  <App />
);
