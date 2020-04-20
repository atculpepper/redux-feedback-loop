# Redux Feedback Form

_Duration: Weekend Challenge_

## Description

The assignment was to create a full stack feedback app using React and Redux, with user feedback collected over 4 views. In a separate review page, the goal was to display the all of the current feedback values along with a submit button. On submit, the data should be saved to a database. There is no nav bar; instead, each feedback view is its own route, and clicking "Next" pushes the user to the next view while storing their answer in the Redux store.

### SETUP

Create your database and tables using the provided `data.sql` file. Start the server.

```
npm install
npm run server
```

Now that the server is running, open a new terminal tab with `cmd + t` and start the react client app.

```
npm run client
```

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [React-Redux]
- [Express]
- [Axios]
- [pg]
- [body-parser]
- [redux]
- [react]

## Usage

1. User lands on a page asking them to rate their feelings from 1 -5.
2. On clicking "Next," they move on to a new page, which asks them about how well they understood the material, again from 1-5.
3. On "Next," they go to a page asking how well they were supported, from a range of 1-5.
4. Clicking "Next" again brings them to a page asking if they have any comments to share.
5. After typing in their comments, they are shown a summary of the feedback that they have entered.
6. When they click "Submit," the user is shown a page which confirms that their feedback has been submitted, and invites them to take another survey.

## Built With

[Create React App]

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [anneculpepper@gmail.com]
