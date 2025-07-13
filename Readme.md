## Matt's notes

### Questions

- What does the full onboarding flow look like?
- Is this screen (or similar) used elsewhere for example in settings to change rate later?

Thinking about:

- what components can we share between screens
- to what extent do previous screens influence later ones - for example is total num steps dynamic
- what happens when I press the back button? presumably goes back to the previous step, do we save the data entered for when I go forward again?
- what happens after clicking continue? assuming the user has an account, save to backend

#### UI questions:

- what text should the ? show when tapped?
- how should that be displayed - suggest tooltip below but could also be a modal
- consider also closing behaviour, tooltip clicking elsewhere on the page would close but sometimes 'x' is also good
- what icon set is used?

#### UI feedback:

overall super clean design, a couple of thoughts here:

- consider making +/- buttons more prominent - at the moment imo they blend into the background a little too much (although maybe intended to encourage most users to accept the recommended amount)
- in the custom flow it is potentially somewhat unclear why I set a different rate for new cleans as opposed to regular cleans, maybe another tooltip would be valuable here (although maybe more obvious for cleaners who have used similar platforms before?)

#### Validation and error handling:

- what size should the increments be when tapping +/- buttons? $1 seems good for competitive pricing but would need many clicks if cleaner rate is far from recommended. We could add a tap on the number to enter via keyboard but that adds more error states if we usually prevent invalid values by disabling +/-
- min/max on hourly rate - min may be dynamic if it needs to be above minimum wage per state, max unsure but consider adding some limit - 200?
- dynamic update of "estimate x jobs per week" - consider adding visual feedback via color and icon e.g. traffic lights (red too high -> likely fewer jobs, green for lower rates), consider adding a button to reset like "use recommended rate"
- consider adding "are you sure" popup on continue if likely jobs is low
- new client rate should be >= main rate to account for fees, maybe allow some wiggle room e.g. +/-5USD in case cleaners want to gain new clients quickly
- controversial topic - should we allow invalid values, but disable continue button OR stop user entering incorrect values e.g. disable minus button before rate < min - personally I prefer the latter

#### Data fetching:

Looks like we need dynamic data for mapping rate to estimated jobs per week. I would start by sending an array of objects similar to the below and filter FE side.

```
// GET /cleaner/settings/rates
{
  recommended_rate: 15,
  predicted_jobs: [
    {
      max_rate: 10,
      jobs: 8,
      feedback: RateFeedback.LOW
    },
    {
      max_rate: 15,
      jobs: 6,
      feedback: RateFeedback.GOOD
    },
    {
      max_rate: 20,
      jobs: 4,
      feedback: RateFeedback.HIGH
    }
  ]
}
```

## Product Engineering Take Home

This project is a default Expo application with Nativewind support used to give you a head start in building out the Homeaglow take home assement. It isn't setup to be a full production application and there is nothing special about the setup.

In order to get started you should be able to `npm install` at the root of this project and then run `npm start`. The project is set to work on iOS, Android, and web and uses Expo Go to make it easier to get up and running. Feel free to pick which ever setup works best for you.

We have included some of our UI foundations in `src/ui` to include things like color, fonts, and spacing in the tailwind config. but otherwise this is a stock template application.

## The project

The goal of this take home assement is not to spend hour upon hours building a pixel perfect replication of the designs included. Instead, this should be a short (~1-2 hour long) excercise to see how you evaluate designs, turn them into functioning prototypes, structure your code, and what questions you would ask to better build the right solution.

### The designs

As part of joining the Homeaglow platform as a cleaner, new applicants can set the pay rate that they want to earn. We would like you to replicate the following screen:

![pay rate](./docs/set-rate.png)

Please include in it your thoughts on how you would fetch data to populate this screen, error handling, and what you would do when the applicant clicks continue.

Given that Homeaglow is a national brand, some states have different policies so some cleaners will see an alternative UI of

![extended pay rate](./docs/set-rate-cutom.png)
![extended pay rate detailed](./docs/set-rate-custom-detailed.png)

These screens show the different experience in those states.

### The goal

With the shorter timeline of this experiment we are looking into how you think and tackle a project and less into the exact match of the UI. Once you finish please send a link to a GitHub repo to us and our team will look it over and then use it to talk in your next interview.

Good luck and have fun!
