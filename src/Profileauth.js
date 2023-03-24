import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Card } from "react-bootstrap";

const Profileauth = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>

          {/* <Card style={{ width: '8rem' }}>
            <Card.Img variant="top" src={user.picture} alt="this is the profile pic" />
            <Card.Body style={{ fontSize: '10px' }}>
              <Card.Title>{user.name}</Card.Title>
              <Card.Text>
                {user.email}
              </Card.Text>
            </Card.Body>
          </Card> */}


        {/* <img className="authpic" src={user.picture} alt={user.name} /> */}
        <h5>{user.name}</h5>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default Profileauth;
