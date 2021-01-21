import { ajaxWrapper } from '../../helpers/ajaxWrapper';

import {urls} from '../../helpers/constant';

export const login = (data) => {
  const url = `${urls.USER}/login`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  }).then(data => data.data)
};

export const registration = (data) => {
  const url = `${urls.USER}/register`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  });
};

export const getAllProduct = (data) => {
  const url = `${urls.PRODUCT}`;
  return ajaxWrapper({
    method: 'GET',
    url,
    data,
  }).then(data => data.data)
};

export const getOneProduct = (id) => {
  const url = `${urls.PRODUCT}/${id}`;
  return ajaxWrapper({
    method: 'GET',
    url,
  }).then(data => data.data)
};

export const getCartToken = (data) => {
  const url = `${urls.CART}`;
  return ajaxWrapper({
    method: 'GET',
    url,
  }).then(data => data.data)
};


export const checkOut = (data) => {
  const url = `${urls.CART}`;
  return ajaxWrapper({
    method: 'DELETE',
    url,
  }).then(data => data.data)
};

export const deleteOne = (id, total) => {
  const url = `${urls.CART}/${id}`;
  return ajaxWrapper({
    method: 'DELETE',
    url,
    data: {productId: id, total}
  }).then(data => data.data)
};

export const addOne = (id, total) => {
  const url = `${urls.CART}/${id}`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data: {productId: id, total}
  }).then(data => data.data)
};
