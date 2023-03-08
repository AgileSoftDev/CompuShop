import style from "./Construye.module.css";
import {Link, useHistory} from "react-router-dom"
import cpu from "../../assets/construye/icons_componentes/cpu.png";
import motherBoard from "../../assets/construye/icons_componentes/mother.png";
import cooler from "../../assets/construye/icons_componentes/cooler.png";
import ram from "../../assets/construye/icons_componentes/ram.png";
import gpu from "../../assets/construye/icons_componentes/gpu.png";
import storaged from "../../assets/construye/icons_componentes/storaged.png";
import psu from "../../assets/construye/icons_componentes/psu.png";
import caseIcon from "../../assets/construye/icons_componentes/case.png";
import screen from "../../assets/construye/icons_componentes/screen.png";
import peripherals from "../../assets/construye/icons_componentes/perifericos.png";
import Mouse from "../../assets/construye/icons_componentes/computer-mouse-icon.svg";
import cpu_active from "../../assets/construye/icons_componentes_active/cpu_active.png";
import motherBoard_active from "../../assets/construye/icons_componentes_active/mother_active.png";
import cooler_active from "../../assets/construye/icons_componentes_active/cooler_active.png";
import ram_active from "../../assets/construye/icons_componentes_active/ram_active.png";
import gpu_active from "../../assets/construye/icons_componentes_active/gpu_active.png";
import storaged_active from "../../assets/construye/icons_componentes_active/storaged_active.png";
import psu_active from "../../assets/construye/icons_componentes_active/psu_active.png";
import caseIcon_active from "../../assets/construye/icons_componentes_active/case_active.png";
import screen_active from "../../assets/construye/icons_componentes_active/screen_active.png";
import peripherals_active from "../../assets/construye/icons_componentes_active/periferico_active.png";
import { useEffect, useRef, useState } from "react";
import './style_svgs.css';
import { cleanArmaTuPc, finalizarArmaTuPc, pickArmaTuPc, setStepBuildPc } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import CardArmaTuPc from "../../components/Card_arma_tu_pc/Card_arma_tu_pc";
import triangle from "../../assets/construye/general_icons/triangle.svg";
import { cleanPathname } from "../../utils/index.js";
import axios from "axios";
import { selectCategoryByStep } from "../../helpers/Construye.helpers";
import url from "../../utils/deploy_back";


const rutas_pasos = {
    '/construye/paso1' : {cpu:true},
    '/construye/paso2' : {motherBoard:true},
    '/construye/paso3' : {cooler:true},
    '/construye/paso4' : {ram:true},
    '/construye/paso5' : {gpu:true},
    '/construye/paso6' : {storaged:true},
    '/construye/paso7' : {psu:true},
    '/construye/paso8' : {caseIcon:true},
    '/construye/paso9' : {screen:true},
    '/construye/paso10' : {Headset:true},
    '/construye/paso11' : {Mouse:true},
    '/construye/paso12' : {KEYBOARD:true},
    '/construye' : {cpu:true},
  }

