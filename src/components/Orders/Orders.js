import React, {useEffect} from 'react';
import {Container, ListGroup} from "reactstrap";
import {connect} from "react-redux";
import {deleteOrder, getDishesPrice, getOrders} from "../../store/actions/orders";
import Order from "./order/order";

const Orders = (props) => {
    const getData = async () => {
        await props.fetchOrders();
        await props.fetchDishes();
    }

    useEffect(() => {
        getData();
    }, []);
    return !!props.price && (
        <Container className='pt-3'>
            <ListGroup>
                {Object.keys(props.orders).map(order => {
                    return (
                        <Order
                            key={order}
                            id={order}
                            orderItem={props.orders[order]}
                            dishesPrice={props.price}
                            rerequest={getData}
                            {...props}
                        />
                    )
                 })}
            </ListGroup>
        </Container>
    );
};

const mapStateToProps = state => ({
    orders: state.orders.orders,
    price: state.orders.dishesPrice
});

const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(getOrders()),
    fetchDishes: () => dispatch(getDishesPrice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);