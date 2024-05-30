export type EventHandler<T = any> = (data: T) => void;

export class PubSub {
  private events: { [key: string]: EventHandler<any>[] } = {};

  // Publishes an event to all subscribers
  publish<T = any>(name: string, data: T): void {
    const handlers = this.events[name];
    if (!handlers) return;

    handlers.forEach(handler => {
      handler(data);
    });
  }

  // Subscribes a handler to an event
  subscribe<T = any>(name: string, handler: EventHandler<T>): void {
    if (!this.events[name]) {
      this.events[name] = [];
    }
    this.events[name].push(handler);
  }

  // Unsubscribes a handler from an event
  unsubscribe<T = any>(name: string, handler: EventHandler<T>): void {
    const handlers = this.events[name];
    if (!handlers) return;

    const handlerIdx = handlers.indexOf(handler);
    if (handlerIdx !== -1) {
      handlers.splice(handlerIdx, 1);
    }
  }
}
