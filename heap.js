class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element < parent) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx > length) {
        rightChild = this.values[rightChildIdx];
        if ((!swap && rightChild > element) || (swap && rightChild)) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const m = new MaxBinaryHeap();
m.insert(55);
m.extractMax();
m.extractMax();
m.extractMax();
m.extractMax();
m.extractMax();
m.extractMax();
m.extractMax();
m.extractMax();
m.insert(55);
m.insert(95);
console.log(m);
