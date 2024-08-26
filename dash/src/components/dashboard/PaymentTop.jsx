import React from 'react'
import cloud from '../images/export.svg'
import navarrow from '../images/nav-arrow.svg'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  Button,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const PaymentTop = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
        <div className="payment-history">
                <div className="payment-top"> 
                  <Popover>
                      <PopoverTrigger>
                        <button className='paybtn'>Payment</button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody>
                        <div className="drop-down-menu">
                          <a>Make Payment <img src={navarrow} alt="" /></a>
                          <a  onClick={onOpen}>Confirm Payment <img src={navarrow} alt="" /></a>
                          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                              <ModalHeader><h3 className='top-mo'>ICAN Abeokuta - Membership Payment Confirmation Portal</h3></ModalHeader>
                              <ModalCloseButton />
                              <ModalBody className='modalBody'>
                                <div className="confirm-payment">
                                  <div className="confirm-form">
                                    <h1>Payment Details</h1>
                                    <div className="confirm-inputs">
                                      <div className="confirm-input">
                                        <label htmlFor="">Payment Type</label>
                                        <input type="text" name="" id="" />
                                      </div>
                                      <div className="confirm-input">
                                        <label htmlFor="">Amount Paid</label>
                                        <input type="text" name="" id="" />
                                      </div>
                                      <div className="confirm-input">
                                        <label htmlFor="">Payment method</label>
                                        <input type="text" name="" id="" />
                                      </div>
                                      <div className="confirm-input">
                                        <label htmlFor="">Transaction ID</label>
                                        <input type="text" name="" id="" />
                                      </div>
                                      <div className="confirm-input">
                                        <label htmlFor="">Date of payment</label>
                                        <input type="text" name="" id="" />
                                      </div>
                                      <div className="confirm-input">
                                        <label htmlFor="">Upload Proof of payment</label>
                                        <input type="text" name="" id="" />
                                      </div>
                                    </div>
                                  </div>
                                  <p className='modal-p'>By submitting this form, I confirm that the above information is accurate and the payment has been made for my ICAN Abeokuta membership.</p>
                                  <div className="btns-confirm">
                                    <Button className='close-paybtn' onClick={onClose}>
                                      Cancel
                                    </Button>
                                    <Button variant='ghost'  >Submit</Button>
                                  </div>
                                </div>
                              </ModalBody>
                            </ModalContent>
                          </Modal>
                          </div>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <button><img src={cloud} alt=""/>Export</button>
                </div>
        </div>
    </>
  )
}

export default PaymentTop