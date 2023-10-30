import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const Contact = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={Contact.image} width={75} />
      <Card.Title>{Contact.firstName}{Contact.lastName}</Card.Title>
      <Card.Subtitle>{Contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{Contact.description}</Card.Text>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
Contact.propTypes = {
  Contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    // _id: PropTypes.string,
  }).isRequired,
};

export default Contact;
