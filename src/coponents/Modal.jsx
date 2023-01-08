import css from './modal.module.css'
export default function Modal({children, isOpen, closeModal}) {
  const handleModalContainerClick= (e)=>e.stopPropagation()
  return (
    <article className={`${css.modal} ${isOpen&& css.open}`} onClick={closeModal}>
      <div className={`${css.modalContainer}`} onClick={handleModalContainerClick}>Modal
      <button className={`${css.modalClose}`} onClick={closeModal}>x</button>
      {children}
      </div>
    </article>
  )
}
