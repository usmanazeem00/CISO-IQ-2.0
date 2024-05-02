import { useState } from 'react';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Colors } from './Colors';
import Navbar from './navbar';
import Footer from './footer';
const PriceItem = () => {
    const [buttonText,setButtonText]=useState('Start Now')
    const [buttonText2,setButtonText2]=useState('Start Now')
    const [buttonText3,setButtonText3]=useState('Start Now')
    const [card1,setCard1]=useState(true)
    const [card2,setCard2]=useState(true)
    const [card3,setCard3]=useState(true)
    const plans = [
        {
          name: "Community Plan",
          price: "Free",
          features: [
            "Join Slack Channel",
            "Crescent Community",
            "Educational Content",
            "Free Alerts",
            "Free Product Demos",
            "Free Webinars",
            "Free Newsletter",
            "Upgrade to Paid",
            "Channel Upsell",
            "TAM Upsell"
          ],
          buttonText: "Start Now"
        },
        {
          name: "Team Plan",
          price: "$9/Month",
          features: [
            "Community Included",
            "Detection",
            "One Time $5k Fee",
            "TAM Assignment",
            "SOAR Integration",
            "EDR Integration Fee",
            "Extensions Integration",
            "Join Slack Channel",
            "Single Repository",
            "ACV = $50K/yr min"
          ],
          buttonText: "Start Now"
        },
        {
          name: "Enterprise Plan",
          price: "$49/Month",
          features: [
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel",
            "Join Slack Channel"
          ],
          buttonText: "Start Now"
        }
      ];
    const [mainColor,setMainColor]=useState('#371F6B')
    const gradientBackground = 'linear-gradient(260.1deg, #1D0158 0%, #2B1B4E 99.99%)';
    const styles={
        container:{ backgroundColor: '#371F6B', height: 'auto',marginTop:20,color:'white',borderRadius:12},
        line2:{width:'100%',textAlign:'center'},
        line1:{fontWeight:'700',marginTop:32,fontSize:24},
        big:{fontWeight:'700',fontSize:58,textAlign:'center'},
        line3:{fontSize:18,fontWeight:'500',color:'white',marginLeft:16},
        subContainer:{marginLeft:28,padding:28,margin:28,display:'flex',flexDirection:'column'},
        heading:{width:'100%',textAlign:'center',fontSize:21,fontWeight:'600',color:'white'},
        heading2:{width:'100%',textAlign:'center',fontSize:67,fontWeight:'600',color:'white'}
    }
    function PricingPlan({ plan,index }) {
        return (
          <Col md={4}>
            <div style={{backgroundColor: '#371F6B', height: 'auto',marginTop:20,color:'white',borderRadius:12}}>
              <div style={styles.subContainer}>
                <div style={styles.line1}>{plan.name}</div>
                <div>No Minimum Commitment Pause or Cancel Anytime</div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div style={styles.big}>{plan.price}</div>
                  {plan.price!='Free'&&<div style={{ fontSize: 16, fontWeight: '600' }}>Only</div>}
                </div>
                <div style={{ height: 2, backgroundColor: 'white', width: '100%' }}></div>
                {plan.features.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src='/Images/tick.png' style={{ width: 20, height: 20 }} />
                    <div style={styles.line3}>{feature}</div>
                  </div>
                ))}
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 32 }}>
                  <button style={{ width: '100%', fontSize: 20, fontWeight: '600', color: 'black', backgroundColor: 'white', borderRadius: 8 }} 
                           onMouseEnter={() => {
                            if(index==0){
                                setCard1(false)
                            setButtonText('Buy Now');}
                            else if(index==1)
                            {setCard2(false)
                                setButtonText2('Buy Now');
                            }
                            else if(index==2)
                            {
                                setCard3(false)
                                setButtonText3('Buy Now');
                            }
                          }}
                          onMouseLeave={() => {
                            if(index==0){
                                setCard1(true)
                                setButtonText('Start Now');}
                                else if(index==1)
                                {
                                    setCard2(true)
                                    setButtonText2('Start Now');
                                }
                                else if(index==2)
                                {
                                    setCard3(true)
                                    setButtonText3('Start Now');
                                }
                          }}>{index==0?buttonText:index==1?buttonText2:buttonText3}</button>
                </div>
              </div>
            </div>
          </Col>
        );
      }
  return (
    <>
    <Navbar/>
    <div style={{background: gradientBackground}}>
        <Row>
            <div style={styles.heading}>Our Pricing Plans</div>
            <div style={styles.heading2}>We’ve Got the Plan That’s{'\n'}Perfect For You</div>
        </Row>
        <Row>
    {plans.map((plan, index) => (
      <PricingPlan key={index} plan={plan}  index={index} />
    ))}
  </Row>
    </div>
    <Footer/>
    </>
  );
};

export default PriceItem;
