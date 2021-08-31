import validateEmail from "./helper";


let validateUsers = (users) =>{
    let valid_users  = [];
    let invalid_users  = [];

    users.forEach(userObj => {
      let {traineeEmail,reviewerEmail} = userObj; 
      if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)){
         valid_users.push(userObj);
      }else{ 
        invalid_users.push(userObj);
      } 
    });
    console.log(`No of valid users: ${valid_users.length}`);
    console.log(valid_users);
    console.log(`No of invalid users: ${invalid_users.length}`);
    console.log(invalid_users);
}


export default validateUsers;
