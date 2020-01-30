import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { ServicesContainer } from '../components/schedule'
import { schedule } from '../constants/schedule'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const Schedule = () => {

  return (
    <div className='schedule'>
      <h1>Schedule</h1>
    <div className='separator' />
      <Accordion defaultActiveKey="1">
        { schedule.map((session, i) => (
            <Card key={i}>
              <Accordion.Toggle as={Card.Header} eventKey={i.toString()} style={{backgroundColor: 'white'}} >
                <div className='accordion-header'>
                  <div className='row no-gutters'>
                    <div className='col'>
                      <div className='time'>
                        {session.time}
                      </div>
                    </div>
                    { session.services ?
                      <>
                        <div className='col-7 col-lg-9'>
                          <div className='name'>
                            {session.name}
                          </div>
                        </div>
                        <div className='col-1 col-lg-1'>
                          <FontAwesomeIcon icon={faChevronDown} style={{float: 'right'}} />
                        </div>
                      </>
                      :
                      <div className='col-8 col-lg-10'>
                        <div className='name'>
                          {session.name}
                        </div>
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