import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../../../components/PageBase';


function AddVideo() {
    return (
      <PageBase>
        <h1>Add Video</h1>
        <Link to='/add/category'>
          Add Category
        </Link>
      </PageBase>
    )
  };

export default AddVideo;