import { BloodBankActions } from '../action/bloodbankaction';

const INITIAL_STATE = {
    errorsignup: [],
    signup: [],
    errorsignin: [],
    signin:[],
    donordata:[],
    postdonor:[],
    donorfulldata:[],
};


export function BloodBankReducer(state = INITIAL_STATE, action) {
    // console.log('TODO REDUCER PURE FUNCTION',action)

    switch (action.type) {

        case BloodBankActions.SIGNUP:
        return ({
            ...state,
            signup: action.payload,
        })

        case BloodBankActions.SIGNIN:
        return ({
            ...state,
            signin: action.payload
        })

        case BloodBankActions.ERROR_SIGNIN:
        return ({
            ...state,
            errorsignin: action.payload
        })

        case BloodBankActions.ERROR_SIGNUP:
        return ({
            ...state,
            errorsignup: action.payload
        })

        case BloodBankActions.DONOR_DATA:
        return ({
            ...state,
            donordata: action.payload
        })

        case BloodBankActions.DONOR_FULL_DATA:
        return ({
            ...state,
            donorfulldata: action.payload
        })

        case BloodBankActions.POST_NEW_DONOR:
        return ({
            ...state,
            postdata: action.payload
        })
        default:
            // console.log('default reducer')

            return state;
    }

}