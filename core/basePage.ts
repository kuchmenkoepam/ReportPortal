class BasePage {
  async getElement(selector) {
    return $(selector);
  }

  async open(path) {
    await browser.url(path);
  }

  async setValue(selector, value) {
    const element = await $(selector);
    await element.setValue(value);
  }

  async click(selector) {
    const element = await $(selector);
    await element.click();
  }

  async getAttribute(selector, attribute) {
    const element = await this.getElement(selector);
    return element.getAttribute(attribute);
  }
}

module.exports = BasePage;
