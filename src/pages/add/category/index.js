import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../../../components/PageBase';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function AddCategory() {
  const [categories, setCategories] = useState([]);

  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(eventInfo) {
    // const { getAttribute, value } = eventInfo.target;
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  useEffect(() => {
    console.log('hello effect');
    const URL_DB = 'http://localhost:8080/categories';

    fetch(URL_DB)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([
          ...response,
        ]);
      });
  }, [

  ]);

  return (
    <PageBase>
      <h1>
        Add Category:
        {values.name}
      </h1>
      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategories([
          ...categories, values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          type="text"
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          label="Description"
          name="description"
          value={values.description}
          onChange={handleChange}
        />
        <FormField
          type="color"
          label="Color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>
          Add
        </Button>
      </form>

      <ul>
        {categories.map((category, index) => (
          <li key={`${category}${index}`}>
            {category.name}
          </li>
        ))}

      </ul>
      <Link to="/">
        Home
      </Link>
    </PageBase>

  );
}

export default AddCategory;