const rutas_texto = {
    '/construye/paso1' : {
        title:'Elige tu Procesador',
        text:'Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.',
    },
    '/construye/paso2' : {
        title:'Elige tu Motherboard',
        text:'Es donde se conectarán todos los componentes de tu PC. Según el modelo que elijas tendrás diferentes beneficios de conectividad y expansión.',
    },
    '/construye/paso3' : {
        title:'Elige tu Cooler',
        text:'El cooler mantiene la temperatura de tu equipo, evitando el daño en los componentes y permitiendo que este funcione correctamente.        ',
    },
    '/construye/paso4' : {
        title:'Elige tu Memorias',
        text:'Las memorias sirven para cargar y almacenar todas las instrucciones que se ejecutan en el procesador. Lo que se debe tener en cuenta en esta sección es el tamaño, la frecuencia y la cantidad de módulos.',
    },
    '/construye/paso5' : {
        title:'Elige tu Placa de Video',
        text:'El procesador gráfico de una tarjeta es muchísimo más potente que el que tienen los procesadores, por esta razón es necesaria para el buen funcionamiento del equipo y muy recomendada para gamers y profesionales de los gráficos.',
    },
    '/construye/paso6' : {
        title:'Elige tu Almacenamiento',
        text:'Acá es donde se guardarán tus documentos. Se debe tener en cuenta el tamaño y la velocidad. Las unidades SSD son más veloces y pueden ser utilizadas como unidad principal de almacenamiento o como un complemento de un almacenamiento HDD.',
    },
    '/construye/paso7' : {
        title:'Elige tu Fuente',
        text:'La fuente es la encargada de alimentar al resto de los componentes y va a ser uno de los factores a tener en cuenta si querés armar una pc potente.',
    },
    '/construye/paso8' : {
        title:'Elige tu Gabinete',
        text:'Es fundamental para el armado de la pc ya que contendrá todos los componentes funcionales de la misma. Podés revisar las medidas en el botón de especificaciones.',
    },
    '/construye/paso9' : {
        title:'Elige tu Monitor',
        text:'El monitor es fundamental si querés disfrutar de tus juegos y peliculas favoritas.',
    },
    '/construye/paso10' : {
        title:'Elige tu Periféricos',
        text:'Mouses, Teclados, MousePad, Auriculares, Coolers, y más.',
    },
    '/construye/paso11' : {
        title:'Elige tu Periféricos',
        text:'Mouses, Teclados, MousePad, Auriculares, Coolers, y más.',
    },
    '/construye/paso12' : {
        title:'Elige tu Periféricos',
        text:'Mouses, Teclados, MousePad, Auriculares, Coolers, y más.',
    },
    '/construye' : {
        title:'¡Está listo para empezar a armar tu pc!',
        text:'Empieza eligiendo tu cpu. Tu procesador es la pieza central del rendimiento de los programas. Para saber si un procesador es potente lo que tenés que medir es la frecuencia, el ancho de bus, la memoria caché y los núcleos e hilos de procesamiento.',
    },
  }



  const getCurrentStep = (pathname)=>{
    if(cleanPathname(pathname) === "/construye") return 1

    const pathPartition = cleanPathname(pathname).split('/')
    let step = parseInt(pathPartition.pop().slice(4));
    return step
}


