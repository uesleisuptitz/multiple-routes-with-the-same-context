import React from "react";
import { Link } from "react-router-dom";

const Produto = () => {
  return (
    <div>
      <h1>/home/venda/produto</h1>
      <Link to={"/venda"}>voltar</Link>
      <br />
      <Link to={"/venda/editar-produto"}>/editar-produto</Link>
    </div>
  );
};

export default Produto;
