import React, {useEffect, useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {getEditebleDish, inputChangeHandler} from "../../store/actions/edit";
import axios from "axios";

const Edit = (props) => {

    useEffect(() => {
        props.fetchDish(props.match.params.id)
    }, []);

    const inputChangeHandler = e => props.inputChangeHandler(e.target.name, e.target.value);

    const addChanges = async e => {
        e.preventDefault();
        const data = props.dish.dish;
        data.price = Math.abs(data.price);
      await axios.put('https://burgerapp-9e830.firebaseio.com/dishes/'+props.match.params.id+'.json', data);
      props.history.replace('/');
    };

    return props.dish && (
        <Container>
            <Form onSubmit={addChanges}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" value={props.dish.dish.title} name="title" id="title" placeholder="Add title" required onChange={inputChangeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" value={props.dish.dish.price} name="price" id="price" placeholder="Add price" className='w-25' required onChange={inputChangeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="imageLink">Image link</Label>
                    <Input type="text" value={props.dish.dish.imageLink} name="imageLink" id="imageLink" placeholder="Add image link" required onChange={inputChangeHandler} />
                </FormGroup>
                <Button>Add changes</Button>
            </Form>
        </Container>
    );
};

const mapStateToProps = state => ({
    dish: state.edit
});

const mapDispatchToProps = dispatch => ({
    fetchDish: (id) => dispatch(getEditebleDish(id)),
    inputChangeHandler: (name, value) => dispatch(inputChangeHandler(name, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);