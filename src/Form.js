import React from "react";

function Form(props){
    const {
        values,
        onInputChange,
        onCheckBoxChange,
        onSubmit,
        disabled,
        errors
    } = props

    return(
        <form>
        <div>
            <div>
            <h2>Order With This Form!</h2>
            </div>

            {/******** ERRORS ***********/}
            <div className='errors'>
            {errors.name}
            {errors.size}
            {errors.specialInstructions}
            </div>

            {/******** TEXT ***********/}
            <div>
            <label htmlFor='name'>Name:&nbsp;
            <input
                id='name'
                value = {values.name}
                onChange = {onInputChange}
                name='name'
                type='text'
            /></label>
            </div>

            <div>
                <label>Special Instructions:&nbsp;
                    <input
                        value = {values.specialInstructions}
                        onChange = {onInputChange}
                        name='specialInstructions'
                        type='text'
                    />
                </label>
            </div>

            {/******** DROPDOWN ***********/}
                <label htmlFor='size'>Size:&nbsp;
                    <select
                        id= 'size'
                        value ={values.size}
                        onChange = {onInputChange}
                        name='size'
                    >
                        <option value=''>Please choose</option>
                        <option value='small'>small</option>
                        <option value='medium'>medium</option>
                        <option value='large'>large</option>
                    </select>
                </label>

            {/******** CHECKBOXES ***********/}

                <h4>Toppings</h4>
        
                <label htmlFor='pepperoni'>Pepperoni&nbsp;
                    <input
                        checked={values.toppings.pepperoni}
                        onChange={onCheckBoxChange}
                        name='pepperoni'
                        type='checkbox'
                    />
                </label>

                <label htmlFor='sausage'>Sausage&nbsp;
                    <input
                        name='sausage'
                        type='checkbox'
                        checked={values.toppings.sausage}
                        onChange={onCheckBoxChange}
                    />
                </label>

                <label htmlFor='olives'>Olives&nbsp;
                    <input
                    name='olives'
                    type='checkbox'
                    checked={values.toppings.olives}
                    onChange={onCheckBoxChange}
                    />
                </label>

                <label htmlFor='jalapenos'>Jalapenos&nbsp;
                    <input
                        name='jalapenos'
                        type='checkbox'
                        checked={values.toppings.jalapenos}
                        onChange={onCheckBoxChange}
                    />
                </label>
        </div>
        <div>
        <button onClick={onSubmit}>Add To Order!</button>
    </div>
    </form>
)
}

export default Form;