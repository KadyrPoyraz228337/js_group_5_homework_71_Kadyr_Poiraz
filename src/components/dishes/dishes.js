import React, {useEffect} from 'react';
import {Button, Container, ListGroup} from "reactstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {getDishes} from "../../store/actions/dishes";
import Dish from "./Dish/Dish";

const Dishes = (props) => {

    useEffect(() => {
        props.fetchDishes();
    }, []);

    return props.dishes && (
        <Container className='py-3' >
            <div className='d-flex mb-3'>
                <h3>Dishes</h3>
                <Button tag={Link} to='/addNewDish' className='ml-auto' >Add new Dish</Button>
            </div>
            <div>
                <ListGroup>
                    {props.dishes.dishes && Object.keys(props.dishes.dishes).map(id => {
                        const dish = props.dishes.dishes[id];
                        return (
                            <Dish
                                {...props}
                                reload={props.fetchDishes}
                                key={id}
                                id={id}
                                title={dish.title}
                                price={dish.price}
                                img={dish.imageLink}
                            />
                        )
                    })}
                </ListGroup>
            </div>
        </Container>
    );
};

const mapStateToProps = state => ({
   dishes: state.dishes
});

const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(getDishes())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);