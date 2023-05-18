## technologies used

MongoDB, Express, React, Node.js  
[MUI](https://mui.com/) was used for styling some components.

## installation instructions

run `npm i`  
We used a local database, but have provided .JSON files of all the required collections.  
The JSON files are found in [the backend repository's databases folder](https://github.com/sei43-healthconnect/backend/tree/main/databases) and will need to be manually added to your local database for the site to work.

## user stories, solutions & unsolved problems

<!-- (only chat part) -->

**Nurses/ Staff** want:

> 1. to chat with various patient's contact(s) in a single chat SO THAT communication between the group of staff and group of patient contacts is clear to individual staff members.  
>    ✅ Chat is tied to patient ID, and all related staff can access and send messages in the chat.  
>    ✅ All messages in the chat that are not sent by the current user have names on them.  
>    ❌ The staff information in the header does not dynamically update with the current nurse in charge. We found it hard to update the name based on nurse shifts, and couldn't find a workaround for this.

> 2. to know if a message that has been sent to patient's contact(s) has been read SO THAT they can feel at ease even if there is no reply.  
>    ✅ Every message comes with a 'read' checkbox next to their time stamp, and the state is saved in the database. Thus, every user can see if specific messages are read or not. To mark a message as read, a user will need to check the checkbox of the message directly - just being on the page does not mark the message as read. This helps communicate acknowledgement between parties with little effort.
>    ✅ Users are also not allowed to send messages in the chat without first acknowledging the messages sent by the other "group" (eg. staff must acknowledge all patient contacts' messages before being able to send messages, but cannot and do not need to acknowledge messages sent by other staff).
>    ❌ There is no indication of why a user is unable to send a message at the moment as we couldn't implement a pop up due to time constraints.

> 3. to be able to send template messages SO THAT communication is more efficient.
<!-- >    ❌ Due to time constraints, we were unable to implement a 'Quick Texts' button that would allow nurses to select from a set of template messages and change relevant information in it to quickly craft an important message that might be reused for different patients. -->
