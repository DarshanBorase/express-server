import { Request, Response, Next } from 'express';
import { request } from 'http';

class Trainee {
    get(req: Request, res: Response, next: Next) {
        const trainee = [
            {
                id: 1,
                name: 'Aashlesha',
                designation: 'developer',
                location: 'Pune',
            },
            {
                id: 2,
                name: 'Darshan',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                id: 3,
                name: 'Akshay',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                id: 4,
                name: 'Darshani',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return res.status(200).send({ message: 'Fetched data Successfully', data: trainee });
    }
    post(req: Request, res: Response, next: Next) {
        // console.log(req.body);
        const {id, name, designation, location } = req.body;
        if (!name) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added sucessfully' });
    }
    put = (req: Request, res: Response): any => {
        // get raw trainee data
        const trainee = this.rawTraineeData();
        // get request params
        const requestName = req.params.name;
        // find trainee by name
        const data = trainee.find((post, index) => {
          if (post.name === requestName) return true;
        });
        // update designation of trainee
        data.designation = 'Associate Engineer';
        return res.status(200).send({ message: 'Updated trainee successfully', data: trainee });
    }
    rawTraineeData = () => {
        const trainee = [
            {
                id: 1,
                name: 'Darshani',
                designation: 'developer',
                location: 'Pune',
            },
            {
                id: 2,
                name: 'Akshay',
                designation: 'ASE',
                location: 'Noida',
            },
            {
                id: 3,
                name: 'Ashlesha',
                designation: 'frontend Developer',
                location: 'Mumbai',
            },
            {
                id: 4,
                name: 'Darshan',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return trainee;
    }
    delete = (req: Request, res: Response) => {
        const trainee = this.rawTraineeData();
        const requestName = req.params.name;
        const isFound = this.rawTraineeData().find( person => person.name === requestName);
        if (!isFound) {
            return res.status(404).json({status : 404 , message : `No Person with name ${requestName}`});
        }
        const deletedData = this.rawTraineeData().filter(person => person.name !== requestName );
        return res.status(200).send({ message: 'deleted trainee successfully', data: deletedData });
    }
}

export default new Trainee();