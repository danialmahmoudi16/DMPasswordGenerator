# DMPasswordGenerator
Password Generator

* As an employee with access to sensitive data. I want to randomly generate a password thath meets certain criteria so that i can create a strong password that provides greater security.

* Its started when all 4 types of characters including numbers, lowercase, uppercase, and special characters are inserted as variables and use them as arrays by inserting the characters within the brackets of each individual type in quotes and separated by commas.

* Then variables must be created for all four character types for them to be selected within a function.

* The password must be between 8 to 128 characters long, therefore a loop such as "while" can be inserted under the function to generalize the numbered range of characters.

* The above steps can be seen here ![image](https://user-images.githubusercontent.com/122760940/218352106-d10ed0d2-d2e5-497d-ac76-e588c0f6728f.png)

* Then all four character types need a dialogue pop up box to ask whether the user wants the specific character in their password or not. This is done through the confirm command which is similar to the prompt command as used in line 20 for the password length, however the confirm command is specific to the message displayed in quotes after the command wheras the prompt command included the message and the default value that the user chooses.

* Then likewise as before another loop is created through the "while command" to go against the user selecting cancel for all character types so that the pop up box and come back and say "you need select at least one character type".

