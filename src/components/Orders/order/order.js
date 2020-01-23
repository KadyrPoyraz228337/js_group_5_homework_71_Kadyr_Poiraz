import React from 'react';
import {Button, ListGroupItem} from "reactstrap";
import * as axios from "axios";

const Order = (
    {orderItem, dishesPrice, id, rerequest}
) => {
    const delivery = 150;
    let total = delivery;
    const deleteOrder = async () => {
        await axios.delete('https://burgerapp-9e830.firebaseio.com/orders/'+id+'.json')
        rerequest();
    };
    return (
        <ListGroupItem className='d-flex flex-column justify-content-between'>
            <div className='d-flex w-100'>
                <div className='d-flex flex-column justify-content-between w-100'>
                    {Object.keys(orderItem).map(subOrder => {
                        total += dishesPrice[subOrder].price * orderItem[subOrder];
                        return <div className='d-flex align-items-center w-100 my-2' key={subOrder}>
                            <h5 className='m-0 p-0 w-50'>x{orderItem[subOrder]} {dishesPrice[subOrder].title}</h5>
                            <span className='font-weight-bolder'>{dishesPrice[subOrder].price * orderItem[subOrder]} KGS</span>
                        </div>
                    })}
                </div>
                <div className='w-25 pl-5'>
                    <p className='mt-2'>order total:</p>
                    <b>{total} KGS</b>
                </div>
            </div>
            <div className='d-flex'>
                <div className='d-flex align-items-center w-100 my-2'>
                    <h5 className='m-0 p-0 w-50'>Deliveri</h5>
                    <span className='font-weight-bolder'>{delivery} KGS</span>
                </div>
                <div className='w-25 pl-5'>
                    <Button onClick={() => deleteOrder(orderItem)}>Complete order</Button>
                </div>
            </div>
        </ListGroupItem>
    );
};

export default Order;