import { useDispatch, useSelector } from "react-redux";
import style from "./Paginated.module.css";
import { numPaginadoChange } from "../../redux/actions/actions";
import arrow from "../../assets/icons/arrow.svg"


const Paginated = () => {
  const { numPaginado, paginated } = useSelector(store => store)
  const dispatch = useDispatch()
  return (
    <div className={style.container}>
      <button
            id={style.buttonArrows}
            className={style.arroLeft}
            onClick={() => dispatch(numPaginadoChange(numPaginado - 1))}
            disabled={ numPaginado === 0 }
          >
            <img src={arrow} alt="Left arrow" />
      </button>
      {paginated?.map((item, index) => {
        return (
          <button
            className={style.buttonsArrow}
            id={
              numPaginado === index ? style.indexActive : undefined
            }
            onClick={() => dispatch(numPaginadoChange(index))}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        disabled={numPaginado === paginated?.length - 1 }
        id={style.buttonArrows}
        onClick={() => dispatch(numPaginadoChange(numPaginado + 1))}
      >
        <img src={arrow} alt="Right arrow" />
      </button>
    </div>
  );
};

export default Paginated;