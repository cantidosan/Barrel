export default function reducer(state, action) {

    console.log('inside reducer action type', action.type)
    console.log('inside reducer state', state)
    console.log('inside reducer action payload', action.payload)

    switch (action.type) {
        case 'pageCount':

            return {
                ...state,
                pageCount: (action.payload > 2 ||
                    action.payload < 0) ? 0
                    : action.payload
            }


        case 'metricToggle':
            return {
                ...state,
                metricToggle: action.payload,

            }
        case 'courierToggle':
            return {
                ...state,
                courierToggle: action.payload,

            }
        case 'parcelId':
            return {
                ...state,
                parcelId: action.payload,

            }
        case 'deptPort':
            return {
                ...state,
                deptPort: action.payload,

            }
        case 'arrivPort':
            return {
                ...state,
                arrivPort: action.payload,

            }
        case 'headerState':
            return {
                ...state,
                headerState: action.payload,

            }
        case 'deptDate':
            return {
                ...state,
                deptDate: action.payload,

            }
        case 'docRef':
            return {
                ...state,
                docRef: action.payload,

            }

        default:
            return state;
    }
};
