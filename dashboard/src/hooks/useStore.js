import Store from '../store/index';

export default function useStore(module) {
  if (module) {
    return Store[module];
  }

  return Store;
}