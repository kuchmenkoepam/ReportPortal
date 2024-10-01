const BasePage = require('../core/basePage');

class MainMenuPage extends BasePage {
  
  public dashboardButton = '//span[text()="Dashboards"]/ancestor::a';
  public launchesButton = '//span[text()="Launches"]/ancestor::a';
  public filtersButton = '//span[text()="Filters"]/ancestor::a';
  public debugButton = '//span[text()="Debug"]/ancestor::a';
  public projectMembersButton = '//span[text()="Project members"]/ancestor::a';
  public projectSettingsButton = '//span[text()="Project settings"]/ancestor::a';

  async clickDashboard() {
    await this.click(this.dashboardButton);
  }

  async clickLaunches() {
    await this.click(this.launchesButton);
  }

  async clickFilters() {
    await this.click(this.filtersButton);
  }

  async clickDebug() {
    await this.click(this.debugButton);
  }

  async clickProjectMembers() {
    await this.click(this.projectMembersButton);
  }

  async clickProjectSettings() {
    await this.click(this.projectSettingsButton);
  }

  async isDashboardActive() {
    const isActive = await this.getAttribute(this.dashboardButton, "aria-current");
    expect(isActive).toBe("true");
  }

  async isLaunchesActive() {
    const isActive = await this.getAttribute(this.launchesButton, "aria-current");
    expect(isActive).toBe("true");
  }

  async isFiltersActive() {
    const isActive = await this.getAttribute(this.filtersButton, "aria-current");
    expect(isActive).toBe("true");
  }

  async isDebugActive() {
    const isActive = await this.getAttribute(this.debugButton, "aria-current");
    expect(isActive).toBe("true");
  }

  async isProjectMembersActive() {
    const isActive = await this.getAttribute(this.projectMembersButton, "aria-current");
    expect(isActive).toBe("true");
  }

  async isProjectSettingsActive() {
    const isActive = await this.getAttribute(this.projectSettingsButton, "aria-current");
    expect(isActive).toBe("true");
  }
}

module.exports = new MainMenuPage();
