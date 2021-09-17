import { isNumber } from 'util';

export default Object.freeze
({
    create: {
        id: {
            custom: {
                options: (id: number) => {
                  return !isNumber(id);
                },
              },
              errorMessage: 'Bad audience id Format',
              in: ['body'],
              optional: false,
              required: true,

        },
        name: {
            exists: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete: {
        id: {
            exists: true,
            string: true,
            errorMessage: 'Id is required',
            in: ['param']
        }
    },
    get: {
        skip: {
            exists: false,
            in: ['body'],
            errorMessage: 'Skip is required',
        },
        limit: {
            exists: false,
            in: ['body'],
            errorMessage: 'Limit is required',
        }
    },
    dataToUpdate: {
        id: {
            exists: true,
            string: true,
            in: ['param']
        },
    }
});