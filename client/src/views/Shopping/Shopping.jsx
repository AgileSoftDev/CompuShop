import { Link } from 'react-router-dom';
import styled from 'styled-components';
import compuShopLogo from "../../assets/compu-shop_logo.png"
import Form from "./ShoppingComponents/Formulario";
import ShoppingCart from './ShoppingComponents/ShoppingCart';

const Shopping = () =>{

    return(
        <>
            <ContainerShopping>
                <Header>
                    <div i>
                        <img src={compuShopLogo} alt="" />
                        <p>Ayuda</p>
                    </div>
                </Header>
                <Body>
                    <div>
                        <Formulario>
                            <div>
                                <div>
                                    <h1>Agregar Domicilio</h1>
                                </div>
                                <section>
                                    <Form/>
                                    <Continuar>
                                        <button>
                                            <span>Continuar</span>
                                        </button>
                                    </Continuar>
                                </section>
                            </div>
                        </Formulario>
                        <CartContainer>
                            <ShoppingCart/>                            
                        </CartContainer>
                    </div>
                </Body>
                <Footer>
                    <NavInfo>
                        <div>
                            <Link>Terminos y condiciones</Link>
                            <Link>Cómo cuidamos tu privacidad</Link>
                            <Link>Ayuda</Link>
                        </div>
                        <div>
                            <h2>Copyright © 2023 CompuShop Lima-Perú S.R.L.</h2>
                        </div>
                        <div>
                            <p>Latam to the world &lt;3</p>
                        </div>
                    </NavInfo>
                </Footer>
            </ContainerShopping>
        </>
    )
  
};
export default Shopping;

const ContainerShopping = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Nova+Flat&display=swap');
    width: 100%;
    min-height: 100%;
    font-family: 'Nova Flat', cursive;
    color: #333333;
    `;

const Header = styled.div`
  z-index: 10000;
  width:100%;
  height: 60px;
  background-color: #2c2c25f3;
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  img{
    height: 40px;
  };
  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    max-width: 1200px;
  }
  p{
    color: #fefefe;
    font-size: 14px;
  }
`;

const Body = styled.div`
    padding-top: 60px;
    background-color: #eeeeee;
    &>:nth-child(1){
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
`;


const Formulario = styled.div`
    position: fixed; 
    z-index: 1;
    width: 688px;
    padding: 60px 48px 60px 8px;
    &>div>div>h1{
        font-size: 25px;
        font-weight: 500;
    };
    &>div>section{
    };
  
`;

const CartContainer = styled.div`
  padding-left: 688px;
  min-height: calc(100vh - 158px);
  flex-shrink: 0;
`;

const Footer = styled.div`
    background-color: #ffffff;
    height: 80px;
    width: 100%;
    border-top: 1px solid #e6e6e6;
`;

const NavInfo = styled.div`
    max-width: 1200px;
    margin: 10px auto;
    padding: 0px 10px;
    &>:first-child{
        padding: 0 0 8px 0;
    };
    a{
        font-size: 12.5px;
        text-decoration: none;
        color: #333;
        margin: 0 20px 0 0;
        word-spacing: -0.1em;
    }
    h2{
        font-size: 12px;
        color: #999;
        font-weight: 400;
        margin-bottom: 2px;
    }
    p{
        font-size: 12px;
        font-weight: 400;
        color: #999;
    }
`;

const Continuar = styled.div`
    margin: 24px 0;
    text-align: center;
    button{
        background-color: #3483fa;
        color:#ffffff ;
        border-radius: 6px;
        padding: 0 24px;
        border-color: transparent;
        line-height: 45px;
        width: 95%;
        cursor: pointer;
        &:active{
            background-color: #1c4685;
        }
        span{
            font-size: 17px;
            font-weight: 600;
        }
    };
`;