import { validators } from '../../helpers_shopping/helpers_shopping';
import { useEffect, useState } from 'react';
import React from 'react';
import style from "./FormularioShopping.module.css"
import { useDispatch } from 'react-redux';
import { setShoppingForm } from '../../../../redux/actions/actions';





const Formulario = (props) =>{
    // const dispatch = useDispatch()

    const [formStatus,setFormStatus]=useState({
        name:"",
        city:"",
        direction:"",
        phone:"",
        references:"",
        options:"casa",
    })

    function handleAutoResize(event) {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
      }

      const handleOptionChange = (e) => {
        setFormStatus({...formStatus,options:e.target.value});        
      }

      const hanldeChange =(e)=>{
        const target = e.target.id;
        const value = e.target.value
        if(validators(target,value))setFormStatus({...formStatus,[target]:value})
        props.statusForm.current ={...formStatus,[target]:value}
      }

      useEffect(()=>{
         props.statusForm.current = formStatus;
      },[formStatus])

    return(
        <div id={style.FormCotainer}>
            <div id={style.firstChild}>
                <label className={style.firstLabel}>
                    <span id={style.firstSpan} className={style.spans}>Nombres y apellidos</span>
                    <div id={style.childTwo}>
                        <input onChange={hanldeChange} value={formStatus.name} id="name" className={style.inputs} />
                    </div>
                </label>
                <div id={style.aviso1}>
                    <span id={style.avisoOne}>Tal y como figure en el DNI.</span>
                </div>
                    <div id={style.secondDiv}>
                        <div id={style.childOneSecondDiv}>
                            <div id={style.childOneSecondDivChildOne}>
                                <label id={style.label2}>
                                    <span id={style.spanLabelTwo} className={style.spans}>
                                        Ciudad
                                    </span>
                                    <div id={style.divLabelTwo}>
                                        <input  value={formStatus.city} id="city"  onChange={hanldeChange}  className={style.inputs}/>
                                    </div>
                                </label>
                                <label id={style.label2}>
                                    <span id={style.spanLabelTwo} className={style.spans}>
                                        Dirección
                                    </span>
                                    <div id={style.divLabelTwo}>
                                        <input   value={formStatus.direction} id="direction"  onChange={hanldeChange} className={style.inputs} />
                                    </div>
                                </label>
                            </div>
                            <div></div>
                        </div>   
                    </div>
                    <div>
                        <span className={style.spans}>
                            ¿Es tu trabajo o tu casa?
                        </span>
                        <div className='divsWorkOrHome'>
                            <div id={style.optionsHorkHome}>
                                <div className={style.divsWorkOrHome}>
                                    <div className='divsWorkOrHome'>
                                        <input value="casa"
                                        checked={formStatus.options === 'casa'}
                                        onChange={handleOptionChange} type="radio" id="home"/>
                                    </div>
                                    <i className={style.iconWorkOrHome}>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="rgba(0, 0, 0, 0.8)" xmlns="http://www.w3.org/2000/svg"><path d="M13.262 7.828L12.0873 6.82625V15H8.61539V10.2316H5.38462V15H1.85958V6.81021L0.790769 7.828L0 7.08143L7 0L14 7.08143L13.262 7.828Z" fill="#4A4A4A"></path></svg>
                                    </i>
                                    <label className={style.labelWorkOrHome} htmlFor='home'>
                                        <span>Casa</span>
                                    </label>
                                </div>
                                <div className={style.divsWorkOrHome}>
                                    <div className={style.divsWorkOrHome}>
                                        <input value="trabajo"
                                            checked={formStatus.options === 'trabajo'}
                                            onChange={handleOptionChange} type="radio" id="work"/>
                                    </div>
                                    <i className={style.iconWorkOrHome}>
                                     <svg width="14" height="13" viewBox="0 0 14 13" fill="rgba(0, 0, 0, 0.8)" xmlns="http://www.w3.org/2000/svg"><path d="M13 3.3224H10.7333V0.48388C10.7333 0.216778 10.5093 0 10.2333 0H3.76667C3.49067 0 3.26667 0.216778 3.26667 0.48388V3.3224H1C0.448 3.3224 0 3.75595 0 4.29015V12.0322C0 12.5664 0.448 13 1 13H13C13.552 13 14 12.5664 14 12.0322V4.29015C14 3.75595 13.552 3.3224 13 3.3224ZM9 3.3224H5V1.19282H9V3.3224Z" fill="#4A4A4A"></path></svg>
                                    </i>
                                    <label className={style.labelWorkOrHome} htmlFor='work'>
                                        <span>Trabajo</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div id={style.telefono}>
                                <label id={style.labelNumeroTelefono}>
                                    <span id={style.spanNumeroTelefono} className={style.spans}>Telefono de contancto</span>
                                    <div>
                                        <input type="text" value={formStatus.phone} id="phone"  onChange={hanldeChange} className={style.inputs} />
                                    </div>
                                </label>                                  
                            </div>
                        </div>
                        <div id={style.controlTelefono}>
                            <span id={style.spanControlTelefono} className={style.spans}></span>   
                        </div>
                    </div>
                    <span className={style.spans} id={style.spanReferencias}>Referencias adicionales de esta dirección</span>
                    <div id={style.referenciasContainer}>
                        <label id={style.labelReferencias}>
                            <div id={style.divReferencias}>
                                <textarea rows="2" name="" onInput={handleAutoResize} value={formStatus.references} id="references"   onChange={hanldeChange} className={style.inputs} >
                                </textarea>
                            </div>
                        </label>
                    </div>
            </div>
        </div>
    )
};

export default Formulario;



