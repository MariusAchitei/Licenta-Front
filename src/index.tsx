import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SidebarProvider } from "contexts/SidebarContext";
import ThemedSuspense from "components/ThemedSuspense";
import { Windmill } from "@windmill/react-ui";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <SidebarProvider>
    <Suspense fallback={<ThemedSuspense />}>
      <Windmill usePreferences>
        <App />
      </Windmill>
    </Suspense>
  </SidebarProvider>,
);

reportWebVitals();
