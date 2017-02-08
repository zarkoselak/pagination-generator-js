#PAGINATION GENERATOR

Generates pagination based on total number of elements and number of elements per page.


##Example

```javascript

import pagination from 'pagination-generator-js';

let data = {
  total: 480,
  perPage: 20,
  current: 18
};

let paginationArray = pagination(data);

// paginationArray
// [ { value: 1, isSelected: false },
//   { value: '...', isSelected: false },
//   { value: 16, isSelected: false },
//   { value: 17, isSelected: false },
//   { value: 18, isSelected: true },
//   { value: 19, isSelected: false },
//   { value: 20, isSelected: false },
//   { value: '...', isSelected: false },
//   { value: 24, isSelected: false }
// ]

```
