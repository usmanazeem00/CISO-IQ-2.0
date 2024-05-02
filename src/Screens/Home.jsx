import React from "react";
import './Main.css'
import { BsFillArchiveFill,BsFillGrid3X3GapFill ,BsExclamationTriangleFill,BsPeopleFill,BsArrow90DegRight,BsBellFill, BsArchiveFill} from "react-icons/bs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart,Rectangle,Bar } from 'recharts';
 const Home=()=>{
    const data = [
        {
            name: '2018',
            uv: 2390,
            pv: 3800,
            amt: 2500,
          },
          {
            name: '2019',
            uv: 3490,
            pv: 4300,
            amt: 2100,
          },
        {
          name: '2020',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
            name: '2021',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
            name: '2022',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
            name: '2023',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
            name: '2024',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
      ];
      
    return(
<main className="main-container">
    <div className="main-title">
        <h3 style={{color:'#48505E'}}>Dashboard</h3>
    </div>
    <div className="main-cards">
        <div className="card">
        <div className="card-inner">
            <h3 style={{fontSize:22}}>Vulnerability Count</h3>
            <BsExclamationTriangleFill className="card_icon"/>
            <div style={{position:'absolute',bottom:20,right:10,color:'#059E14',fontSize:12}}>+33%</div>
        </div>
        <h1>3049</h1>
    </div>
    <div className="card">
        <div className="card-inner">
        <h3 style={{fontSize:22}}>Alerts</h3>
            <BsBellFill className="card_icon"/>
            <div style={{position:'absolute',bottom:20,right:10,color:'#059E14',fontSize:12}}>+33%</div>
        </div>
        <h1>3089</h1>
    </div>
    <div className="card">
        <div className="card-inner">
        <h3 style={{fontSize:22}}>Total No. of Users</h3>
            <BsPeopleFill className="card_icon"/>
            <div style={{position:'absolute',bottom:20,right:10,color:'#2684FF',textDecoration:'underline',fontSize:12}}>View More</div>
        </div>
        <h1>3089</h1>
    </div>
    <div className="card">
        <div className="card-inner">
        <h3 style={{fontSize:22}}>No. of Repositories</h3>
            <BsArchiveFill className="card_icon"/>
            <div style={{position:'absolute',bottom:20,right:10,color:'#2684FF',textDecoration:'underline',fontSize:12}}>View More</div>
        </div>
        <h1>3089</h1>
    </div>
    </div>
        <div className="charts">
        <ResponsiveContainer width="100%" height="100%" style={{backgroundColor:'white'}}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="Primary/900" activeBar={<Rectangle fill="navy" stroke="blue" />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%" style={{backgroundColor:'white'}}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
        </div>
    </main>
)
}
export default Home;