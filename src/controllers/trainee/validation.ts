export default Object.freeze
({
    create: {
        id: {
            exists: true,
            string: true,
            in: ['body'],

        },
        name: {
            exists: true,
            regex: '',
            in: ['body'],
            errorMessage: 'Name is required',
        }
    },
    delete: {
        name: {
            exists: true,
            string: true,
            errorMessage: 'Id is required',
            in: ['param']
        }
    },
    get: {
        skip: {
            exists: false,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            exists: false,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    update: {
        name: {
            exists: true,
            string: true,
            in: ['param']
        },

    }
});