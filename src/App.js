import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Nav from "./components/Nav";

const App = () => {
  const url = "https://course-api.com/react-tabs-project";

  const [info, setInfo] = useState([]);
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);

  const getInfo = async () => {
    const { data } = await axios.get(url);
    // console.log(data);
    setInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    getInfo();
    // setInfo(info);
    // setValue(value)
  }, []);
  // console.log(info[2]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="row container m-auto  col-10">
        <Header />
        <div className="mainDiv row m-auto d-flex ">
          <Nav btnInfo={info} setValue={setValue} value={value}/>
          <Experience info={info[value]} />
        </div>
        <div className="text-center my-4 ">
            <button className="py-1 px-3 fw-bold rounded-3 bg-danger border-0 text-light">MORE INFO</button>
        </div>
      </div>
    );
  }
};

export default App;
