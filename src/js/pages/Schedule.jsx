import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { ServicesContainer } from '../components/schedule'
import { schedule } from '../constants/schedule'

export const Schedule = () => {

  return (
    <div className='schedule'>
      <h1>Schedule</h1>
      <Accordion defaultActiveKey="1">
        { schedule.map((session, i) => (
            <Card key={i}>
              <Accordion.Toggle as={Card.Header} eventKey={i.toString()}>
                <div className='accordion-header'>
                  <div className='row'>
                    <div className='col-2'>
                      {session.time}
                    </div>
                    { session.services ?
                      <>
                        <div className='col-9'>
                          {session.name}
                        </div>
                        <div className='col-1'>
                          \/
                        </div>
                      </>
                      :
                      <div className='col-10'>
                        {session.name}
                      </div>
                    }
                  </div>
                </div>
              </Accordion.Toggle>
                { session.services &&
                  <Accordion.Collapse eventKey={i.toString()}>
                    <Card.Body>
                      <ServicesContainer services={session.services}/>
                    </Card.Body>
                  </Accordion.Collapse>
                }
            </Card>
          ))
        }
      </Accordion>

    </div>
  )
}