import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Toaster } from "react-hot-toast";
import Navbarleft from "./Components/Navbarleft";


function App() {
  const [searchData, setSearchData] = useState("");
  return (
    <div className="App">
        <BrowserRouter>
          <Header searchData={searchData} setSearchData={setSearchData}/>
          <Navbarleft />
          <Routing searchData={searchData} setSearchData={setSearchData}/>
          <Footer />
        </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
