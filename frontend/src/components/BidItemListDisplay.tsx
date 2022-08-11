import React, { FC, useState, useContext, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../FirebaseConfig';
import {
  getFirestore,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  query,
  collection,
  where,
  getDoc,
} from 'firebase/firestore';
import AuthContext from '../auth/authContext';
import UrlConvert from './UrlConvert';
import ParcelPicture from './ParcelPicture';
import getParcelUrl from '../hooks/GetParcelUrl';
import GetBidItems from '../hooks/GetBidItems';

interface userProp {
  userId: string;
}

const BidItemListDisplay: FC<userProp> = (props: userProp) => {
  // const { userId } = props;
  const { user } = useContext(AuthContext);
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [bidItemUrlMap, setBidItemUrlMap] = useState<any>([]);

  const [bidItems, setBidItems] = useState<any>([]);

  // ===============================
  // async/await version
  //
  // I split the async/await version up into separate functions
  // for each getDocs() call pretty much so it is more clear
  // as to what is going on in the function
  // ===============================

  useEffect(() => {
    if (user && !bidItems.length) {
      const getItemDetails = async (items: any[]) => {
        const itemsWithDetails = await Promise.all(
          items.map(async itemId => {
            const itemDetialsSnapshot = await getDocs(
              query(collection(db, `items/${itemId}/pictures`), where('url', '!=', ''))
            );

            const itemsWithDetails = itemDetialsSnapshot.docs.map(item => item.data());

            return itemsWithDetails[0];
          })
        );

        return itemsWithDetails.filter(item => !!item);
      };

      const getBidItems = async (bids: any[]) => {
        const tempBidItems: any[] = [];

        return await Promise.all(
          bids.map(async bid => {
            try {
              const bidItemsQuerySnapshot = await getDocs(
                query(
                  collection(db, `bids/${bid.id}/bidItems`),
                  where('itemList', '!=', '0')
                )
              );

              bidItemsQuerySnapshot.docs.forEach(bidItemDoc => {
                tempBidItems.push(bidItemDoc.data().itemList.replaceAll(/[,"\s]*/g, ''));
              });

              const completeBidItems = await getItemDetails(tempBidItems);

              console.log('completeBidItems', completeBidItems);

              return { ...bid, bidItems: completeBidItems };
            } catch (err) {
              console.error(err);
              return bid;
            }
          })
        );
      };

      const getBids = async () => {
        try {
          const pendingBidsQuerySnapshot = await getDocs(
            query(collection(db, 'bids'), where('courierId', '==', user.uid))
          );

          const bids = pendingBidsQuerySnapshot.docs.map(bidItem => {
            return { ...bidItem.data(), bidItems: [], id: bidItem.id };
          });

          const bidsWithBidItems = await getBidItems(bids);

          console.log('bidsWithBidItems', bidsWithBidItems);

          setBidItems(bidsWithBidItems);
        } catch (err) {
          console.error(err);
        }
      };

      getBids();
    }
  }, [user, db, bidItems]);

  // ===============================
  // promise .then() approach
  // ===============================

  // useEffect(() => {
  //   let bidArray = [] as any;

  //   if (user) {
  //     getDocs(pendingBidsQuery).then(querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         let bidObject = {
  //           bidId: doc.id,
  //           amount: doc.data().amount,
  //           courierId: doc.data().courierId,
  //           status: doc.data().status,
  //           senderId: doc.data().senderId,
  //           routeId: doc.data().routeId,
  //           bidItems: [],
  //         } as any;

  //         getDocs(
  //           query(collection(db, `bids/${doc.id}/bidItems`), where('itemList', '!=', '0'))
  //         )
  //           .then(bidItemQuerySnapshot => {
  // bidItemQuerySnapshot.forEach(queryDocumentSnapshot => {
  //   bidObject.bidItems.push(
  //     queryDocumentSnapshot
  //       .data()
  //       .itemList.replaceAll(' ', '')
  //       .replaceAll('"', '')
  //       .replaceAll(',', '')
  //   );
  // });

  //             bidArray.push(bidObject);
  //             // return bidObject;
  //           })
  //           .then(() => {
  //             bidArray.forEach((bid: { bidItems: any[] }) => {
  //               bid.bidItems.forEach(itemId => {
  // getDocs(
  //   query(
  //     collection(db, `items/${itemId}/pictures`),
  //     where('url', '!=', '')
  //   )
  // )
  //                   .then(querySnapshot => {
  //                     querySnapshot.forEach(result => {
  //                       bidObject.bidItems.push({ ...result.data() });
  //                     });

  //                     bidObject.bidItems = bidObject.bidItems.filter(
  //                       (item: any) => typeof item !== 'string'
  //                     );

  //                     console.log('bidObject', bidObject);

  //                     // setBidItemUrlMap((prev: any) => [...prev, bidObject]);
  //                     setBidItemUrlMap((prev: any) => {
  //                       if (
  //                         !prev.some(
  //                           (prevItem: { bidId: any }): boolean =>
  //                             prevItem.bidId === bidObject.bidId
  //                         )
  //                       ) {
  //                         return [...prev, bidObject];
  //                       }

  //                       return prev;
  //                     });
  //                   })
  //                   .catch(err => {
  //                     console.error(err);
  //                     return bid;
  //                   });
  //               });
  //             });
  //           }); //then
  //       }); //forEach
  //     });
  //   }
  //   // only on mount
  //   // eslint-disable-next-line
  // }, []);

  if (!bidItemUrlMap) return null;

  return (
    <div
      className='box-content p-4 
             bg-gray-600 rounded-lg  '
    >
      <div className='flex flex-column gap-4'>
        {bidItems.map((bid: any, key: any) => {
          return bid.bidItems.map((bidItem: { url: string; itemId: string }) => {
            return (
              <ParcelPicture
                key={bidItem.itemId}
                url={bidItem.url}
                picId={bidItem.url}
                itemId={bidItem.itemId}
              />
            );
          });
        })}
      </div>
    </div>
  );
};

export default BidItemListDisplay;
