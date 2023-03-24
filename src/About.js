import React from 'react';
import "./about.css";
import Figure from "react-bootstrap/Figure";


class About extends React.Component {

  render() {

    return (
      <>

        <Figure classname="">

          <Figure.Image
            className="figimage"
            width={171}
            height={180}
            alt="171x180"
            src={require('./assets/joe.jpg')}
          />
          <Figure.Caption id='figCap'>
          My name is Joe Davitt. I am a Marine Corps Veteran with a background in Networking. Over the past few years I have been an Excavation Foreman and am currently studying to become a Software Developer. My past careers have given me experience in problem solving and I am excited to be able to apply these skills in the tech world.
          </Figure.Caption>
        </Figure >
        <Figure classname="">
          <Figure.Image
            className="figimage"
            width={171}
            height={180}
            alt="171x180"
            src={require('./assets/tre.jpg')}
          />
          <Figure.Caption id='figCap'>
          Full Stack Javascript Developer with background a in IT ranging from system administration to security engineering. Enjoys handling difficult task and supporting end users while creating small solutions for bigger problems. Now I look to combine all of my experience in my current journey into my next role.
          </Figure.Caption>
        </Figure>
        <Figure classname="">
          <Figure.Image
            className="figimage"
            width={171}
            height={180}
            alt="171x180"
            src={require('./assets/yen.png')}
          />
          <Figure.Caption id='figCap'>
          I am Yen Xiong Yuan, a software developer who speaks both Chinese and English. I have a passion for software development and enjoy solving problems.
          </Figure.Caption>
        </Figure>
        <Figure classname="">
          <Figure.Image
            className="figimage"
            width={171}
            height={180}
            alt="171x180"
            src={require('./assets/marlon.jpg')}
          />
          <Figure.Caption id='figCap'>
          Web developer with proven experience and performance in linking corporate vision with the delivery of desired results through empowerment, development, and utilization of people, processes, and technology with technical. By using technologies such as Javascript and the MERN stack I bring people and businesses closer. It is my belief that the more positivity we can bring into people’s lives, the greater of an impact it can make on their community.
          </Figure.Caption>
        </Figure>
        <Figure classname="">
          <Figure.Image
            className="figimage"
            width={171}
            height={180}
            alt="171x180"
            src={require('./assets/dutch.jpg')}
          />
          <Figure.Caption id='figCap'>
          My name is Dutch (yes it's my real name), I am a Full-stack software development student and a US NAVY Veteran. I am looking for a company that offers both an innovative and challenging environment, while fostering, and cultivating my personal growth and development ensuring a history of successful project delivery.
          </Figure.Caption>
        </Figure>
      </>
    );
  }
}

export default About;