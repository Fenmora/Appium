// const addNote = require("../../screenObject/android/addNote.screen");

// describe("Add Notes", () => {
//   it("skip tutorial", async () => {
//     await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
//     ).click();

//     await expect($('//*[@text="Add note"]')).toBeDisplayed();
//   });

//   it("add a note save and verify ", async () => {
//     await $('//*[@text="Add note"]').click();

//     await $('//*[@text="Text"]').click();

//     await expect($('//*[@text="Editing"]')).toBeDisplayed();

//     //add new Title
//     await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
//     ).setValue("Fav Anime List");

//     //add note body
//     await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
//     ).setValue("Naruto \n Onepice \nAOT");

//     //save the changes
//     await driver.back();
//     await driver.back();

//     //assertion
//     await expect(
//       $(
//         '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
//       )
//     ).toBeDisplayed();

//     await expect(
//       $(
//         '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
//       )
//     ).toHaveText("Naruto \n Onepice \nAOT");
//   });

//   it("delete a note save and verify ", async () => {
//     await driver.back();
//     //validate note title
//     const note = await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
//     ).getText();

//     //click on note
//     await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
//     ).click();

//     //click more icon
//     await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/menu_btn"]'
//     ).click();

//     //acting in list
//     await $('//*[@text="Delete"]').click();

//     //accept alert
//     await driver.acceptAlert();
//     // await $('//*[@text="Delete"]').click();

//     //click on nav icon
//     await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]'
//     ).click();

//     //Validate Trash Can empty
//     await $('//*[@text="Trash Can"]').click();

//     const trashCanItem = await $(
//       '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
//     ).getText();

//     await expect(trashCanItem).toEqual(note);
//   });
// });
