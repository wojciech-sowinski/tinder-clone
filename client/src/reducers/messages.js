const messages = (state = [], action) => {
    switch (action.type) {

        case 'fetchMessages':

            return action.payload;
        case 'sendMessage':
            return [...state, action.payload]
        case 'msgDisplayed':


            return state.map(msg => {

                if (msg._id === action.payload) {
                    msg.displayed = true
                    return msg
                } else {
                    return msg
                }
            })

        default:
            return state;
    }
}

export default messages;