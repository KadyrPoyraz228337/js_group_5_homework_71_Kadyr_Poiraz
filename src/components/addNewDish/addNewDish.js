import React, {useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import {addNewDish} from "../../store/actions/addNewDish";

const AddNewDish = props => {
    const initialState = {
        title: '',
        price: '',
        imageLink: '',
    };

    const [inputsValues, setInputsValues] = useState(initialState);

    const inputChangeHandler = e => setInputsValues({...inputsValues,[e.target.name]: e.target.value});

    const onSubmit = async e => {
        e.preventDefault();
        const state = inputsValues;
        state.price = Math.abs(state.price)+'';
        await props.addNewDish(state);
        props.history.replace('/');
    };

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Add title" required onChange={inputChangeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" name="price" id="price" placeholder="Add price" className='w-25' required onChange={inputChangeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label for="imageLink">Image link</Label>
                    <Input type="text" name="imageLink" id="imageLink" placeholder="Add image link" required onChange={inputChangeHandler} />
                </FormGroup>
                <Button>Add new dish</Button>
            </Form>
        </Container>
    );
};

const mapDispatchToProps = dispatch => ({
  addNewDish: data => dispatch(addNewDish(data))
});

export default connect(null, mapDispatchToProps)(AddNewDish);