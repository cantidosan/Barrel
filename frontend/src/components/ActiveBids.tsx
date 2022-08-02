import React,{FC} from 'react'
import ParcelPicture from './ParcelPicture'
import PendingBidCardSm from './PendingBidCardSm'

//this component will take the user id and fetch
// all bids that are in an "active" state
// and map them oot ;) .

interface bidProp{
    bidId: string,
    amount: string,
    courierId: string,
    status: string,
    senderId: string,
    routeId: string,
    bidItems:[]
    
}
const ActiveBids: FC<bidProp> = (props:bidProp) => {
    return (
        <div className='max-w-54 p-4 bg-barrel-green rounded-lg'>
            <div className=' flex flex-column gap-4 pb-2 overflow-x-scroll overflow-hidden'>

{/* 
            <PendingBidCardSm
                                        bidId={bidDetail['bidId']}
                                        amount={bidDetail['amount'] }
                                        courierId={bidDetail['courierId'] }
                                        status={ bidDetail['status']}
                                        senderId={ bidDetail['senderId']}
                                        routeId={bidDetail['routeId']}
                                        bidItems={bidDetail['bidItems']}
                                    />
 */}



            </div>

        </div>
    )
}

export default ActiveBids
