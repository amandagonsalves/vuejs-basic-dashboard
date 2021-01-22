import bus from '../utils/bus';
const eventName = 'modal:toggle';

export default function useModal() {
  const open = (payload) => {
    bus.emit(eventName, { status: true, ...payload });
  }

  const close = (payload) => {
    bus.emit(eventName, { status: false, ...payload });
  }

  const listen = (fn) => {
    bus.on(eventName, fn);
  }

  const off = (fn) => {
    bus.off(eventName, fn);
  }

  return {
    open,
    close,
    listen,
    off
  }
}
