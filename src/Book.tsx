import logo from './logo.svg';
import React from 'react';
import { useState } from 'react';
function Book() {
    const [list,setList]=useState(true)
  const data = [
    { name: 'Harry Potter', genre: 'Suspense',date:'22-2-2002',description:'A good thriller',status:'Valid' },
    { name: 'The Lord of the Rings', genre: 'Fantasy',date:'22-2-2002',description:'A good thriller',status:'Valid' },
    { name: 'The Great Gatspy', genre: 'Fiction',date:'22-2-2002',description:'A good thriller',status:'Valid' },
    { name: 'Al-Chemist', genre: 'Adventure',date:'22-2-2002',description:'A good thriller',status:'Valid' },
  ];
  const [temp,setTemp]=useState(data)
  return (
    <div style={{flexGrow:1,width:'100%',fontWeight:'700',textAlign:'left',fontStyle:'Montserrat',paddingLeft:20,paddingRight:20,borderWidth:10,borderColor:'black'}}>
                <div style={{borderWidth:10,borderColor:'black',backgroundColor:'white',height:430,marginTop:90,width:800,marginLeft:430}}>
                <p style={{fontSize:24,fontStyle:'Montserrat',position:'absolute',left:490,top:100}} >Book List:</p>
        <button style={{fontSize:24,fontStyle:'Montserrat',position:'absolute',right:700,top:100,backgroundColor:'orange'}} onClick={()=>setList(!list)}>{list?'Grid View':'List View'}</button>
    <input type='text' placeholder='Search Book...' style={{ position: 'absolute', width:740,right: 700, top: 150}} onChange={(e)=>{
        const text=e.target.value;
        const s=data.filter((t)=>t.name===text)
        setTemp(s)
        if (text.length===0)
        {
            setTemp(data)
        }
    }}/>
    {list && (
        <table style={{ position: 'absolute', right: 700, top: 200, border: 'none', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <thead style={{ borderWidth: 10, borderColor: 'red', borderCollapse: 'collapse' }}>
            <tr style={{ fontSize: 24, height: 60, backgroundColor: '#ECECED54' }}>
              <th style={{ color: '#0A5DC2', width: 300, textAlign: "left", marginLeft: 20, paddingLeft: 20, paddingRight: 20 }}>BOOK NAME</th>
              <th style={{ color: '#0A5DC2', textAlign: 'center' }}>Date of Publish</th>
              <th style={{ color: '#0A5DC2', textAlign: 'center' }}>Description</th>
              <th style={{ color: '#0A5DC2', textAlign: 'center' }}>Status</th>
            </tr>
            <tr>
              <th style={{ backgroundColor: 'orange' }} />
              <th style={{ backgroundColor: 'orange' }} />
              <th style={{ backgroundColor: 'orange' }} />
              <th style={{ backgroundColor: 'orange' }} />
            </tr>
          </thead>
          <tbody style={{ borderColor: 'black', borderWidth: 1 }} >
            {temp.map((item, index) => (
              <tr key={index} style={{ justifyContent: 'space-between', backgroundColor: index % 2 === 0 ? 'white' : '#ECF1F8', fontSize: 20, textAlign: 'left', height: 60, borderColor: 'black', borderWidth: 1 }}>
                <td style={{ paddingLeft: 20, paddingRight: 20 }}>{item.name}</td>
                <td style={{ paddingLeft: 20, paddingRight: 20 }}>{item.date}</td>
                <td style={{ paddingLeft: 20, paddingRight: 20 }}>{item.description}</td>
                <td style={{ paddingLeft: 20, paddingRight: 20 }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {!list && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',position: 'absolute', right: 700, top: 200, }}>
          {data.map((item, index) => (
            <div key={index} style={{ width: '20%',borderWidth:10,borderColor:'black', marginBottom: 20, backgroundColor: index % 2 === 0 ? 'white' : '#ECF1F8', padding: 18, border: '1px solid black',flexDirection:'column',alignItems:'center'}}>
              <p style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</p>
              <p style={{ fontSize: 18 }}>{item.genre}</p>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
}

export default Book;