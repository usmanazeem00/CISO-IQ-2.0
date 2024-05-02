import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const AdminPanel = () => {
  // Sample data for the chart
  const data = [
    { name: 'January', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'February', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'March', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'April', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'June', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'July', uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center' ,flexDirection:'column',alignItems:'center'}}>
      <p style={{fontSize:22,fontWeight:'bold',fontFamily:'sans-serif'}}>Analytics  Dashboard</p>
      <div style={{  }}>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId="left" />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId="right" />
        </LineChart>
      </div>
      <p style={{fontSize:16,fontWeight:'bold',fontFamily:'sans-serif',textDecoration:'underline'}}>Attack Vectors</p>
    </div>
  );
};

export default AdminPanel;
