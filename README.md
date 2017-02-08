#PAGINATION GENERATOR

Generates pagination based on total number of elements and number of elements per page.


##Example

```javascript

import pagination from 'pagination-generator-js';

let data = {
  total: 480,
  page: 20,
  selected: 18
};

let paginationArray = pagination(data);

// [ { page: 1, isSelected: false },
//   { page: '...', isSelected: false },
//   { page: 16, isSelected: false },
//   { page: 17, isSelected: false },
//   { page: 18, isSelected: true },
//   { page: 19, isSelected: false },
//   { page: 20, isSelected: false },
//   { page: '...', isSelected: false },
//   { page: 24, isSelected: false }
// ]

```
