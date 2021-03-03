import React from 'react'
import {GoFundMe} from '../components'

export const Gifts = () => {
  return (
  <div className='gifts'>
    <h1>Gifts</h1>
    <div className='separator' />
    <div className='row'>
      <div className='col-12 col-xl-6'>
        <div className='description'>
          For our wedding we won't be asking for gifts just simply that you turn up, have a great time and add some wear to your dancing shoes.
          <br></br>
          However if do feel you'd like to donate towards our honeymoon and general wedding costs then we'd appreciate anything you want to give. But there's no pressure or obligation to do.
          <br></br>
          Looking forward to seeing you all there and thanks in advance for sharing our special day with us. Lets make some memories together!
          <br></br>
          <br></br>
          Much love,
          <br></br>
          <br></br>
          <br></br>
          Rob and Lauren x
        </div>
      </div>
      <div className='col-12 col-xl-6 go-fund-me-wrapper'>
        <GoFundMe />
      </div>
    </div>
  </div>
  )
}