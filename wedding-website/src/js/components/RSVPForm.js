import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RSVPForm() {
  return (
    <div>
      <Form
        action={"https://formspree.io/laurenwestonn@gmail.com"}
        method={"POST"}
        onSubmit={e => e.preventDefault()}
        autocomplete={"off"}
      >
        <input type="hidden" name="_subject" value="Wedding RSVP" />

        <Form.Group controlId="formGroupName">
          <Form.Control
            name="name"
            required
            type="text"
            placeholder="Enter your full name"
          />
        </Form.Group>

        <Form.Group controlId="formGroupRsvp">
          <Form.Label>Will you be attending?</Form.Label>
          <div key={`custom-radio`} className="mb-2">
            <Form.Check
              custom
              label="Yes"
              type="radio"
              name="rsvp-radio"
              id={"yes"}
              value={"yes"}
            />
            <Form.Check
              custom
              label="No"
              type="radio"
              name="rsvp-radio"
              id={"no"}
              value={"no"}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formGroupFood">
          <Form.Label>Food preference</Form.Label>
          <div key={`custom-radio`} className="mb-3">
            <Form.Check
              custom
              label="Meat"
              type="radio"
              name="food-radio"
              id={`meat`}
              value={"meat"}
            />
            <Form.Check
              custom
              label="Vegetarian"
              type="radio"
              name="food-radio"
              id={`vegetarian`}
              value={"vegetarian"}
            />
            <Form.Check
              custom
              label="Vegan"
              type="radio"
              name="food-radio"
              id={`vegan`}
              value={"vegan"}
            />
          </div>
        </Form.Group>

        <Form.Group controlId="formGroupAllergies">
          <Form.Control
            name="allergies"
            type="text"
            placeholder="Enter any allergies"
          />
        </Form.Group>

        <Form.Group controlId="formGroupSong">
          <Form.Control
            name="song"
            type="text"
            placeholder="Enter your song choice"
          />
          <Form.Text className="text-muted">
            We'll try to make sure your song gets played!
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RSVPForm;
