const users = [     // Array of Objects, Objects contain email
    {
        traineeEmail: 'Darshan.borase@successive.tech',
        reviewerEmail: 'Shekhar.patil@successive.tech',
    },
    
    {
        traineeEmail: 'Darshan.borase@gmail.com',
        reviewerEmail: 'Shekhar.patil@successive.tech',
    },
    
    {
        traineeEmail: 'Darshan.borase@successive.tech',
        reviewerEmail: 'Shekhar.patil@gmail.com',
    },
    ]
    
    const validateEmail=(email)=>{
        
        var validRegex = /^[a-zA-Z0-9.^]+@successive.tech/;
    
        if (validRegex.test(email)) 
            return true;
      
        else return false;
    }
    
    var validUsers = []     // List of Valid users
    var invalidUsers = []   // List of Invalid users
    
    const validateUsers=(users)=>{
    
        users.forEach(element => {
            const {traineeEmail} = element      // using destructing 
            const {reviewerEmail} = element     // using destructing
            
            validateEmail(traineeEmail)==true?validUsers.push(traineeEmail):invalidUsers.push(traineeEmail)
            validateEmail(reviewerEmail)==true?validUsers.push(reviewerEmail):invalidUsers.push(reviewerEmail)
            }
        );
    }
    
    console.log();
    validateUsers(users)
    
    console.log('Valid users:')
    validUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Valid users: \n', validUsers.length)
    
    console.log();
    
    console.log('Invalid users:')
    invalidUsers.forEach(element => {
        console.log(element)
    });
    console.log('Number of Invalid users: \n', invalidUsers.length)
    
    