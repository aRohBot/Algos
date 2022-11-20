class SLLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    addFront(val) {
        let new_node = new SLLNode(val);
        if(!this.head) {
            this.head = new_node;
        return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }

    removeFront(){
        if (!this.head){
            return this.head;
        }
        let deletedNode = this.head;
        this.head = deletedNode.next;
        deletedNode.next = null;
        return this.head;
    }

    front(){
        if (!this.head){
            return null;
        }
        return this.head.data;
    }
}

var mySLL = new SLL();
console.log(mySLL.front());
mySLL.addFront(8);
console.log(mySLL.front());
mySLL.addFront(9);
console.log(mySLL.front());
mySLL.addFront(3);
console.log(mySLL);
console.log(mySLL.front());

