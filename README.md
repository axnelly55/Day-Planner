# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

Starter html and css files are provided in the `./Develop` folder. You should familiarize yourself with the code in these files before proceeding to pseudo-code your approach for solving the problem.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule

WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Video Demonstration

[Panopto: Homework 5 Demo](https://codingbootcamp.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=4565f4dc-9834-475e-a504-abd900fba724)

## Review

You are required to submit the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

## Repository Quality Requirements

* The repository must have a unique name. (e.i. Does not contain words like "assignment" or "homework" in the repository name.)

* Follows best practices for file structure and naming conventions.
  * Avoid uppercase letters in file names. (Except for .js files which export a constructor or React component.)
  * File names MUST NOT contain spaces. Use "-" or "_" to separate words in a file name.
  * Avoid using special characters.
  * Organize assets using folders.
  * Has an `index.html` file at the root of the repo if deploying on GitHub pages.

* Follows best practices for code formatting.
  * Variable and function names use consistent casing such as camelCase or snake case. Avoid single letter names for things.
  * Indentation applied to functions, objects, and other code blocks.
  * Uses consistent indentation characters: tabs, 2 spaces, or 4 spaces.
  * Comments used where code is difficult to understand or reason for a series of expressions is not obvious.

* Repository contains a quality readme with a description, screenshot, link to deployed application, etc. (see [Good README Guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-GUIDE/README.md))

* Several commits should be made during the development process as features and assets were completed/updated. Refer to [Commit Early and Often](#commit-early-and-often) below.

## Application Quality Requirements

* Application user experience is intuitive and easy to navigate.

* Application user interface style is clean and polished.

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your codebase in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have well over 200 commits by graduation, so commit early and often!

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
