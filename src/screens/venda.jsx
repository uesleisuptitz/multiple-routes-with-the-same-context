import React from "react";
import { Link } from "react-router-dom";

const Venda = () => {
  return (
    <div>
      <h1>/home/venda</h1>
      <Link to={"/"}>voltar</Link>
      <br />
      <Link to={"/venda/produto"}>/produto</Link>
    </div>
  );
};

export default Venda;
