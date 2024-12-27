export class Queue {
    collection = [];

    enqueue(item) {
        this.collection.push(item);
    }

    dequeue() {
        return this.collection.shift();
    }

    size() {
        return this.collection.length; 
    }
}
