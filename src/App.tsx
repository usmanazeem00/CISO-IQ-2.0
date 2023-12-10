import logo from './logo.svg';
import React from 'react';

function App() {
  const data = [
    { name: 'Usman', cnic: '33333-000000-5' },
    { name: 'Zaid', cnic: '53333-000000-5' },
    { name: 'Usama', cnic: '63333-000000-5' },
    { name: 'Umar', cnic: '30000-000000-5' },
    { name: 'Malik', cnic: '30000-000000-5' },
    { name: 'Babar', cnic: '30000-000000-5' },
  ];
  return (
    <div style={{flexGrow:1,width:'100%',fontWeight:'700',textAlign:'left',fontStyle:'Montserrat',paddingLeft:20,paddingRight:20}}>
      <table style={{ position: 'absolute', right: 700, top: 200, border: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
    <thead style={{borderWidth:10,borderColor:'red',borderCollapse:'collapse'}}>
      <tr style={{fontSize:24 ,height:60,backgroundColor:'#ECECED54'}}>
        <th style={{color:'#0A5DC2',width:300,textAlign:"left",marginLeft:20,paddingLeft:20,paddingRight:20}}>USER NAME</th>
        <th style={{color:'#0A5DC2',textAlign:'center'}}>USER CNIC</th>
      </tr>
      <tr >

      <th style={{backgroundColor:'orange'}}/>
      <th style={{backgroundColor:'orange'}}/>
      </tr>
    </thead>
    <tbody style={{borderColor:'black',borderWidth:1}} >
    {data.map((item, index) => (
            <tr key={index} style={{ justifyContent: 'space-between', backgroundColor: index % 2 === 0 ? 'white' : '#ECF1F8', fontSize: 20, textAlign: 'left', height: 60, borderColor: 'black', borderWidth: 1 }}>
              <td style={{ paddingLeft: 20, paddingRight: 20 }}>{item.name}</td>
              <td style={{ paddingLeft: 20, paddingRight: 20 }}>{item.cnic}</td>
            </tr>
          ))}
     
    </tbody>
    </table>
    </div>
  );
}

export default App;
