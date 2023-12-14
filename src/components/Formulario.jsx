import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Error from "./Error"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas"

const InputSubmit = styled.input`
  background-color: #69a4fb;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  font-family: "Rethink Sans", sans-serif;
  margin-top:30px;

  &:hover {
    background-color: #214488;
    cursor: pointer;
  }
`

const Formulario = ({ setMonedas }) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=19&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            // console.log(resultado.Data)
            const arrayCriptos = resultado.Data.map(cripto => {
                // console.log(cripto.CoinInfo.Name)
                // console.log(cripto.CoinInfo.FullName)
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName,
                }
                // console.log(objeto)
                return objeto
            })
            // console.log(arrayCriptos)
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        // console.log('enviando formulario')
        // console.log(moneda)
        // console.log(criptomoneda)
        if ([moneda, criptomoneda].includes('')) {
            // console.log('error')
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form
                onSubmit={handleSubmit}
            >
                <SelectMonedas />
                <SelectCriptomoneda />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario
