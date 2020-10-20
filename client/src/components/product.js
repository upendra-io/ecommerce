import React, { useEffect, useState } from "react";

const Product = (props) => {
  const [id, setId] = useState();

  useEffect(() => {
    let id = props.match.params.product_id;
    setId(id);
  }, [props.match.params.product_id]);

  return <h1>Hello product{id}</h1>;
};

export default Product;
