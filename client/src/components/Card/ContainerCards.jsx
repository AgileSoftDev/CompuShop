import { useSelector } from 'react-redux';
import Card from './Card';
import style from './Card.module.css'


const ContainerCards = ({ listArray }) => {
//   const numPaginado = useSelector(store => store.numPaginado)
  return (
    <div className={style.cardContainer} >
      {/* {listArray[numPaginado]?.map((recipe, index) => {
        return ( <Card              
                    id ={recipe.id}
                    name={recipe.title}
                    image={recipe.image}
                    diets={recipe.diets} 
                />);
      })} */}
      {listArray?.map((component, index) => {
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