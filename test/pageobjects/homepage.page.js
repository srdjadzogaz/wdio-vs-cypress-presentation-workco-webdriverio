import Page from "./page";

class Homepage extends Page {
  constructor() {
    super("./");
  }
  get getSiteLogo() {
    return $(".login_logo");
  }
  get getPasswordInput() {
    return $('[data-test="password"]');
  }
  get getNameInput() {
    return $('[data-test="username"]');
  }
  get getLoginButton() {
    return $('[data-test="login-button"]');
  }
  get getAddToCart() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]')
  }
  get getUrlWithoutBase() {
      return browser.getUrl().replace(browser.options.baseUrl, '');
  }
  get getpageSlug() {
      return '/inventory.html'
  }
  get getItemFourTitle() {
      return $('#item_4_title_link');
  }
  get getCartIcon() {
      return $('#shopping_cart_container');
  }
  get getNameOfTheItem() {
      return 'Sauce Labs Backpack'
  }
  get getAddBackpackToCart() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
  get getRemoveBackpackFromCart() {
    return $('[data-test="remove-sauce-labs-backpack"]')
    }

}

export default new Homepage();
