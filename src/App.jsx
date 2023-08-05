import styled from "@emotion/styled";
import ImagenCripto from "/images/imagen-criptos.png";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "lato", sans-serif;
  color: #fff;
  width: 90%;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})


  useEffect(() => {
    if (Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        const { moneda, criptoMoneda } = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setResultado(resultado.DISPLAY[criptoMoneda][moneda])

      }
      cotizarCripto()
    }
  }, [monedas])


  return (
    <>
      <Contenedor>
        <Imagen src={ImagenCripto} alt="Imagen en Hero de Cripto Monedas"
        />
        <div>
          <Heading>Cotiza Criptomonedas al Instantante</Heading>
          <Formulario setMonedas={setMonedas}></Formulario>
          {resultado.PRICE && <Resultado resultado={resultado} />}
        </div>

      </Contenedor>
    </>
  );
}

export default App;
