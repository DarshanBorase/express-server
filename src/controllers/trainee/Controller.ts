import { Request, Response, Next } from 'express';

class Trainee {
    get(req: Request, res: Response, next: Next) {
        const trainee = [
            {
                name: 'Akshay',
                designation: 'developer',
                location: 'Pune',
            },
            {
                name: 'Darshan',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                name: 'Ashalesha',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                name: 'Darshani',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return res.status(200).send({ message: 'Fetched data Successfully', data: trainee });
    }
    post(req: Request, res: Response, next: Next) {
        console.log(req.body);
        const { name, designation, location } = req.body;
        if (!name) {
            return res.status(400).send({ message: 'required trainee details', error: 'error msg' });
        }
        return res.status(200).send({ message: 'trainee added sucessfully' });
    }
    put = (req: Request, res: Response) => {
        const trainee = this.rawTraineeData();
        const requestName = req.params.name;
        const data = trainee.find( (post, index) => {
             if (post.name === requestName) return true;
        });
        data.designation  = 'Associate Engineer';
        return res.status(200).send({message: 'Updated trainee successfully', data: trainee});
     }
     rawTraineeData = () => {
         const trainee = [
            {
                name: 'Darshan',
                designation: 'developer',
                location: 'Pune',
            },
            {
                name: 'Akshay',
                designation: 'Tester',
                location: 'Mumbai',
            },
            {
                name: 'Ashlesha',
                designation: 'frontend Developer',
                location: 'Noida',
            },
            {
                name: 'Darshani',
                designation: 'Designer',
                location: 'Chennai',
            },
        ];
        return trainee;
     }
     delete = (req: Request, res: Response) => {
       const trainee = this.rawTraineeData();
       const requestName = req.params.name;
       const deletedData = trainee.filter( (post, index) => {
            if (post.name !== requestName) return true;
       });
       return res.status(200).send({message: 'deleted trainee successfully', data: deletedData});
    }
}

export default new Trainee();