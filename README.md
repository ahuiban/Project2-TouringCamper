# Project 2 - Touring Camper

### Problem:

I am passionate about camping and I want an app for camping with reviews from real people

### General App Idea/Purpose:

Website that allows people to see cool places to camp with reviews from real people.

### Who Would Use It:

Camping enthusiasts

## The Website

TBD - via Heroku

## Notes

### - 3rd party middleware function from NPM - "morgan"

### - MapBox API

### - Routes w/ Postman

Restful Routes

# Action |URL |HTTP Verb |EJS view |mongoose method

1 Index | |GET |index.ejs |.find()
2 Show | /:id |GET |show.ejs |.findById()
3 New | /new |GET |new.ejs |none
4 Create |/addNewTour/ |POST |none |.create(req.body)
5 Edit | /:id/edit |GET |edit.ejs |.findById()
6 Update | /:id |PUT |none |.findByIdAndUpdate()
7 Destroy | /:id |DELETE |none |.findByIdAndDelete()
