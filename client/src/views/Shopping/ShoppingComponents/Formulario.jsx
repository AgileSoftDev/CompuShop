import styled from 'styled-components';
import { validators } from '../helpers_shopping/helpers_shopping';
import { useState } from 'react';



const Formulario = () =>{

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
      }

    return(
        <Form id='form'>
            <div id='firstChild'>
                <label className='firstLabel'>
                    <span id='firstSpan' className='spans'>Nombres y apellidos</span>
                    <div id='childTwo'>
                        <input onChange={hanldeChange} value={formStatus.name} id="name" className='inputs' />
                    </div>
                </label>
                <Aviso1>
                    <span id='avisoOne'>Tal y como figure en el DNI.</span>
                </Aviso1>
                    <SecondDiv>
                        <div id='childOneSecondDiv'>
                            <div id='childOneSecondDivChildOne'>
                                <Label2>
                                    <span id='spanLabelTwo' className='spans'>
                                        Ciudad
                                    </span>
                                    <div id='divLabelTwo'>
                                        <input  value={formStatus.city} id="city"  onChange={hanldeChange}  className='inputs'/>
                                    </div>
                                </Label2>
                                <Label2>
                                    <span id='spanLabelTwo' className='spans'>
                                        Dirección
                                    </span>
                                    <div id='divLabelTwo'>
                                        <input   value={formStatus.direction} id="direction"  onChange={hanldeChange} className='inputs' />
                                    </div>
                                </Label2>
                            </div>
                            <div></div>
                        </div>   
                    </SecondDiv>
                    <WorkOrHome>
                        <span className='spans'>
                            ¿Es tu trabajo o tu casa?
                        </span>
                        <div className='divsWorkOrHome'>
                            <OptionsHorkHome>
                                <div className='divsWorkOrHome'>
                                    <div className='divsWorkOrHome'>
                                        <input value="casa"
                                        checked={formStatus.options === 'casa'}
                                        onChange={handleOptionChange} type="radio" id="home"/>
                                    </div>
                                    <i className='iconWorkOrHome'>
                                        <svg width="14" height="15" viewBox="0 0 14 15" fill="rgba(0, 0, 0, 0.8)" xmlns="http://www.w3.org/2000/svg"><path d="M13.262 7.828L12.0873 6.82625V15H8.61539V10.2316H5.38462V15H1.85958V6.81021L0.790769 7.828L0 7.08143L7 0L14 7.08143L13.262 7.828Z" fill="#4A4A4A"></path></svg>
                                    </i>
                                    <label className='labelWorkOrHome' htmlFor='home'>
                                        <span>Casa</span>
                                    </label>
                                </div>
                                <div className='divsWorkOrHome'>
                                    <div className='divsWorkOrHome'>
                                        <input value="trabajo"
                                            checked={formStatus.options === 'trabajo'}
                                            onChange={handleOptionChange} type="radio" id="work"/>
                                    </div>
                                    <i className='iconWorkOrHome'>
                                     <svg width="14" height="13" viewBox="0 0 14 13" fill="rgba(0, 0, 0, 0.8)" xmlns="http://www.w3.org/2000/svg"><path d="M13 3.3224H10.7333V0.48388C10.7333 0.216778 10.5093 0 10.2333 0H3.76667C3.49067 0 3.26667 0.216778 3.26667 0.48388V3.3224H1C0.448 3.3224 0 3.75595 0 4.29015V12.0322C0 12.5664 0.448 13 1 13H13C13.552 13 14 12.5664 14 12.0322V4.29015C14 3.75595 13.552 3.3224 13 3.3224ZM9 3.3224H5V1.19282H9V3.3224Z" fill="#4A4A4A"></path></svg>
                                    </i>
                                    <label className='labelWorkOrHome' htmlFor='work'>
                                        <span>Trabajo</span>
                                    </label>
                                </div>
                            </OptionsHorkHome>
                        </div>
                    </WorkOrHome>
                    <div>
                        <div>
                            <NumeroTelefono>
                                <label id='labelNumeroTelefono'>
                                    <span id='spanNumeroTelefono' className='spans'>Telefono de contancto</span>
                                    <div>
                                        <input type="text" value={formStatus.phone} id="phone"  onChange={hanldeChange} className='inputs' />
                                    </div>
                                </label>                                  
                            </NumeroTelefono>
                        </div>
                        <ControlTelefono>
                            <span id='spanControlTelefono' className='spans'></span>   
                        </ControlTelefono>
                    </div>
                    <span className='spans'>Referencias adicionales de esta dirección</span>
                    <Referencias>
                        <label id='labelReferencias'>
                            <div id='divReferencias'>
                                <textarea rows="2" name="" onInput={handleAutoResize} value={formStatus.references} id="references"   onChange={hanldeChange} className='inputs' >
                                </textarea>
                            </div>
                        </label>
                    </Referencias>
            </div>
        </Form>
    )
};
export default Formulario;

