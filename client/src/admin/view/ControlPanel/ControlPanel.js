import React, { useEffect, useState } from 'react'
import style from './ControlPanel.module.css';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import axios, { all } from 'axios';
import url from "../../../utils/deploy_back.js";


const COLORS = [
'#FF5733',
'#C70039',
'#900C3F',
'#581845',
'#227093',
'#4CAF50',
'#FBC02D',
'#E0E0E0',
'#FF80AB',
'#9C27B0',
'#0D47A1',
"#ADD8E6",
"#FFE5B4"];

const ControlPanel = () => {
  

  const [allDataStock, setAllDataStock] = useState([])

const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getDataStock =async()=>{
        const {data} = await axios.get(`${url}/components/stock/all`).catch(error => alert("Error en la tabla productos de admin al obtener la data"));
        if (data.length) {
            const dataFilter = data?.map(item => {
              if (item.stock > 0) {
                return {
                  name: item.category,
                  value: item.stock
                }
              }
            })
            setAllDataStock(dataFilter)
            setLoading(false)
        }
    }
    getDataStock()
}, [])
  
useEffect(() => {
  console.log(allDataStock);
}, [allDataStock])

  return (
    <div>
              {
            loading ? <div class={style.loader}></div> : undefined
        }
        <div className={style.card}>
            <h1>Control Panel</h1>
            <div className={style.card_header}>
            <p>
                Vea los datos de su organizacion en una forma simplificada.
            </p>

            </div>
        </div>

        <div className={style.card}>
            <div className={style.card_header}>
              <h1>Stock</h1>
            </div>
            <div className={style.card_body}>
            <div className={style.gridContainer}>
              <div className={style.column}>
                <PieChart width={400} height={400}>
                  <Pie
                    dataKey="value"
                    isAnimationActive={true}
                    data={allDataStock && allDataStock}
                    outerRadius={120}
                    fill="#c2521c"
                    label
                  >
                  {allDataStock && allDataStock?.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                  </Pie>
                  <Tooltip  />
                </PieChart>
              </div>
              <div className={style.column} style={{marginLeft: '80px', marginTop: '70px'}}>
                <ul style={{listStyle: 'none'}}>
                  {
                    allDataStock?.map((item,index) => 
                      <li style={{textDecoration: 'none'}}>
                        <span className={style.cuadraditoColor} style={{backgroundColor: COLORS[index]}}>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span style={{paddingRight: '20px'}}>{item.name}</span>
                      </li>
                    )
                  }
                </ul>
              </div>
            </div>
            </div>
        </div>
       
    </div>
  )
}

export default ControlPanel