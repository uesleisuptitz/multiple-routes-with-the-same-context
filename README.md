<p align="center">
  <img src="https://github.com/uesleisuptitz/multiple-routes-with-the-same-context/blob/master/public/capa.png" alt="Multiplas rotas com o mesmo contexto" width="100%" />
</p>

# Múltiplas rotas com o mesmo contexto

Esse projeto foi desenvolvido para demonstrar como é possível usar um contexto em mais de uma rota, porém de forma que o mesmo contexto sirva para todas as rotas.

## Exemplo

```jsx
<Router>
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/produtos">
      <Produtos />
    </Route>
    {/* Este código causa um erro! */}
    {/* Já que um <Switch> só aceita elementos <Route> ou <Redirect> */}
    {/* E abaixo temos um <MyContextProvider> */}
    <MyContextProvider>
      <Route exact path="/produto">
        <Produto />
      </Route>
      <Route exact path="/editar-produto">
        <EditarProduto />
      </Route>
    </MyContextProvider>
  </Switch>
</Router>
```

## Solução

Unir todas as rotas que precisam do mesmo contexto em um único elemento `<Route>`. Para fazer isso podemos seguir alguns passos:

- Juntar todos os `paths` e passar para o elemento `<Route>` como um `array`
- Colocar os componentes de tela dentro do método `render` do `<Route>`
- Usar as `props` do método `render` para identificar qual componente deve ser exibido e retornado
  O código abaixo ilusta o que deve ser feito:

```jsx
<Router>
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/produtos">
      <Produtos />
    </Route>
    <Route
      exact
      path={["/produto", "/editar-produto"]}
      render={(props) => {
        const {
          location: { pathname },
        } = props;
        return (
          <MyContextProvider>
            {pathname.includes("/produto") ? (
              <Produto />
            ) : pathname.includes("/editar-produto") ? (
              <EditarProduto />
            ) : (
              <Redirect to="/" />
            )}
          </MyContextProvider>
        );
      }}
    />
  </Switch>
</Router>
```

## Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [React Router V5](https://v5.reactrouter.com/)
- [Context](https://pt-br.reactjs.org/docs/context.html)

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [React](https://pt-br.reactjs.org/)
- Uma IDE, como o [VSCode](https://code.visualstudio.com/)

## Passo a passo

Pelo terminal:

- Faça o clone do projeto em algum local da sua máquina. Exemplo: `user/projetos`
- Vá até a pasta que você acabou de clonar. Exemplo: `cd user/projetos/multiple-routes-with-the-same-context`
- Utilizando **npm** ou **yarn**, instale as dependências do projeto. Exemplo: execute o comando `yarn` ou `npm i`
- Agora, basta executar `yarn start` ou `npm run start` e o projeto vai ser executado. Ele vai executar em `http://localhost:3000/`

## Autor

Uéslei Suptitz, amante de desenvolvimento.

- [LinkedIn](https://www.linkedin.com/in/u%C3%A9slei-suptitz/)
- uesleisuptitz@gmail.com
