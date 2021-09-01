import validateEmail from "./utils/helper";

const permissions = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    },
}

const users = [
    {
        traineeEmail: 'darshan.borase@successive.tech',
        reviewerEmail: 'shekhar.patil@successive.tech',
    },
    {
        traineeEmail: 'darshan.borase@successvietech',
        reviewerEmail: 'shekhar.patil@successivetech'
    }
]

export default {permissions, users};