import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #B7322C;
  color: #FFF;
  padding: 15px;
  font-size:22px;
  text-transform: uppercase;
  font-family: 'lato', sans-serif;
  font-weight: bold;
  text-align: center;
  height:autopx;

`

const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}

export default Error