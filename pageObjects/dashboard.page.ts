const BasePage = require("../core/basePage");

class DashboardPage extends BasePage {
  // Селекторы для элементов страницы

  public topAddNewDashboardButton(): string {
    return '//div[contains(@class, "pageLayout__page-header")]//span[text()="Add New Dashboard"]/..';
  }

  public dashboardName(name: string): string {
    return `//a[contains(@class, "dashboardTable__name") and text()="${name}"]`;
  }

  public editDashboardButton(name: string): string {
    return `//a[contains(@class, "dashboardTable__name") and text()="${name}"]/following-sibling::div/i[contains(@class, "icon-pencil")]`;
  }

  async clickAddNewDashboard() {
    await this.click(this.topAddNewDashboardButton()); 
  }

  async clickEditDashboardButton(name:string) {
    await this.click(this.editDashboardButton(name)); 
  }

  async isDashboardNamePresent(name: string) {
    const element = await this.getElement(this.dashboardName(name))
    await element.waitForDisplayed()
    expect( await element.isDisplayed()).toBe(true);
  }
}

module.exports = new DashboardPage();
