const axe = '../../helpers/axe'.default

describe(" *** Presentation describe block test start here *** ", () => {

  it("Open website to test ->", () => {
    browser.url('https://www.saucedemo.com')
    $(".login_logo").isDisplayed();
  });

  axe

  it("Login test ->", () => {
    $('[data-test="username"]').setValue('standard_user');
    $('[data-test="password"]').setValue('secret_sauce');
    $('[data-test="login-button"]').click();
  });
  it('Add to cart test ->', () => {
    $('#item_4_title_link').click()
    expect($('[data-test="add-to-cart-sauce-labs-backpack"]')).toBeDisplayed();
    expect($('[data-test="add-to-cart-sauce-labs-backpack"]')).toHaveText('ADD TO CART');
    $('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    expect($('[data-test="remove-sauce-labs-backpack"]')).toBeDisplayed();
    expect($('[data-test="remove-sauce-labs-backpack"]')).toHaveText('REMOVE');``
    $('#shopping_cart_container').click()
    expect($('#item_4_title_link')).toHaveText('Sauce Labs Backpack')
  });
});
