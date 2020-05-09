import React, { useState, useEffect } from "react";
import axios from "axios";

const Get = (url, dependencies) => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(url)
      .then((res) => {
        setIsloading(false);
        setData(res.data);
      })
      .catch((err) => {
        alert("Oops, something went wrong!");
        console.log(err);
        setIsloading(false);
      });
  }, []);

  return [isLoading, data];
};

export default Get;
