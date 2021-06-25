import styled from 'styled-components';

const ButtonStyles = styled.button`
  font-size: var(--fontsizenum);
  text-transform: uppercase;
  background: var(--keygraybg);
  color: var(--mainbg);
  cursor: pointer;
  border-radius: 5px;
  width: 65px;
  height: 60px;
  box-shadow: 0 5px var(--keygrayshadow);
  margin: 8px 0;
  font-family: var(--font);
`;

export default ButtonStyles;