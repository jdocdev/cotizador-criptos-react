import styled from "@emotion/styled"

const MensajeError = styled.div`
    background-color: #fb7676;
    color:#fff;
    padding:15px;
    font-size:22px;
    text-transform:uppercase;
    font-weight:700;
    text-align:center;
    font-family: "Rethink Sans", sans-serif;
    border-radius:10px;
`

const Error = ({ children }) => {
    return (
        <MensajeError>
            {children}
        </MensajeError>
    )
}

export default Error