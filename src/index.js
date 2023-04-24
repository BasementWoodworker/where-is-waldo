import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const rootElem = document.createElement("div");
rootElem.id = "root";
document.body.appendChild(rootElem);

const root = createRoot(rootElem);
root.render(<App />);