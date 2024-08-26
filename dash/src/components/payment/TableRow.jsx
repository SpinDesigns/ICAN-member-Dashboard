import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react';
import option from '../images/dot-menu.svg';
import upload from '../images/upload.svg';

import trash from '../images/trash.svg';

const TableRow = ({id, invoice, date, amount, method, dueYear, status}) => {
    

  return (

    <tr>
        <td className="td-one">{id}</td>
        <td className="td-two">{invoice}</td>
        <td className="td-two">{date}</td>
        <td className="td-one">{amount}</td>
        <td className='td-one'>{method}</td>
        <td className='td-three'>{dueYear}</td>
        <td className="td-four">{status}</td>
        
        <td className="td-option">
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
        </td>
    </tr>
  );
};

export default TableRow;