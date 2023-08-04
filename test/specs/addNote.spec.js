const editNote = require("../screenObject/android/editNote.screen");

describe("Add Notes", () => {
  // it("skip tutorial", async () => {
  //   // await editNote.skipTutorial();
  // });

  it("add a note save and verify ", async () => {
    await editNote.addAndSaveNote("Nicasource Events", "Weekly Talks \n NsTalks \n NsMeetups");
    await driver.back();
  });

  it("delete a note save and verify ", async () => {
    const note = await editNote.firstNote.getText();

    //click on note
    await editNote.firstNote.click();

    //click more icon
    await editNote.moreIcon.click();

    //acting in list
    await editNote.deleteIcon.click();

    //accept alert
    await driver.acceptAlert();

    //click on nav icon
    await editNote.navIcon.click();

    //Validate Trash Can empty
    await editNote.trashCanItem.click();

    const trashCanItem = await editNote.firstNote.getText();

    await expect(trashCanItem).toEqual(note);
  });
});
