import { pagination } from '../src/index.js';

describe('pagination', () => {
  it('should return array', () => {
    let data = { total: 20, perPage: 10, current: 1 };
    let paginationArray = pagination(data);

    expect(Array.isArray(paginationArray)).toBeTruthy();
  });
});

describe('separators', () => {

  it('should render without separators', () => {
    let data = { total: 20, perPage: 10, current: 1 };
    let paginationArray = pagination(data);

    paginationArray.map(item => expect(`${item.value}`).not.toMatch(`...`));
  });

  it('should render separator on start', () => {
    let data = { total: 100, perPage: 15, current: 5 };
    let paginationArray = pagination(data);

    expect(`${paginationArray[1].value}`).toMatch(`...`);
  });

  it('should render separator on end', () => {
    let data = { total: 100, perPage: 15, current: 3 };
    let paginationArray = pagination(data);
    let beforeLast = paginationArray.length - 2;

    expect(`${paginationArray[beforeLast].value}`).toMatch(`...`);
  });

  it('should render both separators', () => {
    let data = { total: 100, perPage: 10, current: 5 };
    let paginationArray = pagination(data);
    let beforeLast = paginationArray.length - 2;

    expect(`${paginationArray[1].value}`).toMatch(`...`);
    expect(`${paginationArray[beforeLast].value}`).toMatch(`...`);
  });
});
