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
            console.log(this)
        return this;
        }
        new_node.next = this.head;
        this.head = new_node;
        console.log(this)
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
    display(){
        let runner=this.head;
        let values = []
        while(runner !== null){
            values.push(runner.data)
            runner=runner.next
        }
        console.log(values)
        return values
    }
}

let SLL1 = new SLL()
SLL1.addFront(76)
SLL1.addFront(2)
SLL1.display()
SLL1.addFront(11.41)
SLL1.display()