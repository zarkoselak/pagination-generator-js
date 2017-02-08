'use strict';

/**
 * Generates pagination Array
 * @param  {Object} data Object with number of total elements, elements per page and current page
 * @return {Array}      Pagination array
 */
export const pagination = (data) => {
  const { total, perPage, current = 1}  = data;
  const pages = Math.ceil(total/perPage);

  if(isNaN(total)) throw new Error('Total param should be number');
  if(isNaN(perPage)) throw new Error('perPage param should be number');

  let pagination = generatePagination(pages, current);

  return pagination;
};

/**
 * Adds separator
 * @param {Number} current current page
 * @param {Number} page     first or last page
 * @param {Number} offset   left or right offset from current page
 */
const addSeparator = (current, page, offset) => {
  const separator = `...`;
  return Math.abs(page - current) > offset ? separator : null;
}

/**
 * generates short pagination array with first 10 elements, placeholder for middElements and last element
 * @param  {Number} pages number of total pages
 * @return {Array}        pagination array
 */
const generatePagination = (pages, current) => {
  const maxNumberOfElements = 5;
  const firstPage           = 1;
  const lastPage            = pages;
  const offset              = Math.ceil(maxNumberOfElements / 2);
  const offsetLeft          = [...Array(offset).keys()].map((value, index) => Math.abs(value - current) <= firstPage || Math.abs(value - current) === current ? null : Math.abs(value - current)).reverse();
  const offsetRight         = [...Array(offset).keys()].map((value, index) => (current + value) >= lastPage || (current + value) === current ? null : (current + value));

  let pagination = [
    firstPage,
    addSeparator(current, firstPage, offset),
    ...offsetLeft,
    current !== firstPage && current !== lastPage ? current: null,
    ...offsetRight,
    addSeparator(current, lastPage, offset),
    lastPage
  ];

  return pagination.filter(item => item !== null)
  .map((item, index, items) => {
    return {
      value: item,
      isSelected: item === current
    };
  });
};
