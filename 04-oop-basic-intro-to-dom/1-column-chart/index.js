export default class ColumnChart {
  element;
  chartHeight = 50;
  elementColum = {};
  constructor({
    data = [],
    label = "",
    value = 0,
    link = "",
    formatHeading = (data) => data,
  } = {}) {
    this.data = data;
    this.label = label;
    this.value = formatHeading(value);
    this.link = link;
    this.render();
  }
  get blockColum() {
    return `<div class="column-chart column-chart_loading" style="--chart-height: ${
      this.chartHeight
    }">
      <div class="column-chart__title">
        Total ${this.label}
        ${this.getLink()}
      </div>
      ${this.getColumChartsCont()}
    </div>`;
  }
  getLink() {
    return this.link
      ? `<a class="column-chart__link" href="${this.link}">View all</a>`
      : "";
  }
  getHeader() {
    return `<div data-element="header" class="column-chart__header">${this.value}</div>`;
  }
  getBody() {
    return `<div data-element="body" class="column-chart__chart">${this.getCharts(
      this.data
    )}</div>`;
  }
  getColumChartsCont() {
    return `<div class="column-chart__container">
        ${this.getHeader()}
        ${this.getBody()}
      </div>`;
  }
  getCharts(data) {
    const maxData = Math.max(...data);
    const scale = this.chartHeight / maxData;
    return data
      .map((key) => {
        return `<div style="--value: ${Math.floor(
          key * scale
        )}" data-tooltip="${((key / maxData) * 100).toFixed(0)}%"></div>`;
      })
      .join("");
  }
  render() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.blockColum;
    this.element = wrapper.firstElementChild;

    if (this.data.length) {
      this.element.classList.remove("column-chart_loading");
    }
    this.elementColum = this.getElementColum()
  }
  getElementColum(){
   const res = {}
   const elements = this.element.querySelectorAll('[data-element]')
   for(const key of elements){
     res[key.dataset.element]=key
   }
   return res
  }
  update(data) {

   this.elementColum.body.innerHTML = this.getCharts(data);
  }
  remove() {
    if (this.element) {
      this.element.remove();
    }
  }
  destroy() {
    this.remove();
  }
}
