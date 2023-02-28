# Unit 12 Challenge: Team profile generator

## Overview

This a command-line application that dynamically generates team profile in a html page based on user information.

## Project Details

In this application user is allowed to enter input through command-line interface. Based on the information from user a static HTML page will be generated containing information about the team members. This application uses [Inquirer package](https://www.npmjs.com/package/inquirer) to get user input and fs/promises to write data into a file and await to ensure that events happen synchronously. The input provided by the users are used to fill different sections in the html page. All the information from the user are stored in an array and a rennder function is used to render all the information and put them on the HTML page.

![team profile generator app demo](./assets/images/generated_team_profile.png)

## Output

Team profile generated based on user information:


## Installation

N/A

## License

Please refer to the license in the repo

## Credits

* https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

* https://www.npmjs.com/package//inquirer?activeTab=readme

* https://www.npmjs.com/package/promise-fs

## Github link

*  https://github.com/Leonawesley/team_profile_creator