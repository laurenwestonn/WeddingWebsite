import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function submitForm(e) {
  alert("Send: " + e.currentTarget);
}

function RSVPForm() {
  return (
    <Form onSubmit={e => submitForm(e)}>
      <Form.Group controlId="formGroupName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="formGroupAttendance">
        <Form.Label>Will you be attending?</Form.Label>
        <div key={`custom-inline-radio`} className="mb-2">
          <Form.Check
            custom
            label="Yes"
            type="radio"
            name="attendance-radio"
            id={`inline-radio-yes`}
          />
          <Form.Check
            custom
            label="No"
            type="radio"
            name="attendance-radio"
            id={`inline-radio-no`}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="formGroupMeal">
        <Form.Label>Food preference</Form.Label>
        <div key={`custom-radio`} className="mb-3">
          <Form.Check
            custom
            label="Meat"
            type="radio"
            name="food-radio"
            id={`radio-meat`}
          />
          <Form.Check
            custom
            label="Vegetarian"
            type="radio"
            name="food-radio"
            id={`radio-vegetarian`}
          />
          <Form.Check
            custom
            label="Vegan"
            type="radio"
            name="food-radio"
            id={`radio-vegan`}
          />
        </div>
      </Form.Group>

      <Form.Group controlId="formGroupAllergies">
        <Form.Label>Any allergies?</Form.Label>
        <Form.Control type="text" placeholder="Enter any allergies" />
      </Form.Group>

      <Form.Group controlId="formGroupSong">
        <Form.Label>Song choice</Form.Label>
        <Form.Control type="text" placeholder="Enter your song choice" />
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
