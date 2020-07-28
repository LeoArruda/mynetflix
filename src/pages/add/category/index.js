import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../../../components/PageBase';


function AddCategory() {
    return (
      <PageBase>
        <h1>Add Category</h1>
        <Link to='/'>
          Home
        </Link>
      </PageBase>
    )
  };

export default AddCategory;