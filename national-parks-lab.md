[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# React Router & APIs

For today's lab, you'll be building out a small website for the National Parts.
The lab will be broken down into two parts:

1. Build a React app that uses `react-router`
1. Communicate with 3rd-party APIs

## Prerequisites

- React
- Components and life cycle methods
- Props and state
- React Router

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.


## Requirements

You will be building out a website listing all of the National Parks.

The layout of the page with be the following:


Each park should have a detail view that looks like this:
![Detail view](./detail-view.png)

There should be a home page that links to each detail view that looks like so:
![Detail view](./list-view.png)

[We would like you to go above and beyond butt the very least your app should function like this](https://react-router-national-parks.vercel.app/)


### Part I: React Router

Read more on [part-i.md details](part-i.md)

Start by building out the app using React, React Router, and the static data
provided in [`parks.json`](./parks.json). Get the site working
with this static data, then integrate with the [National Parks
API](https://www.nps.gov/subjects/developer/index.htm) and make it look like the
mock. For now, just pass the data around and create an MVP version with minimal
styling so you know it's working.

Your root level component (`App`) should hold all the data for the application
and pass it down to the different pages, as necessary.

### Part II: Adding APIs

Read more on [part-ii.md details](part-ii.md)

Once you have it working with the static data, get it working with the
[National Parks API](https://www.nps.gov/subjects/developer/index.htm).

You should only need to add an Fetch request that sets the API response data to
state.

### Part III Make it look like the mock

Now that all your data and pages are in place, make your site look like the
provided screen shot above or come up with your own design!

## Resources

- [React Router Lesson Plan](https://git.generalassemb.ly/SEIR-224/react-router)
- [`<Route render={ ... } />`](https://reacttraining.com/react-router/web/api/Route/render-func)
  vs
  [`<Route component={ ... } />`](https://reacttraining.com/react-router/web/api/Route/component)

## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
