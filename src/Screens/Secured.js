import React from 'react';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '2vw',
  },
  child1: {
    marginBottom: '0px',
  },
  title: {
    fontSize: '2.8vw',
    fontWeight: 400,
    fontFamily: 'Arial, Helvetica, sans-serif',
  },
  span: {
    fontSize: '4.5vw',
    fontWeight: 500,
  },
  cardBody: {
    background: 'white',
    color:'black'
  },
  cards: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2vw',
    paddingBottom: '30px',
  },
  icon: {
    backgroundColor: 'white',
    position: 'relative',
    borderRadius: '100%',
    display: 'inline-block',
    fontSize: '3vw',
  },
};

const SecuredComponent = () => {
  return (
    <>
      <section style={{ background: 'linear-gradient(260.1deg, #1D0158 0%, #2B1B4E 99.99%)',color:'white' }}>
        <div style={styles.container}>
          <p style={styles.child1}>REPOSITORIES OF DIFFERENT PLATFORMS</p>
          <h1 style={styles.title}>
            We Secured More Than <br /> <span style={styles.span}>10 K</span> <br />Repositories
          </h1>
        </div>
        <div style={{ ...styles.container, ...styles.cards }}>
          <div className="card border">
            <div style={styles.icon}>
              <i className="fa-brands fa-github" style={{ color: 'black' }}></i>
            </div>
            <div style={styles.cardBody}>
              <h3>3,678</h3>
              <p>Repositories Secured</p>
            </div>
          </div>
          <div className="card bg-white">
            <div style={styles.icon}>🤗</div>
            <div style={styles.cardBody}>
              <h3>2,100</h3>
              <p>Repositories Secured</p>
            </div>
          </div>
          <div className="card">
            <div style={styles.icon}>
              <i className="fa-brands fa-gitlab" style={{ color: '#e8c030' }}></i>
            </div>
            <div style={styles.cardBody}>
              <h3>2,500</h3>
              <p>Repositories Secured</p>
            </div>
          </div>
          <div className="card">
            <div style={styles.icon}>
              <i className="fa-brands fa-bitbucket" style={{ color: '#B197FC' }}></i>
            </div>
            <div style={styles.cardBody}>
              <h3>1,578</h3>
              <p>Repositories Secured</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecuredComponent;
