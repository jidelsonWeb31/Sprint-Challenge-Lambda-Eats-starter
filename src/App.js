import React, {useState, useEffect} from "react";
import {Route, Link} from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Form from './Form';
import Card from './Card';
import Home from './Home';


// URL OF THE API 
  const url= 'https://reqres.in/api/users'

// HOW MY FORM STARTS (BLANK)
  const initialFormValues = {
    name:'',
    size: '',
    specialInstructions: '',
    
    toppings:{
    pepperoni: false,
    sausage: false,
    olives: false,
    jalapenos: false
  },
}

// HOW MY ERRORS START (NONE)
  const initialFormErrors = {
    name:'',
    size:'',
    specialInstructions:'',
  } 

// MY ERRORS
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Name must have at least 2 characters')
      .required('Name is required!'),
  
    specialInstructions: yup
      .string()
      .min(2, 'Instructions must have at least 2 characters')
      .required('Name is required!'),

    size: yup
      .string()
      .matches(/(small|medium|large)/, 'either small medium or large')
      .required ('size is required')
  })

  const initialFormDisabled = true;





  const App = () => {

    const [order, setOrder] = useState([])
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [formDisabled, setFormDisabled] = useState(initialFormDisabled)

    // POST REQUEST
    const postOrder = pizzaOrder => {
      axios.post(url, pizzaOrder)
        .then(res => {
          setOrder([res.data, ...order])
          console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
    } 

    useEffect(() =>{
    postOrder()
    }, [])


    // IF FORM IS CHANGED WE NEED TO RUN VALIDATION
    // AND USE CHANGES TO ENABLE/DISABLE SUBMIT BUTTON
      useEffect(() => {
        formSchema.isValid(formValues)
          .then(valid => { 
            setFormDisabled(!valid)
          })
      }, [formValues])


    // ON SUBMIT
      const onSubmit = evt => {
        evt.preventDefault()
  
      const newOrder = {
        name: formValues.name,
        size: formValues.size,
        specialInstructions: formValues.specialInstructions,
        toppings: Object.keys(formValues.toppings)
        .filter(topping => formValues.toppings[topping] === true)
      }
        postOrder(newOrder)
        setFormValues(initialFormValues)
    }

    // INPUT CHANGE
      const onInputChange = evt => {
      const name = evt.target.name
      const value = evt.target.value
  
      yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
          setFormErrors({
          ...formErrors,
          [name]: '',
          })
        })
        .catch(err => {
          setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
          })
        })
        setFormValues({
          ...formValues,
          [name]:value,
        })
      }

    // CHECKBOX CHANGE
      const onCheckBoxChange = evt => {
      const checked = evt.target.checked

        setFormValues({
          ...formValues,
          toppings: checked
        })
      }
  

  return (
   <div>
     <Home />

      {
        order.map((pizzaOrder) => {
          return (
            <Card key={pizzaOrder.id} details={order} />
          )
        })
      }
   

    <Form
      values = {formValues}
      onInputChange = {onInputChange}
      onCheckBoxChange = {onCheckBoxChange}
      onSubmit = {onSubmit}
      disabled = {formDisabled}
      errors ={formErrors}
    />
   </div>
  );
};
export default App;
