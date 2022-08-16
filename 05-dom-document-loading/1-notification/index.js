export default class NotificationMessage {
  element;
  timer;
  static getNotificationMessage;
  constructor(word = "", { duration = 2000, type = "success" } = {}) {
    this.word = word;
    this.duration = duration;
    this.type = type;
    this.render();
  }
  get blockMessage() {
    return `<div class="notification ${this.type}" style="--value:${
      this.duration / 1000
    }s">
    <div class="timer"></div>
    <div class="inner-wrapper">
      <div class="notification-header">${this.type}</div>
      <div class="notification-body">
        ${this.word}
      </div>
    </div>
  </div>`;
  }
  render() {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = this.blockMessage;
    this.element = wrapper.firstElementChild;
  }
  show(parent =  document.body) {
    if (NotificationMessage.getNotificationMessage) {
      NotificationMessage.getNotificationMessage.remove();
    }
    parent.append(this.element);
    this.timer = setTimeout(() => this.remove(), this.duration);
    NotificationMessage.getNotificationMessage = this;
  }
  remove() {
    clearTimeout(this.timer);
    if (this.element) {
      this.element.remove();
    }
  }
  destroy() {
    this.remove();
    this.element = null;
    NotificationMessage.getNotificationMessage = null;
  }
}
