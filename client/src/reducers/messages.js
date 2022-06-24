const messages = (state = [], action) => {
    switch (action.type) {

        case 'fetchMessages':

            return action.payload;
        case 'sendMessage':
            return [...state, action.payload]

        default:
            return state;
    }
}

export default messages;