

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import compuShopLogo from "../../assets/compu-shop_logo.png"

const Shopping = () =>{



    return(
        <>
            <ContainerShopping>
                <Header>
                    <div>
                        <img src={compuShopLogo} alt="" />
                        <p>Ayuda</p>
                    </div>
                </Header>
                <Body>
                    <div></div>
                    <div></div>
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
    /* background-color: blue; */
    width: 100%;
    min-height: 100%;
    font-family: 'Nova Flat', cursive;`;

const Header = styled.div`
  width:100%;
  height: 60px;
  background-color: #2c2c25;
  display: flex;
  align-items: center;
  justify-content: center;
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
    min-height: calc(100vh - 141px);
    width: 100%;
    /* background-color: red; */
    & :nth-child(1){
        width: 100%;
    }
`;


const Footer = styled.div`
    background-color: #ffffff;
    height: 80px;
    width: 100%;
    border-top: 1px solid #e6e6e6;
    /* background-color: yellow; */
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