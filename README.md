# AAlum Mobile App

A dating app that is exclusive for college students and college alumni.

### Running

```bash
npm i
cd ios && pod install
cd ..
npm run ios
```

If you don't have cocoapods installed, first run:

```bash
sudo gem install cocoapods
```

If you don't have react-native installed, first run:

```bash
sudo npm install -g react-native-cli
```

If your watchman is acting up (metroBundler gets stuck), try reinstalling watchman
https://stackoverflow.com/questions/37370949/react-native-failed-to-build-dependencygraph-watchman-error

Install Xcode
https://developer.apple.com/xcode/

Open project in Xcode.
Select Xcode menu, then Preferences, then Locations tab. Select your Xcode version from the dropdown and exit Xcode.

### Testing

#### Regular Testing report

```bash
npm run test
```

#### Test and Update Snapshots (Whenever you change something)

```bash
npm run test:update
```

#### Testing Report with Coverage

```bash
npm run test:coverage
```

### Figma

https://www.figma.com/file/bvJwaT2B7N37d3Rs7NVUHUfO/Wireframes?node-id=221%3A0

## Table of Contents

- [Project Layout](#project-layout)
  - [Important Directories and Files](#important-directories-and-files)
- [Work Flow](#work-flow)
  - [Zen Hub](#zenhub)
  - [The Kanban Board](#the-kanban-board)
  - [For Engineers](#for-engineers)
  - [For Project Managers](#for-project-managers)
- [Contributing to this Project](#contributing-to-this-project)
  - [Git Issues](#git-issues)
  - [Git Branches](#git-branches)
    - [Creating a Branch](#creating-a-branch)
    - [Naming a Branch](#naming-a-branch)
  - [Git Commits](#git-commits)
  - [Git Pull Requests](#git-pull-requests)
    - [Creating a Pull Request](#creating-a-pull-request)
    - [Formatting a Pull Request](#formatting-a-pull-request)

### Important Directories and Files

- #### public

  - Used to store the root html and css files, favicon, etc.
    **Note:** You cannot import assets from this directory as it is outside of src

- #### src

  - The main directory. Used to store all javascript files

- #### App.js

  - The root component. Any resources that need to be accessed by the whole app (like redux, theme provider, apollo provider, etc.) must be stored here. We try to keep this file light, so only put work here if it is **_absolutely_** necessry

- #### config.js

  - Used to store constants that are important to the functionality of the app (like api urls, api keys, query limits, etc.)

- #### theme.js

  - Used to store constants that are important to style (like colors, fonts, widths, heights, etc.). This is also where we load our fonts.

- #### components
  - The top level components folder is used to store components that will be used throughout the app. If a component is used in more than one container, then it should be in this folder.

## Work Flow

The following sections will explain the operational processes that we adhere to on this project. Make sure to read them closely and seek clarification if necessary

### ZenHub

This project makes use of the ZenHub chrome exension for GitHub, you can download this extension [here](https://chrome.google.com/webstore/detail/zenhub-for-github/ogcgkffhplmphkaahpmffcafajaocjbd?hl=en-US), so long as you are in a google chrome browser.

After downloading the extension, you should notice that the ZenHub tab appears between the PullRequests and Projects tabs on the GitHub navigation bar.

### The Kanban Board

ZenHub provides a so-called "Kanban Board". The purpose of this board is to coordinate the completion of git issues and to serve as a snap-shot of the current state of the project. So long as everyone on the team does their part to keep this board up-to-date, the Kanban Board is an extremely valuable tool for DEV in terms of collecting data and analyzing the accuracy of our scopes.

The Kanban Board will have the following columns:

- **New Issues**
  - This column holds all issues that have not yet been assigned, or have not yet be finished by the PM
- **One column for each member of the team**
  - These columns will hold all of the issues that are assigned to each member of the team
- **In Progress**
  - This column holds all the issues that are currently being worked on by all members of the team
- **Review/QA**
  - This columns holds all the open PR's and all the issues that are related to those PR's
- **Ice Box**
  - This column holds all issues that engineers were not able to complete (either because of massive bugs, inadequate instructions, or further research was needed). In other words, this column holds issues that the engineers have given up on for the time being.
- **Closed**
  - This column holds all the issues and PR's that have been completed on project.

### For Engineers

When you first get to office hours, start by reading the issues in your column of the Kanban Board. You may start with any of the issues listed there unless otherwiser directed by the PM. Also make sure to know which issues depend on which, so that you can engineer in a logical order. If your issues is labeled as "Ready for: Development", then you can begin work immediately. If your issues is marked as "Ready for: Action Steps", then you should make sure the finish the issue by adding the proper "Actions Steps" an example of which can be found [here](#git-issues).

After selecting an issue, move it from your backlog column into the **In Progress** column. This will let your PM and other teammates know what you are up to.

To start working on your issue, you're going to need to checkout to a new branch. If your PM did not explicitly tell you the name of your branch, you may name it yourself, but make sure it is in accordance with the [branch name guidelines](#naming-a-branch) to see how to name it properly. If you're not sure how to make a branch, you can go [here](#creating-a-branch)

As you work on your issue, you should make sure to commit often. A good rule of thumb is to commit after each of your action steps. The format of git commits in this repo can be found [here](#git-commits)

While working on your issue, if you find yourself going more than 30 minutes making little to no progress then it might be time to take a break. This means moving the issue from the **In Progress** column to the **Ice Box** column. In addition to moving the issue to the new column, you should also leave a comment on the issue that explains what the difficulty was. You can do this by simply clicking on the issue in the Kanban Board and typing in the comment box at the bottom of the issue modal (make sure to @yourPM so they will be notified and can try to help solve your problem).

When your issue is complete, make a PR that references the issue and confirm that the PR and issue are moved into the **QA/Review** column before moving on to your next issue. If you're not sure how to make a PR you can go [here](#creating-a-pull-request). Otherwise, you should make sure your PR is in accordance with the [PR policy](#formatting-a-pull-request) of this repo. If your PR needs to be corrected before it is merged in, your PM will let you know.

### For Project Managers

At the beginning of each week you will create a new Milestone. This can be done by going to the ZenHub tab on GitHub and clicking the green "+" button next to the "New Issue" button.

Milestones serve as a way to keep the team accountable for the work they are supposed to accomplish for the sprint. Because sprints are often 2 - 4 weeks long, it is nice to break all the requested features into smaller mini-sprints, and thus the Milestone was born.

When creating a Milestone, the title and description should follow a standardized format. The title of the Milestone should reflect your current position in the sprint. For example, if you are in the second week of your first sprint on a project, the name of the Milestone for this week will be "Sprint 1 Week 2". On the other hand, the description of a Milestone should simply list all features you hope to accomplish that week. For example you might write "This week we will finish the follwing: the navbar, the about page, and redux for the shopping cart."

To create issues for you engineers, you can simply click the green "New Issue" button in the top right corner of the ZenHub tab on GitHub. When creating issues, make sure to follow the format shown [here](#git-issues). You should also make sure to associate them with the current Milestone by clicking on the "Milestone" header in the far right column of the issue creation modal. Simply select your current sprint from the drop down menu to associate the issue with it. Associating the issues with the current Milestone is **_super_** important because it allows us to accurately track the progress of the current week/sprint. If you forget to do this, the issue will go untracked and the data collected will not accurately represent the work completed. In conclusion, set a good example for your team and make sure to use ZenHub correctly.

After your issues have been completed, you will be able to find them in the "New Issues" column of the Kanban Board. Make sure to assign them to the appropriate team member and move the issues into the individual backlog columns of those team members. If you don't the team will have a harder time finding their assigned issues. Don't waste their time.

## Contributing to this Project

The following sections explain the proper formats for submitting work to this project. The guidelines are designed to increase the long term efficacy of the our engineering efforts, meaning the effort that goes into following these standards today will help save the engineers of tomorrow a considerable amount of time.

### Git Issues

Git issues will take on the following format:

```
**Desired Behavior:** Include a high-level overview of the feature and provide any background information
that will help the engineer understand the issue. If the issue address a bug fix rather than a
feature request, the title of this section should be **Observed Behavior** and include information
on what the bug is and how to reproduce it (if known)

**Preparation:** Include any preparatory steps that the engineer should take before beginning the issue.
This may include packages to install, or front/back end branches to switch to, etc.

**Action Steps:** Break the issue down into steps. Each step will be a separate commit so make sure to
break them into the steps that make sense and will compile

- [ ] Step 1
  - details
    - more details
  - details

- [ ] Step 2
  - details
    - more details
  - details
```

After the issues is written make sure to give it the "Ready for: Development" label

**Note:** In the event that the issue is being written for an experienced engineer, the "Action Steps" may be omitted. If this is the case, then you should mark it with the "Ready for: Action Steps" label and make sure that the engineer writes their own action steps in the issue.

When naming the issue, clarity is the most important factor. Think about like you're trying to optimize for a search engine.

Example issue:

```
Title: Database Tab Styling

**Desired Behavior:** We need a reusable tab component so we can easily switch between the database tables we are displaying. (Link to the designs)

**Preparation:** Switch to a new frontend branch called Feature/TableTabs.

**Action Steps:**
- [ ] Define TabRow (src/components/Tab/TabRow)
  - TabRow will take the following props:
    - tabs: [String]
    - activeColor:  String
    - inActiveColor: String
    - currentTab: Number
    - changeTab: Function
- [ ] Define Tab (src/components/Tab/TabRow/Tab)
  - Tab takes the following props:
    -  label: String
    -  color: String
    - onClick: function (should be the changeTab function from TabRow called with the index of this Tab)
```

Listing out the props here might be a little overkill (probably only necessary for newer engineers), but the purpose of this system is to make it easier for future engineers to build out features similar to those we have built on this project. By providing them clear action steps we will certainly save them a lot of time.

### Git Branches

All engineers must use branches when developing on this project. The only people with push access to master will be the PM and Senior Management.

#### Creating a Branch

Before checking out to a new branch, make sure to run the following commands:

```bash
$ git checkout master
$ git pull
$ git checkout -b <NEW_BRANCH>
```

This will ensure that you are always working off of master and that you are always working with the latest version of the code possible.

#### Naming a Branch

Branches should be named in accordance with the following standard:

```
Flag/BranchName
```

Flags may be chosen from the following list:

- **Feature**
  - This flag is reserved for the development of new features. If the code for what you about to do does not already exist, use this.
- **BugFix**
  - This flag is reserved for issues that involve solving bug-related problems. If you're going in to make someone else's code (or maybe your own) function properly, use this.
- **Docs**
  - This flag is reserved for branches that are made soley for the purpose of adding to the README or adding comments to unruly code. If you use this flag, you are not allowed to add javascript to any file.
- **Update**

  - This flag is reserved for issues that involve refactoring code. This could either be a change in the designs or going back to make something more efficient. If it ain't broken, but you're fixing it anyway, use this flag.

Example: If you're given an issue called "Shopping Cart Styling", you might checkout to the following branch.

```bash
$ git checkout master
$ git pull
$ git checkout -b Feature/ShoppingCartStyling
```

### Git Commits

Git commits will take on the following format:

```
Flag(Key Words) -- commit message
```

The purpose of this format is to allow engineers to quickly find specific features by looking at commit history of master.

Flags may be chosen from the following list:

- **Docs**
  - This flag is reserved for changes to the README and to any in-file comments left on individual components.
- **Func** (for frontend use only)
  - This flag is reserved for commits that implement logic, deal with external api's, etc.
- **Styling** (for frontend use only)
  - This flag is reserved for work that involves the creation of components and any work that is done with styled-components. Changes to the theme-provider may also use this flag.
- **DB** (for backend use only)
  - This flag is reserved for changes to the models or to the migrations
- **Resolvers** (for backend use only)
  - This flag is reserved for changes to the resolvers of queries or mutations
- **Typedefs** (for backend use only)
  - This flag is reserved for changes to the typedefs

For example, if you just implemented the redux resolvers for adding and removing items from the shopping cart you might make the following commit:

```bash
$ git commit -m "Func(Shopping Cart Redux) -- Added resolvers for adding and removing items from the cart"
```

### Git Pull Requests

In order for your work to be merged into master, you must submit a Pull Request or PR.

#### Creating a Pull Request

To submit a PR simply go to the GitHub repository for your project and click on the "Pull requests" tab. There you'll see a big green button that reads "New pull request". This will take you to a new page where you'll see a "base" and "compare" button. Make sure the "base" says master, then click the "compare" button and select your branch from the drop down. Scroll down to look over the changes and make sure you only changed what you wanted to. Then click "Create pull request"

#### Formatting a Pull Request

Pull Requests must use the following format:

**Title:** Name of the Branch

```
(a list of related issues that the PR resolves)
resolves #Number #Number

(A list of things the PR does)
- Adds Feature1
- Implements Feature2
- Creates Feature3

(an approximation of how long it took to implement the requested features)
Time Spent: 6 hours
```

Make sure to add the related Issues, this is very important because GitHub will automatically close issues when the PR is accepted, but only if you mark them as related.

**Note:** The time spent is for data collection purposes only. It's so we can make sure to charge more money (in the future) for features that take longer to build.

**Note:** After a PR is created, you can continue to push to the branch and those commits are automatically added to the PR. You _do not_ need to make a new PR.
