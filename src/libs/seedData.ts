import UserRepository from '../repositories/user/UserRepository';

const userRepository: UserRepository = new UserRepository();
export default () => {
    userRepository.count()
    .then(res => {
        console.log('res', res);

        if (res === 0) {
            console.log('Data seeding in progrss');
            userRepository.create(
                {
                    name: 'GauravAgarwal',
                    role: 'head-trainer',
                    email: 'gaurav.agarwal@successive.tech',
                    password: 'Gaurav@123'
                }
            );
            userRepository.create(
                {
                    name: 'DarshanBorase',
                    role: 'trainee',
                    email: 'Darshan.borase@successive.tech',
                    password: 'Darshan@123'
                }
            );
        }
    }).catch(err => console.log(err));
};