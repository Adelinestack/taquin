import styled from 'styled-components';

const Cell = styled.div`
  position: absolute;
  background: url('https://www.explora-project.com/media/cache/expedition_gallery/2018/12/7366-paysages-d-islande.jpg');
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  transition: all 0.3s linear;
  background-position: ${props => props.realPos.posY * -100}px
    ${props => props.realPos.posX * -100}px;
  top: ${props => props.currentPos.posX * 100}px;
  left: ${props => props.currentPos.posY * 100}px;
`;

export { Cell };
