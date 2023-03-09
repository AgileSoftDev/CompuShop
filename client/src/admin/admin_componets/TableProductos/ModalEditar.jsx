import React, { useState } from 'react';
import swal from 'sweetalert2';
import { useFormik } from 'formik';
import axios from 'axios';
import url from "../../../utils/deploy_back.js";
import style from "./ModalEdita.module.css"

// :|

const ModalEditar = ({component,close}) => {
    const categorias = [
        'GPU',
        'CPU',
        'RAM',
        'STORAGE',
        'BOARD',
        'CHASIS',
        'FUENTE',
      ] 

  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const formik = useFormik({
    initialValues: {
        name: component.name,
        price: component.price,
        category: component.category,
        maker: component.maker,
        description: component.description,
        description_2: component.description_2,
        description_3: component.description_3,
        description_4: component.description_4,
        stock: component.stock,
        quantityStock: component.quantityStock,
    },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (values.stock === 'true') values.stock = true
        if (values.stock === 'false') values.stock = false
    
        // Validar cantidad
        if (values.stock===false && values.quantityStock>0) {
          swal.fire({
            title: 'Error',
            text: 'Por favor ingrese una cantidad válida',
            icon: 'error',
            confirmButtonText: 'Aceptar',
            allowOutsideClick: false,
            allowEnterKey: true
          });
          return;
        }
    
        // Enviar formulario
        var data = new FormData();
        data.append('img', file);
        data.append('name', values.name);
        data.append('category', values.category);
        data.append('price', values.price);
        data.append('description', values.description);
        data.append('description_2', values.description_2);
        data.append('description_3', values.description_3);
        data.append('description_4', values.description_4);
        data.append('stock', values.stock);
        data.append('quantityStock', values.quantityStock);
        await axios.post(`${url}/upload/`, data);
        console.log(data)
        swal.fire({
          title: 'Se creo el producto con éxito',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          allowOutsideClick: false,
          allowEnterKey: true
        });
      } catch (error) {
        console.error(error);
        swal.fire({
          title: 'Error al crear el producto',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Aceptar',
          timer: 3000,
          timerProgressBar: true
        });
      } finally {
        setSubmitting(false)
      }
    }
  }
);
  return (
    <>
      <div id={style.modarFormContainer}>
        <div>
          <div>Editar producto </div>
        </div>
        <div>
        <form 
            onSubmit={formik.handleSubmit} 
          >
              
              <div 
                >
                <div>
                  <div>
                    <label htmlFor="">Categoria</label>
                  </div>
                  <div>
                    <select
                        id="category"
                        name="category"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.category}
                    >
                      {
                        categorias.map(categoria => <option value={categoria}>{categoria}</option>)
                      }
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="">Marca</label>
                </div>
                <div>
                  <input 
                    type="text" 
                    id="maker"
                    name="maker"
                    onChange={formik.handleChange}
                    value={formik.values.maker}
                  />
                </div>
                <div>
                  <label htmlFor="">Nombre</label>
                </div>
                <div>
                  <input 
                    //   className={style.form_input1}
                      type="text" 
                      id="name"
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                  />
                </div>
                <div>
                  <label htmlFor="">Precio</label>
                </div>
                <div>
                  <input 
                    //   className={style.form_input1}
                    type="number" 
                    id="price"
                    name="price"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    min={1} 
                  />
                </div>
                <div>
                  <label htmlFor="">Stock</label>
                </div>
                <div>
                  <select 
                    //   className={style.form_input2}

                      id="stock"
                      name="stock"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.stock}
                  >
                    <option value={false}>No</option>
                    <option value={true}>Si</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="">Cantidad</label>
                </div>
                <div>
                  <input 
                    //   className={style.form_input2}
                      type="number" 
                      id="quantityStock"
                      name="quantityStock"
                      onChange={formik.handleChange}
                      value={formik.values.quantityStock}
                      />
                </div>
              </div>
              <div 
            //    className={style.form_item}
               >
                <div>
                  <label htmlFor="">Descripcion #1</label>
                </div>
                <div>
                  <input 
                    //   className={style.form_input2}
                  
                      id="description"
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      type="text" 
                  />
                </div>
                <div>
                  <label htmlFor="">Descripcion #2</label>
                </div>
                <div>
                  <input
                    //   className={style.form_input2}
                    
                      id="description_2"
                      name="description_2"
                      onChange={formik.handleChange}
                      value={formik.values.description_2}
                      type="text" 
                  />
                </div>
                <div>
                  <label htmlFor="">Descripcion #3</label>
                </div>
                <div>
                  <input 
                    //   className={style.form_input2}
                  
                      id="description_3"
                      name="description_3"
                      onChange={formik.handleChange}
                      value={formik.values.description_3}
                      type="text" 
                  />
                </div>
              
               
              <div>
                <label htmlFor="">Descripcion #4</label>
              </div>
              <div>
                <input 
                    // className={style.form_input2}
                 
                    id="description_4"
                    name="description_4"
                    onChange={formik.handleChange}
                    value={formik.values.description_4}
                    type="text" 
                />
              </div>
              <div>
                <label htmlFor="">Imagen</label>
              </div>
              <div>
                <input 
                    type="file" onChange={handleFileChange} />
              </div>
              <div>
              </div>
              </div>
          </form>
        </div>
        <div>
                <input type="submit" placeholder='Agregar' 
                />
            <div id={style.cerrarContainer}>
              <label variant="secondary" onClick={()=>close({})}>
              Cerrar
            </label>
            </div>

        </div>
      </div>
    </>
  );
}

export default ModalEditar;