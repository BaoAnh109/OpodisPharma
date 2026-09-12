import { useEffect } from "react";
import { getSystemInfo } from "zmp-sdk";
import { configAppView } from "zmp-sdk/apis";
import {
  App as ZmpApp,
  SnackbarProvider,
} from "zmp-ui";
import type { AppProps } from "zmp-ui/app";

import Router from "./router";
import StartupPromo from "@/shared/components/StartupPromo/StartupPromo";

const resolveTheme = (): AppProps["theme"] => {
  try {
    const theme = getSystemInfo().zaloTheme;
    return theme === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
};

const App = () => {
  useEffect(() => {
    configAppView({
      headerColor: "#FFFFFF",
      headerTextColor: "black",
      statusBarType: "normal",
      actionBar: {
        hide: true,
      },
    }).catch(() => {});
  }, []);

  return (
    <ZmpApp theme={resolveTheme()}>
      <SnackbarProvider>
        <Router />
        <StartupPromo />
      </SnackbarProvider>
    </ZmpApp>
  );
};

export default App;
