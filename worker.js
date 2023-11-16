const { workerData, parentPort, isMainThread } = require('worker_threads');

console.log(workerData, parentPort, isMainThread)
parentPort.postMessage({ data: workerData, status: 'Success', isMainThread });