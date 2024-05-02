import React from 'react';

const WhyChooseCISOIQ = () => {
  return (
    <div style={{ 
        backgroundImage: 'url("/Images/vector.png")',
        backgroundSize: 'cover',
      }}>
      <header style={{ background:'linear-gradient(315.22deg, #1D0158 -20.08%, #4E3E70 120.46%)', padding: '5rem 0',color:'white'}}>
        <div className="container">
          <h1 className="text-center" style={{textAlign:'center',fontSize:67,fontWeight:'600'}}>Why You Should<br/>Choose CISO IQ</h1>
          <h3 style={{textAlign:'center',fontSize:20,fontWeight:'400'}}>Choose CISO IQ for cutting-edge code repository security solutions that are easy to use, backed by proven expertise, and supported by a dedicated team.</h3>
          <div className="row">
            <div className="col">
              <div style={styles.card}>
                <img src="/Images/assurance.png" alt="Assurance" style={styles.image} />
                <h5 style={styles.title}>Assurance</h5>
                <p style={styles.text}>Add Assurance To Your Version Control</p>
              </div>
            </div>
            <div className="col">
              <div style={styles.card}>
                <img src="/Images/trust.png" alt="Trust" style={styles.image} />
                <h5 style={styles.title}>Trust</h5>
                <p style={styles.text}>Build Trust in your CI/CD workflows</p>
              </div>
            </div>
            <div className="col">
              <div style={styles.card}>
                <img src="/Images/automation.png" alt="Automation" style={styles.image} />
                <h5 style={styles.title}>Automation</h5>
                <p style={styles.text}>Automate Security Workflows</p>
              </div>
            </div>
            <div className="col-sm-3">
              <div style={styles.card}>
                <img src="/Images/fastpace.png" alt="Fast Paced" style={styles.image} />
                <h5 style={styles.title}>Fast Paced</h5>
                <p style={styles.text}>Increase Velocity of SDLC</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    color: '#1D0158',
    height: '222px',
    borderRadius: '1.5rem',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
  title: {
    marginTop: '20px',
  },
  text: {
    marginTop: '-5px',
    marginBottom: '0.001rem',
  },
};

export default WhyChooseCISOIQ;
