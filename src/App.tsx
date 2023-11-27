import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/app.router";

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
