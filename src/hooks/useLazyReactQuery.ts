// experimental

// import { useState } from 'react';
// import { queryClient } from '../App';

// export default function useLazyReactQuery(props) {
//   const {queryFn, key} = props || {};
//
//   const [result, setResult] = useState(undefined);
//   const fetch = (params) => {
//     return queryClient
//       .fetchQuery({
//         queryKey: [key],
//         queryFn: () => queryFn(params),
//       })
//       .then((data) => {
//         setResult(data);
//
//         return data;
//       })
//       .catch((error) => {
//         setResult({ error });
//
//         return error;
//       });
//   };
//
//   return [fetch, result];
// }
