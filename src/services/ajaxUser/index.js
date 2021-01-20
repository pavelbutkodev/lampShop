import { ajaxWrapper } from '../../helpers/ajaxWrapper';

import {urls} from '../../helpers/constant';

export const login = (data) => {
  const url = `${urls.USER}/login`;
  return ajaxWrapper({
    method: 'POST',
    url,
    data,
  });
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

