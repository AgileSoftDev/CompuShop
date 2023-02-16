import Card from '../Card/Card.jsx';
import style from './ContainerCards.module.css'


const ContainerCards = ({ listArray }) => {
  return (
    <div id={style.cardContainer} >
  
      {listArray?.map((component) => {
        return ( <Card              
                    id ={component.id}
                    title={component.name}
                    image={component.image}
                    precio={component.precio}
                />);
      })}
    </div>
  );
};

export default ContainerCards;