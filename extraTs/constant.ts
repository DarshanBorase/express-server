import { Users, Permission } from './interfaces';

const permission: Permission = {
    'getUsers': {
        all: ['head-trainer'],
        read : ['trainee', 'trainer'],
        write : ['trainer'],
        delete: [],
    },
};

const users: Users = [
    {
        traineeEmail: 'darshan.borase@successive.tech',
        reviewerEmail: 'shekhar.patil@successive.tech',
    },
    {
        traineeEmail: 'darshan.borase@successvietech',
        reviewerEmail: 'shekhar.patil@successivetech'
    }
];

export default {permission, users};