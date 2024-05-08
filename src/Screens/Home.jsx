import React from "react";
import { BsArchiveFill, BsBellFill, BsExclamationTriangleFill, BsPeopleFill } from "react-icons/bs";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Main.css';
import ScrollView from "./ScrollBar";
import GitHubAlert from "./gitHubalert";

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
<main className="main-container" style={{fontFamily:'Outfit'}}>
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
    <div className="charts2">
    <div className="chart-container">
       <div className="container2" style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <div >Recent Alerts</div>
        <div><img src='/Images/slack.png' style={{height:20,width:94}}/></div>
       </div>
       <div class="container2" style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',padding:5,alignItems:'center'}}>
        <div className="font">All</div>
        <div className="font">Low</div>
        <div className="font">Medium</div>
        <div className="font">High</div>
       </div>
       <GitHubAlert  message={"Github’s repository was breached severely Against Lori Bryson’s account."} icon={'GitHub'} level={'High'}/>
       <GitHubAlert  message={"Hugging Face’s repository was breached severely Against Lori Bryson’s account."} icon={'Hugging Face'} level={'Low'}/>
       <GitHubAlert  message={"GitLab’s repository was breached severely Against Lori Bryson’s account."} icon={'GitLab'} level={'Medium'}/>
       <GitHubAlert  message={"BitBuckets’s repository was breached severely Against Lori Bryson’s account."} icon={'BitBucket'} level={'Medium'}/>
      <div style={{width:'100%',textAlign:'center',fontFamily:'Outfit'}}>View More</div>
    </div>
    <div class="chart-container">
      <div style={{fontSize:18,fontWeight:'700'}}>
        Top Risk Users
      </div>
        <ScrollView>
        <div style={{display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/Usman.JPG" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Usman</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
          <div style={{ display:'flex',padding:'10px 5px 10px 5px',flexDirection:'row',alignItems:'center' ,borderStyle:'solid',borderBottomWidth:1,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0}} alt="pic">
            <img src="/Images/eagle.jpg" style={{ height:36,width:36 ,borderRadius:100}} />
            <div style={{marginLeft:10}}>Martin</div>
          </div>
        </ScrollView>
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
      <ResponsiveContainer width="100%" height="100%" style={{backgroundColor:'white'}} className="abc">
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