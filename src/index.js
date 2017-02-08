'use strict';

/**
 * Generates pagination Array
 * @param  {Object} data Object with number of total elements, elements per page and current page
 * @return {Array}      Pagination array
 */
export const generate = (data) => {
  const { total, page, selected = 1}  = data;
  const pages = Math.ceil(total/page);

  return generatePagination(pages, selected);
};


/**
 * Adds separator
 * @param {Number} selected current page
 * @param {Number} page     first or last page
 * @param {Number} offset   left or right offset from current page
 */
const addSeparator = (selected, page, offset) => {
  const separator = `...`;
  return Math.abs(page - selected) > offset ? separator : null;
}

/**
 * generates short pagination array with first 10 elements, placeholder for middElements and last element
 * @param  {Number} pages number of total pages
 * @return {Array}        pagination array
 */
const generatePagination = (pages, selected) => {
  const maxNumberOfElements = 5;
  const firstPage           = 1;
  const lastPage            = pages;
  const offset              = Math.ceil(maxNumberOfElements / 2);
  const offsetLeft          = [...Array(offset).keys()].map((value, index) => Math.abs(value - selected) <= firstPage || Math.abs(value - selected) === selected ? null : Math.abs(value - selected)).reverse();
  const offsetRight         = [...Array(offset).keys()].map((value, index) => (selected + value) >= lastPage || (selected + value) === selected ? null : (selected + value));

  let pagination = [
    firstPage,
    addSeparator(selected, firstPage, offset),
    ...offsetLeft,
    selected !== firstPage && selected !== lastPage ? selected: null,
    ...offsetRight,
    addSeparator(selected, lastPage, offset),
    lastPage
  ];

  return pagination.filter(item => item !== null)
  .map((item, index, items) => {
    return {
      page: item,
      isSelected: item === selected
    };
  });
};
