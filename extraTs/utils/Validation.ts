import validateEmail from './helper';


const validateUsers = (users) => {
    const validUsers = [];
    const invalidUsers  = [];

    users.forEach(userObj => {
      const {traineeEmail, reviewerEmail} = userObj;
      if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
         validUsers.push(userObj);
      } else {
        invalidUsers.push(userObj);
      }
    });
    console.log(`No of valid users: ${validUsers.length}`);
    console.log(validUsers);
    console.log(`No of invalid users: ${invalidUsers.length}`);
    console.log(invalidUsers);
};


export default validateUsers;
