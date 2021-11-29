# Ruby Cap Exercises

## Installation

This app requires both Git and Node (version 16.13 (LTS) recommended) installed.

1. Fork and clone this repository, replacing the `<USERNAME>` text below with your actual GitHub username:

        git clone git@github.com:<USERNAME>/ruby-cap-exercises.git

3. Use the `cd` command to navigate into the newly created directory:

        cd ruby-cap-exercises

4. Navigate to the `step-3` directory within:

        cd step-3

5. Run the `npm install` command

## Running the App Locally

1. Navigate to the local directory of the repo
2. Navigate to the `step-3` directory within
3. Run the `npm start` command

## Deploying to Netlify

In order to [create a deploy with Netlify](https://docs.netlify.com/site-deploys/create-deploys/), use the following build settings ("Deploy with Git" recommended):

* **Base directory:** `step-3`
* **Build command:** `npm run build`
* **Publish directory:** `step-3/build`

## Compromises

1. For the user cards, I opted to forgo adding styling to the "See details" link to make it visually clear that it is in fact a link, in order to stay true to the "mock up" provided for the exercise. In a real world scenario, I would strongly encourage that this styling be kept in, or find a better compromise between the visual aesthetic and this a11y friendly styling.
