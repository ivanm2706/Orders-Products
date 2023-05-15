import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../app/hooks';
import { setActiveSearch } from '../../feachers/searchReduser';
import classnames from 'classnames';
import { getShortLongDate } from '../../utils/getTime';
import Modal from '../../Components/Modal/Modal';
import { Product } from '../../types/Product';
import { ModalType } from '../../types/Modal';

function Products() {
  const [valueType, setValueType] = useState('All');
  const [isModal, setIsModal] = useState<ModalType>({
    status: false,
    product: null,
    order: null,
  });
  const [isSelectType, setIsSelectType] = useState(false);
  const [isSelectSpecification, setIsSelectSpecification] = useState(false);
  const { products } = useAppSelector((state) => state.products);
  const dispatch = useDispatch();

  const visibleProducts = valueType === 'All'
    ? products
    : products.filter(product => {
      return product.type === valueType;
    });

  useEffect(() => {
    dispatch(setActiveSearch(true));
  
    return () => {
      dispatch(setActiveSearch(false));
    }
  }, [dispatch]);

  const openSelectType = () => {
    setIsSelectType(state => !state);
  }

  const openSelectSpecification = () => {
    setIsSelectSpecification(state => !state);
  }

  const handlerDelete = (product: Product) => {
    setIsModal({
      status: true,
      product: product,
      order: null,
    });
  }

  const handlerChange = (type: string) => {
    setValueType(type);
  }

  return (
    <div className="container">
      <div className="products">
        {isModal.status && (
          <>
            <div className="container__modal" />
            <Modal close={setIsModal} product={isModal.product} />
          </>
        )}
        <div className="products__header">
          <h2 className="products__title">Продукты / {products.length}</h2> 

          <p className="products__typeSelect">Тип:</p>

          <div
            className={classnames({
              'select': true,
              'select--open': isSelectType,
            })}
            onClick={openSelectType}
          >
            <div className="select__current">{valueType}</div>
            <div className="select__options">
              <div
                className="select__option"
                onClick={() => handlerChange('All')}
              >
                All
              </div>
              <div
                className="select__option"
                onClick={() => handlerChange('Type 1')}
              >
                Type 1
              </div>
              <div
                className="select__option"
                onClick={() => handlerChange('Type 2')}
              >
                Type 2
              </div>
              <div
                className="select__option"
                onClick={() => handlerChange('Type 3')}
              >
                Type 3
              </div>
            </div>
          </div>

          <p  className="products__typeSelect">Спецификация:</p>

          <div
            className={classnames({
              'select': true,
              'select--open': isSelectSpecification,
            })}
            onClick={openSelectSpecification}
          >
            <div className="select__current">All</div>
            <div className="select__options">
              <div className="select__option">All</div>
            </div>
          </div>
        </div>

        <ul className="products__list products__list--scroll">
          {visibleProducts.map(product => (
            <li
              className="product product--border products__item"
              key={product.id}
            >
              <div
                className={classnames({
                  'product__mark': true,
                  'product__mark--free': (new Date(product.date)).getTime() > Date.now(),
                })}
              />
              <img
                src="https://greentechreviews.ru/wp-content/uploads/2020/06/1-54.jpg"
                alt="product"
                className="product__img"
              />
              <div className="product__names">
                <p className="product__fullName">{product.title}</p>
                <p className="product__id">{product.type}</p>
              </div>
              <p
                className={classnames({
                  'product__status': true,
                  'product__status--free': (new Date(product.date)).getTime() > Date.now(),
                })}
              >
                {((new Date(product.date)).getTime() > Date.now()) ? 'свободен' : ' В ремонте'}
              </p>
              <div className="product__time">
                <p className="product__timeFromTo">
                  <span className="product__timeTitle">c&nbsp;&nbsp;&nbsp;</span>
                  {getShortLongDate((new Date(product.guarantee.start)), 'long')}
                </p>

                <p className="product__timeFromTo">
                  <span className="product__timeTitle">по&nbsp;</span>
                  {getShortLongDate((new Date(product.guarantee.end)), 'long')}
                </p>
              </div>
              <p className="product__used">{product.isNew === 1 ? 'Новый' : 'Б/У'}</p>
              <div className="product__price">
                <p className="product__priceUSD">{`${product.price.filter(e => e.symbol === 'USD')[0].value} $`}</p>
                {product.price.filter(e => e.symbol === 'UAH')[0]?.value && (
                  <p className="product__priceUAN">
                    {`${product.price.filter(e => e.symbol === 'UAH')[0]?.value} UAN`}
                  </p>
                )
                }
                
              </div>
              <p className="product__groupTitle">{product.specification}</p>
              <div className="product__person">
                <p className="product__personName">Христорождественский Александр</p>
              </div>
              <div className="product__order">
                <p className="product__orderName">Длинное предлинное длинючее название прихода</p>
              </div>
              <div className="product__dateOrder">
                <p className="product__shortDateOrder">{getShortLongDate((new Date(product.date)), 'short')}</p>
                <p className="product__fullDateOrder">{getShortLongDate((new Date(product.date)), 'long')}</p>
              </div>
              <button
                type="button"
                className="button button__delete"
                onClick={() => handlerDelete(product)}
              />
            </li>
          ))}
        </ul>
      </div>
      
      
    </div>
  )
}

export default Products
