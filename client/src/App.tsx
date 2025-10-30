import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Card from "./pages/Card";
import Recharge from "./pages/Recharge";
import Map from "./pages/Map";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Promotions from "./pages/Promotions";
import Help from "./pages/Help";
import Statistics from "./pages/Statistics";
import Onboarding from "./pages/Onboarding";
import Splash from "./pages/Splash";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/card" component={Card} />
      <Route path="/recharge" component={Recharge} />
      <Route path="/map" component={Map} />
      <Route path="/history" component={History} />
      <Route path="/profile" component={Profile} />
      <Route path="/promotions" component={Promotions} />
      <Route path="/help" component={Help} />
      <Route path="/statistics" component={Statistics} />
      <Route path="/onboarding" component={Onboarding} />
      <Route path="/splash" component={Splash} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