const Construye = () =>{

    const dispatch = useDispatch()
    const history = useHistory();
    const pathname = history.location.pathname;

    const [currentStep ,setCurrentStep] = useState()
    const [componet, setComponent] = useState({})
    const [cardsToShow, setCardsToShow] = useState([])
    const [marcaStatus, setMarcaStatus] = useState({})
    const [categoryStatus, setCategoryStatus] = useState({})
    const [buttonsManagerStatus, setButtonManagerStatus] = useState({});
    const [totalPrice, setTotalPrice] = useState(0)
    const [peripferalsCount,setPeripferalsCount] = useState()
    const [firstPeripherals, setFirstPeripherals] =useState()

    const refArrowLimpiar = useRef(null)
    const refButtonFinalizar = useRef(null)
    const refArrowFinalizar = useRef(null)

    const listenerRef = useRef(null)


    const step_build_pc=useSelector(e=>e.step_build_pc)
    const choosenComponents = useSelector(e=>e.build_pc)

    window.addEventListener("click",  setButtonsManagerFalse)


    useEffect(()=>{
        if (step_build_pc) { 
            if(rutas_pasos[step_build_pc])  { 
                setComponent(rutas_pasos[step_build_pc])
                history.push(step_build_pc)
            }
        }
    },[])

        useEffect(()=>{
            const handleClick = (evento) => {
                console.log("handelclick");
                setButtonsManagerFalse(evento);
                window.removeEventListener("click", handleClick);
              };

            listenerRef.current = handleClick;


            // window.addEventListener("click",  listenerRef.current)  ///CHEKAR ESTA PARTE OJIITO

            setCurrentStep(getCurrentStep(cleanPathname(pathname)))

            if (step_build_pc) { 
                if(rutas_pasos[step_build_pc])  { 
                    setComponent(rutas_pasos[step_build_pc])
                    // history.push(step_build_pc)
                }

            else{
                history.push('/construye/paso1')
                setComponent({cpu:true})
                }

            }else{
                const result = rutas_pasos[cleanPathname(pathname)]?rutas_pasos[cleanPathname(pathname)]:(history.push('/construye/paso1') , {cpu:true});
                setComponent(result)
            }


            return ()=>{ 
                // console.log("Me desmonté");
                window.removeEventListener("click", listenerRef.current );
        }
  

        },[step_build_pc, pathname, history , currentStep])
      



        useEffect(()=>{
            if(cleanPathname(pathname)==="/construye")  dispatch(setStepBuildPc("/construye/paso1"))
            else dispatch(setStepBuildPc(cleanPathname(pathname)))
        },[pathname])


        useEffect(()=>{
            const getData = async (step_build_pc)=>{

               
                const category = selectCategoryByStep[step_build_pc]

                if(Array.isArray(category)){

                    let data = [];

                    await Promise.all(category.map(async e => {
                        let { data: data1 } = await axios.get(`${url}/components/${e}`).catch(e => {
                            console.log(`No se encontraron componentes con la categoría ${category}`);
                            return "no data"
                        });
                        data = [...data, ...data1];
                    }));
                    
                    setCardsToShow(data)

                }else if(typeof(category) ==="string"){
                    let {data} = await axios.get(`${url}/components/${category}`).catch(e=>{console.log(`No Econtró componentes con la categoría ${category}`); return "no data"})
        
 
                    setCardsToShow(data)
                }else{
                    console.log(`unhanlded category: ${category}`);
                    setCardsToShow(undefined)
                }

                
            }
            getData(step_build_pc)
            
        },[step_build_pc])


        useEffect(()=>{

            let fullPrice = 0;
            for (const componente in choosenComponents) {
                if (choosenComponents[componente]?.price) {
                    fullPrice = fullPrice+choosenComponents[componente]?.price
                }
            }
            setTotalPrice(fullPrice)

            let contador = 0;
            choosenComponents.peripherals.forEach(element => {  
                if (element) {
                    contador++
                }
            });
            setPeripferalsCount(contador)
            for (let i = 0; i < choosenComponents.peripherals.length; i++) {
                const element = choosenComponents.peripherals[i];
                if (element) {
                  setFirstPeripherals(element);
                  break;
                }
              }
              

        },[choosenComponents])

    function setButtonsManagerFalse (evento) {
        // console.log("Me clickearon");
        const target  =  evento.target;
        if (target !== refArrowFinalizar.current && target !== refArrowLimpiar.current) {
            if (target !== refButtonFinalizar.current ){
                if(buttonsManagerStatus.limpiar|| buttonsManagerStatus.finalizar){
                    setButtonManagerStatus({})
                }
            }
        }
    }


    const moveStepHandler = (type) =>{
            if ((pathname !== "/construye/paso13" && type==-1) ||(pathname !== "/construye/paso12"&& type===1) ) {
                const step = getCurrentStep(cleanPathname(pathname)) + type
                const newRoute ='paso' + String(step)
                if (pathname === "/construye")  history.push("/construye/"+newRoute)
                else  history.push(newRoute)
                setCurrentStep(step )
            }
    } 

    
    const finalizarHandler = ()=>{
       dispatch(finalizarArmaTuPc())
    }


    return(
        <div id={style.ContainerConstruye}>
            <div>

                <div>
                    <h1>{rutas_texto[cleanPathname(pathname)]&&rutas_texto[cleanPathname(pathname)].title}</h1>
                    <p>{rutas_texto[cleanPathname(pathname)]&&rutas_texto[cleanPathname(pathname)].text}</p> 
                </div>

                <div id={style.containerConstruye_main}>
                    <div>
                        <ul>
                            <li>
                                <img className={!componet.cpu?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso1');setComponent({cpu:true});dispatch(setStepBuildPc('/construye/paso1'))}} src={choosenComponents.cpu?choosenComponents.cpu.img:componet.cpu?cpu_active: cpu} alt="cpu" />
                                {choosenComponents.cpu&&<p id={style.nameComponentPicked}>{choosenComponents.cpu.name}</p>}
                            </li>
                            <li>
                                <img className={!componet.cooler?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso3'); setComponent({cooler:true});dispatch(setStepBuildPc('/construye/paso3'))}} src={choosenComponents.cooler?choosenComponents.cooler.img:componet.cooler?cooler_active:cooler} alt="cooler" />
                                {choosenComponents.cooler&&<p id={style.nameComponentPicked}>{choosenComponents.cooler.name}</p>}

                            </li>
                            <li>
                                <img className={!componet.gpu?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso5'); setComponent({gpu:true});dispatch(setStepBuildPc('/construye/paso5'))}} src={choosenComponents.gpu?choosenComponents.gpu.img:componet.gpu?gpu_active:gpu} alt="gpu" />
                                {choosenComponents.gpu&&<p id={style.nameComponentPicked}>{choosenComponents.gpu.name}</p>}

                            </li>
                            <li>
                                <img className={!componet.psu?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso7'); setComponent({psu:true});dispatch(setStepBuildPc('/construye/paso7'))}} src={choosenComponents.psu?choosenComponents.psu.img:componet.psu?psu_active:psu} alt="psu" />
                                {choosenComponents.psu&&<p id={style.nameComponentPicked}>{choosenComponents.psu.name}</p>}
                            </li>
                            <li>
                                <img className={!componet.screen?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso9'); setComponent({screen:true});dispatch(setStepBuildPc('/construye/paso9'))}}  src={choosenComponents.screen?choosenComponents.screen.img:componet.screen?screen_active:screen} alt="screen" />
                                {choosenComponents.screen&&<p id={style.nameComponentPicked}>{choosenComponents.screen.name}</p>}
                            </li>
                            <li>
                                <img className={!componet.motherBoard?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso2'); setComponent({motherBoard:true});dispatch(setStepBuildPc('/construye/paso2'))}}  src={choosenComponents.motherBoard?choosenComponents.motherBoard.img:componet.motherBoard?motherBoard_active:motherBoard} alt="motherBoard" />
                                {choosenComponents.motherBoard&&<p id={style.nameComponentPicked}>{choosenComponents.motherBoard.name}</p>}

                            </li>
                            <li>
                                <img className={!componet.ram?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso4'); setComponent({ram:true});dispatch(setStepBuildPc('/construye/paso4'))}}  src={choosenComponents.ram?choosenComponents.ram.img:componet.ram?ram_active:ram} alt="ram" />
                                {choosenComponents.ram&&<p id={style.nameComponentPicked}>{choosenComponents.ram.name}</p>}
                            </li>
                            <li>
                                <img className={!componet.storaged?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso6'); setComponent({storaged:true});dispatch(setStepBuildPc('/construye/paso6'))}}  src={choosenComponents.storaged?choosenComponents.storaged.img:componet.storaged?storaged_active:storaged} alt="storaged" />
                                {choosenComponents.storaged&&<p id={style.nameComponentPicked}>{choosenComponents.storaged.name}</p>}
                            </li>
                            <li>
                                <img className={!componet.caseIcon?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso8'); setComponent({caseIcon:true});dispatch(setStepBuildPc('/construye/paso8'))}}  src={choosenComponents.case?choosenComponents.case.img:componet.caseIcon?caseIcon_active:caseIcon} alt="caseIcon" />
                                {choosenComponents.case&&<p id={style.nameComponentPicked}>{choosenComponents.case.name}</p>}
                            </li>
                            
                            <li id={style.peripferalsCountContainer}>
                                <img className={!componet.peripherals?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso10'); setComponent({peripherals:true});dispatch(setStepBuildPc('/construye/paso10'))}} src={choosenComponents?.peripherals.length?firstPeripherals?.img:componet.peripherals?peripherals_active:peripherals} alt="peripherals" />
                                {!!choosenComponents?.peripherals?.length&& <p id={style.nameComponentPicked}>{choosenComponents.peripherals.name}</p>}
                                <span style={peripferalsCount?undefined:{display:"none"}} id={style.peripferalsCount}>+{peripferalsCount}</span>
                            </li>
                        </ul>
                        <div>
                            <div>
                                <h3>(0 wathss)</h3>
                                <div className={currentStep <= 1 ? style.disabled:undefined }>
                                    <p onClick={currentStep > 1 ? ()=> moveStepHandler(-1) : undefined} >VOLVER ATRÁS</p>

                                    <div ref={refArrowLimpiar} onClick={()=>setButtonManagerStatus({ limpiar: !buttonsManagerStatus.limpiar})} >
                                        <img src={triangle} alt="Flecha abajo" />
                                    </div>

                         
                                    <button id={buttonsManagerStatus.limpiar ? undefined : style.oculto } className={style.buttonManager} onClick={()=>dispatch(cleanArmaTuPc())}>
                                         <span>LIMPIAR</span>
                                    </button> 

                                </div>
                            </div>
                            <div>
                                <h1>Toltal: $ {totalPrice}</h1>
                                <div className={currentStep>=12? style.disabled:undefined}>
                                    <p  onClick={cleanPathname(pathname) === "/construye" ? ()=> history.push('/construye/paso2') : currentStep < 12? ()=> moveStepHandler(1) :undefined}>SALTAR PASO</p>
                                    <div ref={refArrowFinalizar} onClick={()=>setButtonManagerStatus({ finalizar: !buttonsManagerStatus.finalizar})}>
                                        <img src={triangle} alt="Flecha abajo" />
                                    </div>

                                      <Link to={"/shoppingcart"} ref={refButtonFinalizar} id={buttonsManagerStatus.finalizar ? undefined : style.oculto } className={style.buttonManager} onClick={()=>finalizarHandler()}>
                                        <span>FINALIZAR</span> 
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                            <div>
                            <span>
                                <svg className={!componet.Headset?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso10'); setComponent({Headset:true});dispatch(setStepBuildPc('/construye/paso10'))}}  version="1.0" fill="none" height="24" stroke-width="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 11C20 6.58172 16.4183 3 12 3C7.58172 3 4 6.58172 4 11" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 15.4384V13.5616C2 12.6438 2.62459 11.8439 3.51493 11.6213L5.25448 11.1864C5.63317 11.0917 6 11.3781 6 11.7685V17.2315C6 17.6219 5.63317 17.9083 5.25448 17.8136L3.51493 17.3787C2.62459 17.1561 2 16.3562 2 15.4384Z" stroke="currentColor" stroke-width="1.5"/><path d="M22 15.4384V13.5616C22 12.6438 21.3754 11.8439 20.4851 11.6213L18.7455 11.1864C18.3668 11.0917 18 11.3781 18 11.7685V17.2315C18 17.6219 18.3668 17.9083 18.7455 17.8136L20.4851 17.3787C21.3754 17.1561 22 16.3562 22 15.4384Z" stroke="currentColor" stroke-width="1.5"/><path d="M20 18V18.5C20 19.6046 19.1046 20.5 18 20.5H14.5" stroke="currentColor" stroke-width="1.5"/><path d="M13.5 22H10.5C9.67157 22 9 21.3284 9 20.5C9 19.6716 9.67157 19 10.5 19H13.5C14.3284 19 15 19.6716 15 20.5C15 21.3284 14.3284 22 13.5 22Z" stroke="currentColor" stroke-width="1.5"/></svg>
                                {choosenComponents.Headset&&<p id={style.nameComponentPicked}>{choosenComponents.Headset.name}</p>}
                            </span>
                            <span className={style.MouseContainer} onClick={()=> {history.push("/construye/paso11");  setComponent({Mouse:true}); dispatch(setStepBuildPc("/construye/paso11"))}}>
                                <img src={Mouse}/>
                                {choosenComponents.Headset&&<p id={style.nameComponentPicked}>{choosenComponents.Headset.name}</p>}
                            </span>
                            <span>
                                <svg className={!componet.KEYBOARD?style.nonActive:undefined} onClick={()=>{history.push('/construye/paso12'); setComponent({KEYBOARD:true});dispatch(setStepBuildPc('/construye/paso12'))}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16" width="32px" height="32px"><path d="M 1.5 3 C 0.675781 3 0 3.675781 0 4.5 L 0 10.5 C 0 11.324219 0.675781 12 1.5 12 L 13.5 12 C 14.324219 12 15 11.324219 15 10.5 L 15 4.5 C 15 3.675781 14.324219 3 13.5 3 Z M 1.5 4 L 13.5 4 C 13.78125 4 14 4.21875 14 4.5 L 14 10.5 C 14 10.78125 13.78125 11 13.5 11 L 1.5 11 C 1.21875 11 1 10.78125 1 10.5 L 1 4.5 C 1 4.21875 1.21875 4 1.5 4 Z M 2 5 L 2 6 L 3 6 L 3 5 Z M 4 5 L 4 6 L 5 6 L 5 5 Z M 6 5 L 6 6 L 7 6 L 7 5 Z M 8 5 L 8 6 L 9 6 L 9 5 Z M 10 5 L 10 6 L 11 6 L 11 5 Z M 12 5 L 12 6 L 13 6 L 13 5 Z M 2 7 L 2 8 L 3 8 L 3 7 Z M 4 7 L 4 8 L 5 8 L 5 7 Z M 6 7 L 6 8 L 7 8 L 7 7 Z M 8 7 L 8 8 L 9 8 L 9 7 Z M 10 7 L 10 8 L 11 8 L 11 7 Z M 12 7 L 12 8 L 13 8 L 13 7 Z M 5 9 L 5 10 L 10 10 L 10 9 Z M 2 9.007813 L 2 10.011719 L 4 10.011719 L 4 9.007813 Z M 11.015625 9.007813 L 11.015625 10.011719 L 13.015625 10.011719 L 13.015625 9.007813 Z"/></svg>
                                {choosenComponents.Headset&&<p id={style.nameComponentPicked}>{choosenComponents.Headset.name}</p>}
                            </span>
                                {/* <span onClick={()=>setMarcaStatus({intel:true})} className={marcaStatus.intel?style.span_intel_active:undefined}>
                                    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs><style> </style></defs><title>INTEL</title><rect class={marcaStatus.intel? "punto_grande_intel_active":"punto_grande_intel_inactive"} y="9.93" width="5.79" height="5.79"></rect><path class={marcaStatus.intel?"intel_active":"intel_inactive"}  d="M5.64,40.07V19.23H.15V40.07ZM42,40.28V35.17A13.19,13.19,0,0,1,40,35a2.28,2.28,0,0,1-1.29-.57,2.24,2.24,0,0,1-.57-1.24,12.26,12.26,0,0,1-.13-2V23.93h4v-4.7h-4V11.11H32.56V31.26A17.91,17.91,0,0,0,33,35.55a6,6,0,0,0,1.46,2.77,6,6,0,0,0,2.68,1.5,16,16,0,0,0,4.19.46Zm31.46-.21V9.51H68V40.07ZM27.27,21.28a8.32,8.32,0,0,0-6.39-2.47,8.12,8.12,0,0,0-3.6.8,7.73,7.73,0,0,0-2.72,2.22l-.3.39v-3H8.84V40.07H14.3V29.74c0-.13,0-.25,0-.38A6.21,6.21,0,0,1,15.76,25a4.72,4.72,0,0,1,3.48-1.48A4.45,4.45,0,0,1,22.83,25,6.12,6.12,0,0,1,24,29h0v0h0v11h5.54V28.24A9.93,9.93,0,0,0,27.27,21.28Zm37.87,8.33a11.11,11.11,0,0,0-.8-4.21A10.69,10.69,0,0,0,62.13,22a10.08,10.08,0,0,0-3.39-2.32,11.25,11.25,0,0,0-4.36-.83,10.72,10.72,0,0,0-4.23.85A11,11,0,0,0,46.71,22a11.1,11.1,0,0,0-2.32,3.44,10.72,10.72,0,0,0-.85,4.23,11,11,0,0,0,.81,4.23,10.53,10.53,0,0,0,2.25,3.44,10.72,10.72,0,0,0,3.48,2.32,11.67,11.67,0,0,0,4.47.85,11.82,11.82,0,0,0,9.27-4.09l-4-3a7.24,7.24,0,0,1-5.28,2.33,6.34,6.34,0,0,1-3.79-1.06,5.29,5.29,0,0,1-2-2.9l0-.19H65.14ZM48.81,27.7c0-1.53,1.75-4.19,5.53-4.2s5.53,2.66,5.53,4.19Z"></path><path class={ marcaStatus.intel?"puntoDeIntel_active":"puntoDeIntel_inatcive"} d="M79.84,10.75a2.13,2.13,0,0,0-1.08-1.08A1.92,1.92,0,0,0,78,9.51a1.89,1.89,0,0,0-.79.16,2.07,2.07,0,0,0-.65.44,2,2,0,0,0-.43.64,2,2,0,0,0,0,1.58,1.9,1.9,0,0,0,.43.64,2.07,2.07,0,0,0,.65.44,1.89,1.89,0,0,0,.79.16,1.92,1.92,0,0,0,.79-.16A2,2,0,0,0,79.4,13a2,2,0,0,0,.44-2.22Zm-.33,1.44a1.71,1.71,0,0,1-.89.89,1.61,1.61,0,0,1-.65.13,1.57,1.57,0,0,1-.65-.13,1.82,1.82,0,0,1-.54-.36,1.69,1.69,0,0,1-.35-1.83,1.58,1.58,0,0,1,.35-.53,1.82,1.82,0,0,1,.54-.36A1.57,1.57,0,0,1,78,9.87a1.61,1.61,0,0,1,.65.13,1.71,1.71,0,0,1,.89.89,1.69,1.69,0,0,1,0,1.3Zm-1.16-.49a.55.55,0,0,0,.39-.18.58.58,0,0,0,.16-.45.64.64,0,0,0-.2-.52.9.9,0,0,0-.62-.18h-.89v2.32h.42v-.95h.31l.58.95H79Zm-.23-.33h-.51v-.65h.51l.18,0a.31.31,0,0,1,.13.1.35.35,0,0,1,0,.36.41.41,0,0,1-.13.1Z"></path></svg>
                                </span>
                                <span onClick={()=>setMarcaStatus({amd:true})} className={marcaStatus.amd?style.span_amd_active:undefined}>
                                     <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 50" fit="" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false"><defs><style> </style></defs><title>AMD</title><path class={marcaStatus.amd?"amd_active":"amd_inactive"} d="M20.67,33.29h4.16V23.15l4.46,5h.61l4.29-5,0,10.14h4.22V16.71H34.92l-5.41,6.1-5.24-6.07h-3.6Z"></path><path class={marcaStatus.amd?"amd_active":"amd_inactive"} d="M49.15,30.16h-3.3V19.84c3.17,0,6.09-.36,7.54,2.86,1.33,2.95-.25,7.46-4.24,7.46Zm-7.46-13.4V33.28h7.2a10.39,10.39,0,0,0,6.45-2,7.48,7.48,0,0,0,2.73-5.76,8.25,8.25,0,0,0-1-4.59C55.46,17.75,52,16.72,48,16.72l-6.33,0Z"></path><path class={marcaStatus.amd?"amd_active":"amd_inactive"} d="M9.19,20.88c0,.27,2.51,6.15,2.51,6.15H6.76l2.43-6.15ZM0,33.28H4.42c.3-.63.86-2.48,1.21-3.21H13l1.3,3.21h4.42c0-.38-7.28-16.56-7.28-16.56H6.65S.15,33,0,33.28Z"></path><polygon class={marcaStatus.amd?"amd_active":"amd_inactive"} points="66.24 20.63 74.73 20.63 74.73 29.17 80 34.34 80 15.45 61.09 15.46 66.24 20.63 66.24 20.63"></polygon><polygon class={marcaStatus.amd?"amd_active":"amd_inactive"} points="60.92 27 60.86 34.55 60.86 34.55 68.43 34.55 68.43 34.55 73.83 29.1 66.27 29.1 66.27 21.7 60.92 27 60.92 27 60.92 27"></polygon></svg>                                   
                                </span> */}
                            </div>
                            
                            <div>
                                {cardsToShow && Array.isArray(cardsToShow)&& cardsToShow.map(e=><CardArmaTuPc id={e._id} key={e._id} onClick={ ()=>{moveStepHandler(1);dispatch(pickArmaTuPc(e));} } img={e.img} price={e.price} title={e.description} stock={e.quantityStock}/>)}
                                {(!Array.isArray(cardsToShow) || !cardsToShow.length) && <p id={style.noHayProductos}>NO HAY PRODUCTOS EN ESA CATEGORÍA :(</p>}
                                
                            </div>
                    </div>
                </div> 

            </div>
        </div>
    )
};


export default Construye;