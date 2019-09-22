import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RSVPForm() {
  return (
    <Form>
      <Form.Group controlId="formGroupName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="formGroupAttendance">
        <Form.Label>Will you be attending?</Form.Label>
        <Form.Check inline label="Yes" type="radio" id={`inline-radio-yes`} />
        <Form.Check inline label="No" type="radio" id={`inline-radio-no`} />
      </Form.Group>

      <Form.Group controlId="formGroupMeal">
        <Form.Label>Food preference</Form.Label>
        <Form.Check inline label="Meat" type="radio" id={`inline-radio-yes`} />
        <Form.Check
          inline
          label="Vegetarian"
          type="radio"
          id={`inline-radio-no`}
        />
        <Form.Check inline label="Vegan" type="radio" id={`inline-radio-no`} />
      </Form.Group>

      <Form.Group controlId="formGroupAllergies">
        <Form.Label>Any allergies?</Form.Label>
        <Form.Control
          type="text"
          placeholder="Let us know if you have any allergies"
        />
      </Form.Group>

      <Form.Group controlId="formGroupSong">
        <Form.Label>Song choice</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">
          We'll try to make sure your song gets played!
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default RSVPForm;
