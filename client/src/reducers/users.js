const users = (state = [], action) => {
    switch (action.type) {

        case 'fetchUsersCatalog':

            return action.payload;

        default:
            return state;
    }
}

export default users;