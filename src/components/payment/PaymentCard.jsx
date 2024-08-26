import React from 'react'
import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger
  } from '@chakra-ui/react';
  import option from '../images/more.svg';
  import upload from '../images/upload.svg';
  
  import trash from '../images/trash.svg';

const PaymentCard = ({id, invoice, date, amount, method, dueYear, status}) => {
  return (
    <>
        <div className="tablecard">
            <div className='cardleft'>
                <h3>Payment ID:</h3>
                <h3>Invoice Number:</h3>
                <h3>Date Paid:</h3>
                <h3>Amount:</h3>
                <h3>Method:</h3>
                <h3>Due Year:</h3>
                <h3>Status:</h3>
            </div>                      
            <div className='cardright'>
                <h2>{id}</h2>
                <h2>{invoice}</h2>
                <h2>{date}</h2>
                <h2>{amount}</h2>
                <h2>{method}</h2>
                <h2>{dueYear}</h2>
                <h2 className='complete'>{status}</h2>    
                <p className='optcard'>
                  <Popover>
                    <PopoverTrigger>
                      <Button>
                        <button onClick={()=>console.log("clicked")}><img src={option} alt=""/></button>        
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent  style={{width: '100%'}}>
                      <PopoverArrow />
                      <PopoverBody>
                        <div className='book-option'>
                          <button>
                            <img src={upload} alt="" />
                            <p>View Details</p>
                          </button>
                          <button className='trsh'>
                            <img src={trash} alt="" />
                            <p>Delete</p>
                          </button>
                        </div>
                        </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </p>
            </div>
        </div>
    </>
  )
}

export default PaymentCard