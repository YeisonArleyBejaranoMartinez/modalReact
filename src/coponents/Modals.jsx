import React from 'react'
import { useModal } from '../hooks/useModal'
import Modal from './Modal'



export const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1]= useModal(false);
  const [isOpenModal2, openModal2, closeModal2]= useModal(false);
  const [isOpenContact, openmodalContact, closeModalContact]= useModal(false);
  return (
    <div>
      <h3>Modales</h3>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este es el contenido  del modal 1</p>
        <img src="https://placeimg.com/400/400/animals" alt="un gato acostado" />
      </Modal>
      <button onClick={openModal2} >Modal 2</button>
      <Modal isOpen={isOpenModal2}  closeModal={closeModal2}>
        <h3>modal 2</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam optio molestias hic ipsum quam rerum et doloribus quod accusantium quo praesentium distinctio ullam, saepe eveniet laudantium sequi laboriosam recusandae totam?</p>
        <img src="https://placeimg.com/400/400/places" alt="persona caminando" />
      </Modal>
      <button onClick={openmodalContact}>Modal 3</button>
      <Modal isOpen={isOpenContact}  closeModal={closeModalContact}>
        <h3>modal 3 con formulario</h3>
        <form action="">
          <input type="text" placeholder='nombre'/>
          <input type="number" placeholder='cedula de ciudadania'/>
          <input type="password" placeholder='contraseña'/>
          <input type="range" />
          <label htmlFor="">Edad</label>
        </form>
      </Modal>

    </div>
  )
}
