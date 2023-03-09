import style from "./modalVer.module.css";

const ModalVer = ({component,close}) => {


  return (
    <>

      <div id={style.containerModalVer}>
        <div id={style.nameContainer}>
          <label>{component.name}</label>
        </div>
        <div>
            <img src={component.img} alt={'Imagen de' + component.name} style={{width: '300px'}}/>
        </div >
        <div id={style.modalVerCerrar}>
        <label onClick={()=>close({visible:false})} >
            Cerrar
        </label>
        </div>
      </div>
    </>
  );
}

export default ModalVer;