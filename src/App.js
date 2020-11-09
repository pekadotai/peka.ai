import { AksaraProvider, GlobalStyles } from "@aksara-ui/core";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./shared/Navbar";
import RiskManagement from "./pages/RiskManagement";
import AboutUs from "./pages/AboutUs";
import AboutCancerBreast from "./pages/AboutCancerBreast";
import FAQs from "./pages/FAQs";
import Footer from "./shared/Footer";

function App() {
  return (
    <AksaraProvider>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/risk_management" component={RiskManagement} />
          <Route exact path="/about_us" component={AboutUs} />
          <Route
            exact
            path="/about_cancer_breast"
            component={AboutCancerBreast}
          />
          <Route exact path="/faqs" component={FAQs} />
        </Switch>
        <Footer />
      </Router>
    </AksaraProvider>
  );
}

export default App;
