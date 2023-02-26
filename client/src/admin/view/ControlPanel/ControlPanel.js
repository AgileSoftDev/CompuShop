import React from 'react'
import style from './ControlPanel.module.css';
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const dataStock = [
  {
    category: "GPU",
    stock: 0
  },
  {
    category: "BOARD",
    stock: 17
  },
  {
    category: "CPU",
    stock: 0
  },
  {
    category: "CHASIS",
    stock: 18
  },
  {
    category: "RAM",
    stock: 0
  },
  {
    category: "STORAGE",
    stock: 75
  },
  {
    category: "SSD",
    stock: 23
  },
  {
    category: "FUENTE",
    stock: 37
  },
  {
    category: "motherboard",
    stock: 0
  },
  {
    category: "storage",
    stock: 0
  },
  {
    category: "PSU",
    stock: 0
  }
]

const data01 = dataStock.map(item => {
  if (item.stock > 0) {
    return {
      name: item.category,
      value: item.stock
    }
  }
})

const COLORS = [
'#FF5733',
'#C70039',
'#900C3F',
'#581845',
'#227093',
'#4CAF50',
'#FBC02D',
'#E0E0E0'];

const data = [
  {
    id: "javascript",
    label: "javascript",
    value: 263,
    color: "hsl(187, 70%, 50%)"
  },
  {
    id: "sass",
    label: "sass",
    value: 19,
    color: "hsl(0, 70%, 50%)"
  },
  {
    id: "hack",
    label: "hack",
    value: 254,
    color: "hsl(121, 70%, 50%)"
  },
  {
    id: "css",
    label: "css",
    value: 295,
    color: "hsl(117, 70%, 50%)"
  },
  {
    id: "scala",
    label: "scala",
    value: 481,
    color: "hsl(112, 70%, 50%)"
  }
]

const ControlPanel = () => {
  return (
    <div>
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
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  isAnimationActive={true}
                  data={data01}
                  outerRadius={120}
                  fill="#c2521c"
                  label
                >
                {data01.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
                </Pie>
                <Tooltip  />
              </PieChart>
            </div>
        </div>
       
    </div>
  )
}

export default ControlPanel