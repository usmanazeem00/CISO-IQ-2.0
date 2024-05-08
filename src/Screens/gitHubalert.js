import React from "react";

const GitHubAlert = ({message,icon,level}) => {
    const backgroundColor=(level)=>{
        if(level==='High')
            {
                return '#FFEEEE'
            }
       else if (level==='Low')
            {
                return '#FFFAEE'
            }
            else 
            {
                return '#E6E6EA'
            }
            
    }
    return (
        <div style={{ height: 70, backgroundColor: backgroundColor(level),display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingLeft:5 }}>
           <div style={{width:8,height:8 ,backgroundColor:'#BC0000',borderRadius:100}}/>
          {icon==='GitHub'&& <img src='/Images/gitHub.png' style={{width:36,height:36,marginLeft:10}}/> }
          {icon==='Hugging Face'&& <img src='/Images/huggingFace.png' style={{width:36,height:36,marginLeft:10}}/> }
          {icon==='GitLab'&& <img src='/Images/gitLab.png' style={{width:36,height:36,marginLeft:10}}/> }
          {icon==='BitBucket'&& <img src='/Images/bitBucket.png' style={{width:36,height:40,marginLeft:10}}/> }
            <div style={{marginLeft:11,fontSize:14,fontWeight:'400',color:'#BC0000',fontFamily:'Outfit'}}>{message}</div>
        </div>
    );
}

export default GitHubAlert;
