import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Singelservice from "./Singelservice";
const Services = () => {
  const data = useLoaderData();
  const [inputvalue, setinputvalue] = useState("");
  let handelinput = (e) => {
    setinputvalue(e.target.value);
  };
  
  const mydata = inputvalue
    ? data.filter((item) => item.name.common.toLowerCase().includes(inputvalue))
    : data;

  //
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-lg-4 text-center">
            <input
              onChange={handelinput}
              className="px-4 py-2 rounded mt-3 mb-4"
              type="text"
              placeholder="search your country"
            />
          </div>
        </div>
        <div
          className="row justify-content-between
"
        >
          {mydata.map((mapitem) => (
            <Singelservice contry={mapitem} key={mapitem.cca3} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
// .name.common.includes(inputvalue)
