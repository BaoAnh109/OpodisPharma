import { useEffect } from "react";
import { configAppView } from "zmp-sdk/apis";
import {
  App as ZmpApp,
  SnackbarProvider,
} from "zmp-ui";

import Router from "./router";
import StartupPromo from "@/shared/components/StartupPromo/StartupPromo";

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
    <ZmpApp theme="light">
      <SnackbarProvider>
        <Router />
        <StartupPromo />
      </SnackbarProvider>
    </ZmpApp>
  );
};

export default App;
