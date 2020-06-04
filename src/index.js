import React from "react";
import { render } from "react-dom";

import GameLayout from "./layouts/GameLayout";
import * as Sentry from '@sentry/browser';
Sentry.init({dsn: "https://6902a949906046e9b2f90d291e46279a@o402467.ingest.sentry.io/5263653"});

render(<GameLayout />, document.getElementById("root"));
