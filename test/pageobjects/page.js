export default class Page {
  constructor(path) {
    this.path = path;
  }
  get getUrl() {
    return browser.getUrl();
  }
  open() {
    browser.url(this.path);
  }
}
