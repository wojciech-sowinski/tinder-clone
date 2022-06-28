const messages = (state = {
    loading: false,
    messages: []
}, action) => {




    switch (action.type) {



        //================================================
        case 'fetchMessages':

            return action.payload;



        case 'sendMessage':
            console.log(action.payload);
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
            case 'msgDisplayed':

                return state;
            default:
                return state;
    }
}

export default messages;