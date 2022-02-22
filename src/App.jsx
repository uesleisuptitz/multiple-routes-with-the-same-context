import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import { TestProvider } from "./context";
import { Produto, Venda, EditarProduto } from "./screens";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>/home</h1>
          <Link to="/venda">/venda</Link>
        </Route>
        <Route
          exact
          // quando precisar colocar um contexto englobando mais de uma rota
          // pode ser feito dessa forma:
          path={["/venda", "/venda/produto", "/venda/editar-produto"]}
          // quando ocorre a navegação para algum desses paths, o contexto é montado
          // desta forma o mesmo contexto pode ser reutilizado para várias rotas
          render={(props) => {
            const {
              location: { pathname },
            } = props;
            return (
              <TestProvider>
                {pathname === "/venda" ? (
                  <Venda />
                ) : pathname.includes("/venda/produto") ? (
                  <Produto />
                ) : pathname.includes("/venda/editar-produto") ? (
                  <EditarProduto />
                ) : (
                  <Redirect to="/" />
                )}
              </TestProvider>
            );
          }}
        ></Route>
        <Route>
          <h1>404</h1>
          <Link to="/">/home</Link>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