const Form = styled.form`
background-color: #ffffff;
margin-top: 32px;
.inputs{
    border: none;
    outline: none;
}
.spans{
    display: block;
    font-size: 14px;
    font-weight: 400;
}

    &>#firstChild{
        padding: 32px;
        &>.firstLabel{
            width: 60%;
            display: inline-block;
            >#firstSpan{
                margin: 0 0 6px 6px;
            }
            &>#childTwo{
                height: 48px;
                display: flex;
                align-items: center;
                border-radius: 6px;
                box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
                input{
                    flex-grow: 1;
                    padding: 13px 12px;
                    height: 22px;
                }
            }
        }
    }
`;

const Aviso1 = styled.div`
    margin: 4px 0 0 6px;
    #avisoOne{
        font-size: 12px;
    }
`; 

const SecondDiv = styled.div`
  >#childOneSecondDiv{
    padding-top: 12px;
    padding-bottom: 24px;
    >#childOneSecondDivChildOne{
        display: flex;

    }
  }
`;

const Label2 = styled.label`
    padding-right: 20px;
    width: 100%;
    #divLabelTwo{
        height: 48px;
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 6px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    };
    #city , #direction{
        padding: 13px 12px;
        height: 22px;
        flex-grow: 1;
    };
    #spanLabelTwo{
        margin: 0 0 6px 6px;
    };
`;

const WorkOrHome = styled.div`
    /* background-color: red; */
`

const OptionsHorkHome = styled.div`
    display: flex;
    .divsWorkOrHome{
        display: flex;
        padding: 5px 16px 5px 0;
        align-items: center;
        div{
            padding: 9px;
            input{
                cursor: pointer;
            }
        };
        .iconWorkOrHome{
            padding: 0 9px 0 2px;
        };
        .labelWorkOrHome{
            padding-left: 2px;
            cursor: pointer;
        };
    };
`;

const NumeroTelefono = styled.div`
    padding-top: 12px;
    width: 47%;
    >#labelNumeroTelefono{
        width: auto;
        &>:nth-child(2){
        border-radius: 6px;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
        height: 48px;
        display: flex;
        align-items: center;
        input{
            padding: 13px 12px;
            height: 22px;
            flex-grow: 1;
        }
        }
        >#spanNumeroTelefono{
            margin: 0 0 6px 6px;
        };
    };
   
`

const ControlTelefono = styled.div`
    margin: 8px 0 0 6px;
    >#spanControlTelefono{
        height: 14px;
    };
`;

const Referencias = styled.div`
    padding:12px 12.6px 0 0 ;
    >#labelReferencias{
        >#divReferencias{
            display: flex;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
            border-radius: 6px;
            padding-right: 10px;
            textarea{
                height: 70px;
                flex-grow: 1;
                overflow-x: hidden;
                overflow-wrap: break-word;
                line-height: 22px;
                font-size: 16px;
                padding: 13px 12px;
                border-radius: 6px;
                border: none;
                outline: none;
                resize: none;
            }
        };
    };
`;