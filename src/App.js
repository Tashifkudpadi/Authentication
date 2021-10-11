import { useState, useEffect } from "react";
import AuthForm from "./components/Auth/AuthForm";
import Cookies from "./components/Cookies/Cookies";
import FeaturesContent from "./components/Features/FeaturesContent";
import FeaturesHeading from "./components/Features/FeaturesHeading";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Operations from "./components/Operations/Operations";
import Slogan from "./components/Slogan/Slogan";
import Testimonials from "./components/Testimonials/Testimonials";
import "./index.css";

function App() {
  const [cookie, setCookie] = useState(true);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem("isLoggedIn");

    if (storedUserData === "1") {
      setShowForm(false);
    }
  }, [setShowForm]);

  const hideCookieHandler = () => {
    setCookie(false);
  };

  const loginHandler = (boolean) => {
    setShowForm(boolean);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setShowForm(true);
  };

  return (
    <div className="sections">
      {showForm && <AuthForm onValue={loginHandler} />}
      {!showForm && <Navbar onConfirm={logoutHandler} />}
      {!showForm && <Home />}
      {cookie && !showForm && <Cookies onConfirm={hideCookieHandler} />}
      {!showForm && <FeaturesHeading />}
      {!showForm && <FeaturesContent />}
      {!showForm && <Operations />}
      {!showForm && <Testimonials />}
      {!showForm && <Slogan />}
      {!showForm && <Footer />}
    </div>
  );
}

export default App;
