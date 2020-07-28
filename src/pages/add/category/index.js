import React from 'react';
import { Link } from 'react-router-dom';
import PageBase from '../../../components/PageBase';


function AddCategory() {
    return (
      <PageBase>
        <h1>Add Category</h1>
        <form>
          <label>
            Nome da Categoria:
            <input
              type="text"
            />
          </label>

          <button>
            Cadastrar
          </button>
        </form>
        <Link to='/'>
          Home
        </Link>
      </PageBase>

    )
  };

export default AddCategory;