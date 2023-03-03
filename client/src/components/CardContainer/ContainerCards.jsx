import { useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
import style from './ContainerCards.module.css'


const ContainerCards = ({ listArray }) => {
  const { numPaginado } = useSelector(store => store)
  const { stateViewCard } = useSelector(store => store)

  return (
    <div id={stateViewCard?style.cardContainer:style.cardContainer2} >
      {listArray[numPaginado]?.map((component) => {
        return ( <Card 
                    key={component._id}         
                    id={component._id}
                    name={component.description}
                    price={component.price}
                    img={component.img}
                    component={component}
                />);
      })}
    </div>
  );
};

export default ContainerCards;