import classNames from 'classnames';
import React from 'react'
import { useDispatch } from 'react-redux';
import { removeOrder, removeProductOrder } from '../../feachers/ordersReduser';
import { removeProduct } from '../../feachers/productsReduser';
import { ModalType } from '../../types/Modal';
import { Order } from '../../types/Order';
import { Product } from '../../types/Product';

type Props = {
  product?: Product | null,
  close: React.Dispatch<React.SetStateAction<ModalType>>,
  order?: Order | null,
}

const Modal: React.FunctionComponent<Props> = ({
  product,
  close,
  order,
}) =>  {
  const dispatch = useDispatch();

  const handlerDelete = () => {
    if (product) {
      dispatch(removeProduct(product.id));
      dispatch(removeProductOrder(product.id));
    }

    if (order) {
      dispatch(removeOrder(order.id))
    }
    
    handlerClose();
  }

  const handlerClose = () => {
    close({
      status: false,
      product: null,
      order: null,
    });
  }
console.log(order)
  return (
    <div className='modal'>
      <button
        type="button"
        className="button button__cross"
        onClick={handlerClose}
      >
        x
      </button>
      <p className="modal__title">Вы уверенны, что хотите удалить этот приход?</p>
      <div className="product">
        {product !== null && (
          <>
            <div
              className={classNames({
                'product__mark': true,
                'product__mark--free': (new Date(product?.date || '')).getTime() > Date.now(),
              })}
            />
            <img
              src={product?.photo}
              alt="product"
              className="product__img"
            />
          </>
        )}
        <div className="product__names">
          <p className="product__fullName">{
            product === null
              ? order?.title
              : product?.title
          }</p>
          {product && (
            <p className="product__id">{product.type}</p>
          )}
        </div>
      </div>

      <div className="modal__bottom">
        <button
          type="button"
          className="button button__reset"
          onClick={handlerClose}
        >
          отменить
        </button>
        <button
          type="button"
          className="button button__remove"
          onClick={handlerDelete}
        >
          удалить
        </button>
      </div>
    </div>
  )
}

export default Modal
