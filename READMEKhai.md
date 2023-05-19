# Home page

## General flow

### Staff

After the user logs into the app, he will be directed to the home page.
Depending on the role of the user, the page will conditionally render the staff's home page or the patient's next of kin's home page.

In the staff's home page, the staff will be shown their staff ID and name. Also, their respective wards will be shown below their details. Clicking on one of these wards button, will redirect them to the respective wards. All of these are conditionally rendered as well and the page will change when the staff presses on the ward button.

### Patient's next of kin(NOK)

In the NOK's home page, the NOK will be able to see the patient's details such as the name, hospital, ward no, bed no and the staff in charge.

A verification modal will pop up when the user selects the "message staff" or the "patient's details" button. Upon entering the patient's NRIC, the user will be directed to the "message staff" or "patient's details' page.

The verification modal will no longer appear once the user has submitted the correct NRIC. As such, on going back to the NOK's home page, the user will be directed immediately to the respective pages once either button is pressed. All of these are conditionally rendered as well, and the pages will change depending on the buttons pressed and the correct NRIC submitted.

## Challenges faced

In the staff's home page, there is supposed to be an add ward button that adds a ward to the staff and the new ward will be shown in the display.

I managed to get the front end working but was not able to get it to patch to the back end.
