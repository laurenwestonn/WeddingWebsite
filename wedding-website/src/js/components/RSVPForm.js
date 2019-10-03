import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function submitForm (e) {
  alert ('Send: ' + e.currentTarget);
}

function RSVPForm () {
  return (
    <div>
      <form action="https://formspree.io/laurenwestonn@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Wedding RSVP" />

        <p>Full Name</p>
        <input type="text" name="name" placeholder="Enter your full name" />

        <p>Will you be attending</p>
        <div>
          <input type="radio" id="yes" name="rsvp" value="yes" />
          <label htmlFor="yes">Yes</label>
        </div>
        <div>
          <input type="radio" id="no" name="rsvp" value="no" />
          <label htmlFor="no">No</label>
        </div>

        <p>Meal preferences</p>
        <div>
          <input type="radio" id="meat" name="food" value="meat" />
          <label htmlFor="meat">Meat</label>
        </div>
        <div>
          <input type="radio" id="vegetarian" name="food" value="vegetarian" />
          <label htmlFor="vegetarian">Vegetarian</label>
        </div>
        <div>
          <input type="radio" id="vegan" name="food" value="vegan" />
          <label htmlFor="vegan">Vegan</label>
        </div>

        <p>Any allergies?</p>
        <input
          type="text"
          name="allergies"
          placeholder="Enter any allergies we should know about"
        />

        <p>Song choice</p>
        <input
          type="text"
          name="song"
          placeholder="Enter your favourite song to boogie to"
        />

        <input type="submit" value="Send" />
      </form>

      <Form onSubmit={e => submitForm (e)}>
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
    </div>
  );
}

export default RSVPForm;
