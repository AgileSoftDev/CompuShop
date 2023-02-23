import { useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
import style from './ContainerCards.module.css'


const ContainerCards = ({ listArray }) => {
  const { numPaginado } = useSelector(store => store)

  return (
    <div id={style.cardContainer} >
      {listArray[numPaginado]?.map((component) => {
        return ( <Card 
                    key={component._id}         
                    id={component._id}
                    name={component.description}
                    price={component.price}
                    img={component.img}
                />);
      })}
    </div>
  );
};

export default ContainerCards;