const BasePage = require('../core/basePage');

class AddDashboardModalPage extends BasePage {

  public modalWindow() {
    return '//div[contains(@class, "modalLayout__modal-window")]';
  }

  public modalTitle() {
    return '//span[contains(@class, "modalHeader__modal-title")';
  }

  public nameInput() {
    return '//input[contains(@class, "input") and @placeholder="Enter dashboard name"]';
  }

  public descriptionInput() {
    return '//textarea[contains(@class, "input") and @placeholder="Enter dashboard description"]';
  }

  public addButton() {
    return '//button[contains(@class, "bigButton") and text()="Add"]';
  }

  public updateButton() {
    return '//button[contains(@class, "bigButton") and text()="Update"]';
  }

  public cancelButton() {
    return '//button[contains(@class, "bigButton") and text()="Cancel"]';
  }

  public closeModalIcon() {
    return '//div[contains(@class, "modalHeader__close-modal-icon")]';
  }

  async setName(name) {
    await this.setValue(this.nameInput(), name);
  }

  async setDescription(description) {
    await this.setValue(this.descriptionInput(), description);
  }

  async clickAddButton() {
    await this.click(this.addButton());
  }

  async clickUpdateButton() {
    await this.click(this.updateButton());
  }

  async clickCancelButton() {
    await this.click(this.cancelButton());
  }

  async closeModal() {
    await this.click(this.closeModalIcon());
  }

  async isModalDisplayed() {
    const element = await this.getElement(this.modalWindow());
    expect(await element.isDisplayed()).toBe(true);
  }
}

module.exports = AddDashboardModalPage;
