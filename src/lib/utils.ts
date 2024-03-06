import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// experimental
// export const reactQueryHookBuilder = (object) => {
//   const hooks = {};
//
//   Object.keys(object).forEach((_key) => {
//         const hookNameSuffix = `use${lodash.toLower(_key)}`.includes('useget') ? 'Query' : 'Mutation';
//         const hookName = `use${upperFirst(_key)}${hookNameSuffix}`;
//
//         hooks[hookName] = (params, key = _key, options = {}) => {
//           if (hookNameSuffix === 'Mutation') {
//             return useReactMutation.call(undefined, { queryFn: () => object[_key](params), key, options });
//           }
//
//           return useReactQuery.call(undefined, { queryFn: () => object[_key](params), key, options });
//         };
//
//         if (hookNameSuffix === 'Query') {
//           hooks[`useLazy${upperFirst(_key)}${hookNameSuffix}`] = (key = _key) => useLazyReactQuery.call(undefined, { queryFn: object[_key], key });
//         }
//     //   },
//   );
//
//   return hooks;
// };
