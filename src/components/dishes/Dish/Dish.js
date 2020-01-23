import React from 'react';
import {Button, ListGroupItem} from "reactstrap";
import {Link} from "react-router-dom";
import axios from "axios";

const Dish = (props) => {
    const deleteDish = async () => {
        const conf = window.confirm('Are you sure you want to remove the '+props.title+' dish?');
        if(conf) {
            await axios.delete('https://burgerapp-9e830.firebaseio.com/dishes/'+props.id+'.json');
            props.reload();
        }

    };
    return (
        <ListGroupItem className='d-flex bg-light'>
            <img src={props.img} alt="" className='w-25 border rounded mr-3'/>
            <div>
                <h2 className='text-capitalize'>{props.title}</h2>
                <b>{props.price} KGS</b>
            </div>
            <div className='d-flex flex-column ml-auto'>
                <Button color='success' className='mb-2' tag={Link} to={'/edit/' + props.id} >edit</Button>
                <Button color='danger' onClick={deleteDish}>delete</Button>
            </div>
        </ListGroupItem>
    );
};

export default Dish;