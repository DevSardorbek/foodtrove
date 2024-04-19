import React, { useEffect, useState } from "react";
import Loading from "../loading/Loader";
import axios from "axios";
import Banner from "../banner/Banner";
import "../../sass/__main.scss";

const API_URL = "https://dummyjson.com/products";

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      <div className="banner__cards-wrapper">
        <div className="container">
          <div className="banner__title">
            <h2>Popular Products</h2>

            <div className="title__links">
              <p>All</p>
              <p>Milks & Dairies</p>
              <p>Coffes & Teas</p>
              <p>Pet Foods</p>
              <p>Meats</p>
              <p>Vegetables</p>
              <p>Fruits</p>
            </div>
          </div>
          {loading ? <Loading /> : <></>}
          <div className="banner__cards">
            {data?.map((el) => (
              <div key={el.id}>
                <Banner item={el} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
