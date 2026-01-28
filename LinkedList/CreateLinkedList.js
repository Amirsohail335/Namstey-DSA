function Node(val) {
  this.val = val;
  this.next = null;
}

function MylinkedList() {
  this.head = null;
  this.size = 0;
}

const list = new MylinkedList()

let node1 = new Node(10)
let node2 = new Node(20)
let node3 = new Node(30)

node1.next=node2
node2.next = node3

list.head = node1
list.size = 3

let curr = list.head

while(curr){
    console.log(curr.val)
    curr = curr.next
}
