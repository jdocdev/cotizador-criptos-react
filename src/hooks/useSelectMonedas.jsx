import {useState} from "react"
import styled from "@emotion/styled"

const Label = styled.label`
    color:#fff;
    font-family: "Rethink Sans", sans-serif;
    display:block;
    font-size:24px;
    font-weight:700;
    margin:15px 0;
`
const Select = styled.select`
    width:100%;
    font-size:18px;
    padding:14px;
    border-radius:10px;
    font-family: "Rethink Sans", sans-serif;
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">Seleccione</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.nombre}</option>
                ))}
            </Select>
        </>
    );

    return [state, SelectMonedas];
};

export default useSelectMonedas;
