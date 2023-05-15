import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import Modal from '../../Components/Modal/Modal';
import { setActiveOrder } from '../../feachers/ordersReduser';
import { setActiveSearch } from '../../feachers/searchReduser';
import { ModalType } from '../../types/Modal';
import { Order } from '../../types/Order';
import { Product } from '../../types/Product';
import { getShortLongDate } from '../../utils/getTime';

function Orders() {
  const [isModal, setIsModal] = useState<ModalType>({
    status: false,
    product: null,
    order: null,
  });
  const { orders } = useAppSelector((state) => state.orders);
  const { activeOrder, activeProducts } = useAppSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSearch(true));
  
    return () => {
      dispatch(setActiveSearch(false));
    }
  }, [dispatch])

  const hendlerDetails = (order: Order | null) => {
    dispatch(setActiveOrder(order));
  }

  const hendlerModal = (product: Product | null, order: Order | null = null) => {
    setIsModal({
      status: true,
      product: product,
      order: order,
    });
  }

  return (
    <div className='container'>
      {isModal.status && (
        <>
          <div className="container__modal" />
          <Modal order={isModal.order} close={setIsModal} product={isModal.product} />
        </>
      )}
      
      <div className="products">
        <div className="products__header">
          <button type="button" className="button button__add">+</button>
          <h2 className="products__title">Приходы / {orders.length}</h2>
        </div>

        <div className={classNames({
          'products__container': true,
          'products__container--active': activeOrder,
        })}>
          <div className="products__container-left">
            <ul className="products__list">
              {orders.map(order => (
                <li
                  className={classNames({
                    'product product--border product--orderPage': true,
                    'product--active': order.id === activeOrder?.id,
                  })}
                  key={order.id}
                >
                  <p
                    className="product__orderName product__orderName--orderPage"
                  >
                    {order.title}
                  </p>
                  <button
                    type="button"
                    className="button button__menu"
                    onClick={() => hendlerDetails(order)}
                  />
                  <div className="product__dateOrder">
                    <p className="product__shortDateOrder">
                      {order.products.length}
                    </p>
                    <p className="product__fullDateOrder">Продукта</p>
                  </div>
                  <div className="product__dateOrder">
                    <p className="product__shortDateOrder">{getShortLongDate((new Date(order.date)), 'short')}</p>
                    <p className="product__fullDateOrder">{getShortLongDate((new Date(order.date)), 'long')}</p>
                  </div>
                  <div className="product__price">
                    <p className="product__priceUSD">2 500 $</p>
                    <p className="product__priceUAN">2 500 000 UAN</p>
                  </div>
                  <button
                    type="button"
                    className="button button__delete"
                    onClick={() => hendlerModal(null, order)}
                  />
                  {activeOrder?.id === order.id  && (
                    <div className="product__arrow" />
                  )}
                </li>
              ))}
            </ul>
          </div>


          <div className="products__container-right">
            <button
              className="button button__cross"
              type="button"
              onClick={() => hendlerDetails(null)}
            >
              x
            </button>
            <h3 className="products__container-right-title">Длинное предлинное длинючее название прихода</h3>
            <button className="button button__addProduct">Добавить продукт</button>
            <ul className="products__list products__list--scroll">
              {activeProducts.map(product => (
                <li className="product product--border product--orderPage">
                  <div className="product__mark" />
                  <img
                    src={`${product.photo}`}
                    alt="product"
                    className="product__img"
                  />
                  <div className="product__names">
                    <p className="product__fullName">{product.title}</p>
                    <p className="product__id">SH....</p>
                  </div>
                  <p className="product__status">свободен</p>
                  <button
                    type="button"
                    className="button button__delete"
                    onClick={() => hendlerModal(product)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Orders
