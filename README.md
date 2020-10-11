
# Slippers React <!-- omit in toc -->

A Typescript React website replicating the design of a famous E-commerce store.

Table of content:  
- [1. Getting Started](#1-getting-started)
  - [1.1. Prerequisites](#11-prerequisites)
  - [1.2. Installing](#12-installing)
  - [1.3. Database](#13-database)
- [2. Built With](#2-built-with)
- [3. Git Style](#3-git-style)
  - [3.1. Message Structure](#31-message-structure)
    - [3.1.1. The Type](#311-the-type)
    - [3.1.2. The Subject](#312-the-subject)
    - [3.1.3. The Body](#313-the-body)

## 1. Getting Started

These instructions will get you a copy of the project up and running on your local machine for development purposes.

### 1.1. Prerequisites

Check the package.json for all the packages required for this project

### 1.2. Installing

Clone this repo, open the terminal and navigate to the repo directory on your local machine, and then run:

```
npm install
```
wait until it's done and you're good to go  

### 1.3. Database

In order for this project to work properly you will need a REST API *(in my case I made my own using Firebase)* that provides data matching the data types in the RootReducer interface.
You can find the RootReducer type in ` ./store/rootReducer/reducersTypes.d.ts`

## 2. Built With

* [TypeScript](https://www.typescriptlang.org/) - The main language used.
* [React](https://reactjs.org/) - The web library used.
* [Redux](https://redux.js.org/) - For state management *(in coordination with redux-thunk & react-redux)*.

## 3. Git Style

### 3.1. Message Structure
A commit messages consists of three distinct parts separated by a blank line: the title, an optional body and an optional footer. The layout looks like this:
```
type: subject

body
```

#### 3.1.1. The Type
The type is contained within the title and can be one of these types:

* **feat:** a new feature
* **fix:** a bug fix
* **docs:** changes to documentation
* **style:** formatting, missing semi colons, etc; no code change
* **refactor:** refactoring production code
* **test:** adding tests, refactoring test; no production code change
* **chore:** updating build tasks, package manager configs, etc; no production code change

#### 3.1.2. The Subject
Subjects should be no greater than 50 characters, should begin with a capital letter and do not end with a period.

Use an imperative tone to describe what a commit does, rather than what it did. For example, use change; not changed or changes.

#### 3.1.3. The Body
Not all commits are complex enough to warrant a body, therefore it is optional and only used when a commit requires a bit of explanation and context. Use the body to explain the what and why of a commit, not the how.

When writing a body, the blank line between the title and the body is required and you should limit the length of each line to no more than 72 characters.

For more information about the style guide for Git and programming Languages check: [Udacity's Code Style Guide](https://udacity.github.io/git-styleguide/)

