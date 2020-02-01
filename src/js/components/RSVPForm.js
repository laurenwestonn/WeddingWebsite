import React from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

function RSVPForm() {
  return (
    <>
    <form action="https://formspree.io/myywkgqw" method="POST" style={{
      display:'flex',
      flexDirection: 'column'
    }}>

      <input type="hidden" name="_subject" value="Wedding RSVP" />
      <label htmlFor="name">Full Name</label>
      <br></br>
      <input type="text" name="name" required style={{}}/>
      <br></br>
      <br></br>
      <label htmlFor="rsvp">Will you be attending?</label>
      <br></br>
      <input type="text" name="rsvp" required/>
      <br></br>
      <br></br>
      <label htmlFor="food">Food preference (Meat/Vegetarian/Vegan)</label>
      <br></br>
      <input type="text" name="food"/>
      <br></br>
      <br></br>
      <label htmlFor="allergies">Any allergies?</label>
      <br></br>
      <input type="text" name="allergies"/>
      <br></br>
      <br></br>
      <label htmlFor="song">What's your favourite song? We'll try to play it if you tell us!</label>
      <br></br>
      <input type="text" name="song"/>
      <br></br>
      <br></br>
      <div className="button-container">
        <input type="submit" value="Send" style={{ backgroundColor: '#dea550'}}/>
      </div>
    </form>
     <div className='information'>Any issues, please drop me an email at <a href='mailto:lauren-weston@hotmail.co.uk'>lauren-weston@hotmail.co.uk</a></div>
</>
  )
  // return (
  //   <div>
  //     <Form
  //       action={"https://formspree.io/laurenwestonn@gmail.com"}
  //       method={"POST"}
  //       onSubmit={e => e.preventDefault()}
  //       autoComplete={"off"}
  //     >
  //       <input type="hidden" name="_subject" value="Wedding RSVP" />

  //       <Form.Group controlId="formGroupName">
  //         <Form.Control
  //           name="name"
  //           required
  //           type="text"
  //           placeholder="Enter your full name"
  //         />
  //       </Form.Group>

  //       <Form.Group controlId="formGroupRsvp">
  //         <Form.Label>Will you be attending?</Form.Label>
  //         <div key={`custom-radio`} className="mb-2">
  //           <Form.Check
  //             custom
  //             label="Yes"
  //             type="radio"
  //             name="rsvp-radio"
  //             id={"yes"}
  //             value={"yes"}
  //           />
  //           <Form.Check
  //             custom
  //             label="No"
  //             type="radio"
  //             name="rsvp-radio"
  //             id={"no"}
  //             value={"no"}
  //           />
  //         </div>
  //       </Form.Group>

  //       <Form.Group controlId="formGroupFood">
  //         <Form.Label>Food preference</Form.Label>
  //         <div key={`custom-radio`} className="mb-3">
  //           <Form.Check
  //             custom
  //             label="Meat"
  //             type="radio"
  //             name="food-radio"
  //             id={`meat`}
  //             value={"meat"}
  //           />
  //           <Form.Check
  //             custom
  //             label="Vegetarian"
  //             type="radio"
  //             name="food-radio"
  //             id={`vegetarian`}
  //             value={"vegetarian"}
  //           />
  //           <Form.Check
  //             custom
  //             label="Vegan"
  //             type="radio"
  //             name="food-radio"
  //             id={`vegan`}
  //             value={"vegan"}
  //           />
  //         </div>
  //       </Form.Group>

  //       <Form.Group controlId="formGroupAllergies">
  //         <Form.Control
  //           name="allergies"
  //           type="text"
  //           placeholder="Enter any allergies"
  //         />
  //       </Form.Group>

  //       <Form.Group controlId="formGroupSong">
  //         <Form.Control
  //           name="song"
  //           type="text"
  //           placeholder="Enter your song choice"
  //         />
  //         <Form.Text className="text-muted">
  //           We'll try to make sure your song gets played!
  //         </Form.Text>
  //       </Form.Group>

  //       <div className="button-container">
  //         <Button variant="primary" type="submit">
  //           Submit
  //         </Button>
  //       </div>
  //     </Form>

  //     <div className='information'>Any issues, please drop me an email at <a href='mailto:lauren-weston@hotmail.co.uk'>lauren-weston@hotmail.co.uk</a></div>
  //   </div>
  // );
}

export default RSVPForm;
