/*
Event Loop:
A mechanism that coordinates execution of synchronous code, callbacks, and async tasks in JavaScript. It ensures non-blocking behavior by cycling through queues.

Callback Queue:
Holds tasks from Web APIs like setTimeout, DOM events, etc. These are executed after the call stack is empty and after microtasks.

Microtask Queue:
Contains high-priority tasks like Promise.then, MutationObserver, and queueMicrotask. Always executed before the callback queue in the same tick.

Starvation:
Occurs when microtasks keep piling up (e.g., recursive Promise.then) and prevent callback queue tasks from executing—leading to UI freeze or delayed events.

Web APIs (Browser):
Built-in browser features like DOM, fetch, setTimeout, localStorage, etc. They run outside JS engine and queue results back into JS via the event loop.

Mutation Observability & Promise Priority:
- MutationObserver: Watches DOM changes and queues a microtask.
- Promise Priority: Promise.then callbacks run before MutationObserver tasks, making them the highest priority microtasks.

*/