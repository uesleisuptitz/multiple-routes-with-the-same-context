import React from "react";
import { Link } from "react-router-dom";

const Produto = () => {
  return (
    <div>
      <h1>/home/venda/editar-produto</h1>
      <Link to={"/venda/produto"}>voltar</Link>
    </div>
  );
};

export default Produto;
