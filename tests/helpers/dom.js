var selectors = {
  firstColumn: 'tbody tr td:nth-child(1)',
  secondColumn: 'tbody tr td:nth-child(2)',
  allRows: 'tbody tr',
  summary: '.table-summary',
  filterString: '.filterString',
  navigationLinks: '.table-nav a',
  navigationButtons: '.table-nav button',
  theadSecondRowCells: 'thead tr:eq(1) th',
  theadSecondRowFirstColumnFilter: 'thead tr:eq(1) th:eq(0) input',
  theadSecondRowFirstColumnFilterSelect: 'thead tr:eq(1) th:eq(0) select',
  theadSecondRowSecondColumnFilter: 'thead tr:eq(1) th:eq(1) input',
  theadSecondRowSecondColumnFilterSelect: 'thead tr:eq(1) th:eq(1) select',
  theadFirstRowFirstCell: 'thead tr th:eq(0)',
  theadFirstRowFirstCellSort: 'thead tr th:eq(0) span',
  theadFirstRowSecondCell: 'thead tr th:eq(1)',
  theadFirstRowCells: 'thead tr:eq(0) th',
  tbodyFirstRowCells: 'tbody tr:eq(0) td',
  tbodyFirstColumnCells: 'tbody td:first-child',
  tbodySecondColumnCells: 'tbody td:nth-child(2)',
  tbodyAllCells: 'tbody tr td',
  columnsDropdown: '.columns-dropdown li',
  tableNavBtnLast: '.table-nav a:eq(3)',
  tableNavBtnNext: '.table-nav a:eq(2)',
  tableNavBtnBack: '.table-nav a:eq(1)',
  tableNavBtnFirst: '.table-nav a:eq(0)',
  pageSizeDropdown: 'select.changePageSize',
  expandRow: 'a.expand-row',
  collapseRow: 'a.collapse-row'
};

export {selectors};

/**
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachAsString (selector, delimiter) {
  delimiter = delimiter || '';
  return this
    .$(selector)
    .map((index, cell) => $(cell).text().trim())
    .get()
    .join(delimiter);
}

/**
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachClassAsString (selector, delimiter) {
  return getEachAttrAsString.bind(this)(selector, 'class', delimiter);
}

/**
 * @param {string} selector
 * @param {string} attr
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachAttrAsString(selector, attr, delimiter) {
  delimiter = delimiter || '';
  return this
    .$(selector)
    .map((index, cell) => ($(cell).prop(attr) + '').trim())
    .get()
    .join(delimiter);
}

/**
 * @param {string} selector
 * @param {string} [delimiter]
 * @returns {string}
 */
export function getEachValueAsString (selector, delimiter) {
  return this
    .$(selector)
    .map((index, cell) => $(cell).val())
    .get()
    .join(delimiter);
}

/**
 * @param {string} selector
 * @returns {number}
 */
export function getCount(selector) {
  return this
    .$(selector)
    .length;
}

export function nextPage() {
  this.$(selectors.tableNavBtnNext).click();
}

export function globalFilter(str) {
  this.$(selectors.filterString).val(str).change().blur();
}

export function filterFirstColumn(str) {
  this.$(selectors.theadSecondRowFirstColumnFilter).val(str).change().blur();
}

export function filterSecondColumn(str) {
  this.$(selectors.theadSecondRowSecondColumnFilter).val(str).change().blur();
}

export function filterWithSelectFirstColumn(str) {
  this.$(selectors.theadSecondRowFirstColumnFilterSelect).val(str).change();
}

export function filterWithSelectSecondColumn(str) {
  this.$(selectors.theadSecondRowSecondColumnFilterSelect).val(str).change();
}

export function sortFirstColumn() {
  this.$(selectors.theadFirstRowFirstCell).click();
}

export function sortSecondColumn() {
  this.$(selectors.theadFirstRowSecondCell).click();
}

export function changePageSize(val) {
  this.$(selectors.pageSizeDropdown).val(val).change();
}

function _columnsDropdownClick (index) {
  this.$(`${selectors.columnsDropdown}:eq(${index}) a`).click();
}

export function toggleFirstColumnVisibility() {
  _columnsDropdownClick.bind(this)(4);
}

export function toggleSecondColumnVisibility() {
  _columnsDropdownClick.bind(this)(5);
}

export function hideAllColumns() {
  _columnsDropdownClick.bind(this)(1);
}

export function showAllColumns() {
  _columnsDropdownClick.bind(this)(0);
}

function _expandRow(index) {
  this.$(`${selectors.allRows}`).not('.expand-row').eq(index).find(`${selectors.expandRow}`).click();
}

export function expandFirstRow() {
  return _expandRow.bind(this)(0);
}

export function expandSecondRow() {
  return _expandRow.bind(this)(1);
}

function _collapseRow(index) {
  this.$(`${selectors.allRows}`).not('.expand-row').eq(index).find(`${selectors.collapseRow}`).click();
}

export function collapseFirstRow() {
  return _collapseRow.bind(this)(0);
}
export function collapseSecondRow() {
  return _collapseRow.bind(this)(1);
}

function _rowIsExpanded(index) {
  return !!this.$(`${selectors.allRows}`).not('.expand-row').eq(index).find(`${selectors.collapseRow}`).length;
}

export function firstRowIsExpanded() {
  return _rowIsExpanded.bind(this)(0);
}

export function secondRowIsExpanded() {
  return _rowIsExpanded.bind(this)(1);
}

function _rowIsCollapsed(index) {
  return !!this.$(`${selectors.allRows}`).not('.expand-row').eq(index).find(`${selectors.expandRow}`).length;
}

export function firstRowIsCollapsed() {
  return _rowIsCollapsed.bind(this)(0);
}

export function secondRowIsCollapsed() {
  return _rowIsCollapsed.bind(this)(1);
}