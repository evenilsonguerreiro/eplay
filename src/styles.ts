import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#eee',
  preto: '#000',
  cinza: '#333',
  verde: '#27ae60',
  cinzaClaro: '#ccc'
}

export const EstiloGlobal = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background:${cores.preto};
  color: ${cores.branco};
  padding-top: 40px;
}

.container {
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
}
`
