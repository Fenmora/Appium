// const editNote = require("../screenObject/android/editNote.screen");

describe("Add Products to Cart", () => {

    it("The Cart badge counter should show number of selected product", async () => {
        await $('(//android.view.ViewGroup[@content-desc="store item"])[1]').click();
        await browser.pause(5000);
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await browser.pause(5000);
        await driver.back();

        await $('(//android.view.ViewGroup[@content-desc="store item"])[2]').click();
        await browser.pause(5000);
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await browser.pause(5000);
        await driver.back();

        const number = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView').getText();
        expect(parseInt(number)).toBeGreaterThan(2);
    });

    it("Should allow to remove product from the cart", async () => {

        const FirstSelection = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView').getText();

        await $('//*[@content-desc="cart badge"]').click();
        await $('//*[@text="My Cart"]').isDisplayed();
        await $$('//*[@text="Remove Item"]')[1].click();
        await browser.pause(5000);

        const currentSelection = await $('//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView').getText();
        expect(parseInt(currentSelection)).toBeLessThan(parseInt(FirstSelection));
    })

    it("Should validate required fields for checkout form", async () => {


        await $('//*[@content-desc="cart badge"]').click();
        await $('//*[@text="My Cart"]').isDisplayed();
        await browser.pause(5000);

        await $('//*[@content-desc="Proceed To Checkout button"]').click();

        await $('//*[@text="Checkout"]').isDisplayed();
        await $('//*[@content-desc="Full Name* input field"]').isDisplayed();
        await $('//*[@content-desc="Address Line 1* input field"]').isDisplayed();
        await $('//*[@content-desc="Address Line 2 input field"]').isDisplayed();
        await $('//*[@content-desc="City* input field"]').isDisplayed();
        await $('//*[@content-desc="State/Region input field"]').isDisplayed();
        await $('//*[@content-desc="Zip Code* input field"]').isDisplayed();
        await $('//*[@content-desc="Country* input field"]').isDisplayed();
        await browser.pause(5000);
    })

    it("Should validate alerts for checkout form", async () => {
        await $('//*[@content-desc="cart badge"]').click();
        await $('//*[@text="My Cart"]').isDisplayed();
        await browser.pause(1000);

        await $('//*[@content-desc="Proceed To Checkout button"]').click();
        await browser.pause(2000);
        await $('//*[@content-desc="To Payment button"]').click();

        await $('//*[@content-desc="Full Name*-error-message"]').isDisplayed();
        await $('//*[@content-desc="Address Line 1*-error-message"]').isDisplayed();
        await $('//*[@content-desc="City*-error-message"]').isDisplayed();
        await $('//*[@content-desc="Zip Code*-error-message"]').isDisplayed();
        await $('//*[@content-desc="Country*-error-message"]').isDisplayed();
        await browser.pause(5000);

    })

    it("Should allow to fill a checkout form successfully", async () => {


        await $('//*[@content-desc="cart badge"]').click();
        await $('//*[@text="My Cart"]').isDisplayed();
        await browser.pause(1000);

        await $('//*[@content-desc="Proceed To Checkout button"]').click();

        await $('//*[@text="Checkout"]').isDisplayed();
        await $('//*[@content-desc="Full Name* input field"]').setValue("Fender Mora");
        await $('//*[@content-desc="Address Line 1* input field"]').setValue("Santo domingo");
        await $('//*[@content-desc="Address Line 2 input field"]').setValue("Huddle network office");
        await $('//*[@content-desc="City* input field"]').setValue("Managua");
        await $('//*[@content-desc="State/Region input field"]').setValue("Managua");
        await $('//*[@content-desc="Zip Code* input field"]').setValue("10001");
        await $('//*[@content-desc="Country* input field"]').setValue("Nicaragua");
        await browser.pause(5000);

        await $('//*[@content-desc="To Payment button"]').click();
    })

    it.only("Should allow to fill a checkout form successfully", async () => {
        await $('(//android.view.ViewGroup[@content-desc="store item"])[1]').click();
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await driver.back();

        await $('(//android.view.ViewGroup[@content-desc="store item"])[2]').click();
        await $('//android.view.ViewGroup[@content-desc="Add To Cart button"]').click();
        await driver.back();

        await $('//*[@content-desc="cart badge"]').click();
        await $('//*[@text="My Cart"]').isDisplayed();
        await browser.pause(1000);

        await $('//*[@content-desc="Proceed To Checkout button"]').click();

        await $('//*[@text="Checkout"]').isDisplayed();
        await $('//*[@content-desc="Full Name* input field"]').setValue("Fender Mora");
        await $('//*[@content-desc="Address Line 1* input field"]').setValue("Santo domingo");
        await $('//*[@content-desc="Address Line 2 input field"]').setValue("Huddle network office");
        await $('//*[@content-desc="City* input field"]').setValue("Managua");
        await $('//*[@content-desc="State/Region input field"]').setValue("Managua");
        await $('//*[@content-desc="Zip Code* input field"]').setValue("10001");
        await $('//*[@content-desc="Country* input field"]').setValue("Nicaragua");
        // await browser.pause(5000);

        await $('//*[@content-desc="To Payment button"]').click();

        await $('//*[@content-desc="Card Number* input field"]').isDisplayed();
        await $('//*[@content-desc="Full Name* input field"]').isDisplayed();
        await $('//*[@content-desc="Expiration Date* input field"]').isDisplayed();
        await $('//*[@content-desc="Security Code* input field"]').isDisplayed();

        await $('//*[@content-desc="Card Number* input field"]').setValue("4545 4545 4545 4545");
        await $('//*[@content-desc="Full Name* input field"]').setValue("Fender Mora");
        await $('//*[@content-desc="Expiration Date* input field"]').setValue("12/23");
        await $('//*[@content-desc="Security Code* input field"]').setValue("765");

        await browser.pause(3000);

        await $('//*[@content-desc="Review Order button"]').click();
        await $('//*[@content-desc="Review Order button"]').click();


        await $('//*[@content-desc="Place Order button"]').click();
        await browser.pause(3000);

        await $('//android.view.ViewGroup[@content-desc="checkout complete screen"]').isDisplayed();
        await browser.pause(3000);

        await $('//android.view.ViewGroup[@content-desc="Continue Shopping button"]').click();
        await browser.pause(3000);

    })
});
