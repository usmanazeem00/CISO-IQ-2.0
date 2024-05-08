import React from 'react';

class ScrollView extends React.Component {
  render() {
    return (
      <div style={{ overflowY: 'scroll', height: '400px', border: '1px solid #ccc', padding: '10px', scrollbarWidth: 'thin',
      scrollbarColor: '#888 transparent', }}>
        {this.props.children}
        <div style={{textAlign:'center',fontFamily:'Outfit',color:'#2684FF'}}>View More</div>
      </div>
    );
  }
}

export default ScrollView;
