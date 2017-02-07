'use strict';

/**
 * Generate pagination Array
 * @param  {Object} data Object with number of total elements and elements per page
 * @return {Array}      Pagination array
 */
export const generate = (data) => {
  const { total, page }           = data;
  const maxPagesForFullPagination = 10
  const pages                     = Math.ceil(total/page);

  let pagination = [];

  if(pages < maxPagesForFullPagination) {
    pagination = generateFullPagination(pages);
  } else {
    pagination = generateShortPagination(pages);
  }
  return pagination;
};

/**
 * generates full pagination array
 * @param  {Number} pages number of total pages
 * @return {Array}       pagination array
 */
const generateFullPagination = (pages) => {
  return Array.from({length: pages}, (v,i) => i+1);
};

/**
 * generates short pagination array with first 10 elements, placeholder for middElements and last element
 * @param  {Number} pages number of total pages
 * @return {Array}        pagination array
 */
const generateShortPagination = (pages) => {
  const maxNumberOfElements = 10;

  let pagination = [];
  let startElements = Array.from({length: maxNumberOfElements}, (v,i) => i+1);
  let middElements  = `...`;
  let lastElement   = [pages];

  return [...startElements, middElements, ...lastElement];
};
