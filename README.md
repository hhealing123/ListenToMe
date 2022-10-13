# ListenToMe
<p align="center" width="100%"><img width="33%" src="https://user-images.githubusercontent.com/106945679/192655965-55654d94-bda0-429e-9643-60afa14c5d01.JPG"></p>

## Table of Contents
- [ListenToMe](#listentome)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [User Story](#user-story)
  - [Installation & Usage](#installation--usage)
  - [Final Thoughts](#final-thoughts)
  - [Utilized Resources](#utilized-resources)
  - [Contact](#contact)

## Description
Music is one of crucial element of everyday life, it is one of a way of expressing our emotions and allows us to relate to other people more closely. We spend hours listening to it; however, sometimes we listen to random music without knowing that it is the song that we actually want to listen to - How sad is that? Thankfully there is `ListenToMe`! `ListenToMe` is a music-post web application that allows you to find your true music taste; you can use it to be more connected to your peers by sharing songs that you like or see what your friends like! `ListenToMe` also allows you to search for songs, add the songs to your profile, as well as allowing you to filter songs or artists based on your music taste. Stay tuned!

## User Story
```
AS A user who loves listening to music 
I WANT a application that allows me see other people's opinions on music 
SO THAT I reply to the people's comments, share experiences, and stay connected with individuals. 
```

## Installation & Usage

```
Type `npm init` in the terminatl to get `package.json`.

Type `npm install` in the terminal to install dependencies needed for the project.

Type `npm run seed` in the terminal to populate pre-made data to the database for the purpose of testing routes.

Type `mysql -u root p`, then `SOURCE schema.sql;` in the terminal to create the database.

Type `npm start` to initiate the project.

This project is used to demonstrate Model View Controller (MVC) paradigm that uses `Sequelize ORM` for database, `Handlebars.js` as the template engine, `express-session` for authentication, as well as `express.js` for routing.
```

## Final Thoughts
Our team initially had a great idea for the project which was to make a search engine that allows users to find music that they like, and save the songs in the playlist; however, we came across lots of issues while trying to make the initial project. The main issue that we encountered was that we tried using the 3rd party API to retrieve music data from Spotify which was only available for Spotify users; hence, we did not have full control of the API and was unable to manupulate data that we needed. In addition, setting up models and routes was another issue since we did not have enough knowledge to use API to create models and controllers based off the API that we tried to use. Therefore, to resolve the issues we slightly converted our initial plan and decided to make a project where users can communicate with other users by creating posts regards to music and leave comments on those posts. Although everything went smoothly after changing our project model, we faced some hardships when we came across to GitHub. We accidently pushed some files into main branch and some branches were behind in commits or ahead in commits which happened due to not pulling everytime we tried accessing the branches, as well as using `GitHub Desktop` that caused serious errors. However, we overcame the issue by communicating with the team members and ask questions if uncertain about how to pull or push to the designated branches. Another issue that we had was the models, especially creating relationship between different controllers. That is, using `belongsTo`, `hasMany`, and assigning `foreignKey`; we had to fully understand what was happening inside the controllers to create correct relationships in model files between each controllers. Overall, we would not say the project was easy; however, we did learn a lot of things, such as how to correctly use GitHub (To do and not to do), as well as following MVC paradigm; furthermore, we learned that it is very important to always communicate with the team members to see the best results.

## Utilized Resources
* [Express Session](https://expressjs.com/en/resources/middleware/session.html)
* [Sequelize Validations](https://sequelize.org/docs/v6/core-concepts/validations-and-constraints/)
* [GitHub](https://www.datacamp.com/tutorial/git-push-pull)
* [Sequelize Associations](https://sequelize.org/docs/v6/core-concepts/assocs/)
* [Handlebars.js Guide](https://handlebarsjs.com/guide/)

## Contact

If you have any questions please reach out to the following members of the project!
```
Harvey Lee (hhealing123@gmail.com)

Tyler Charro (tylercharro@gmail.com)
Link:https://listen-to-me512.herokuapp.com/

Connor Banks (connortamminen@gmail.com)

LaTavya (Tay) Collins (msdavistoday@gmail.com)

Jose Otero (ieagle71@gmail.com)

Matteo Ramazzini (mramazzini123@gmail.com)
```

Powerpoint presentation-https://docs.google.com/presentation/d/1UhJyVNaOUuOUTMWT99xfBm7eng3yut1i2rKai3s_pz4/edit?usp=sharing
Link: https://listentomeproject.herokuapp.com/
