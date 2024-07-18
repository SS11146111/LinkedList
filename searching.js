class Node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);
let firstNode = new Node(89);
let secondNode = new Node(67);
let thirdNode = new Node(78);
let fourthNode = new Node(34);

//connecting nodes
head.next=firstNode;
firstNode.next=secondNode;
secondNode.next=thirdNode;
thirdNode.next=fourthNode;

function searchList(head,key)
{
   let current = head;

   while(current!=null)
   {
    if(current.data == key)
        return true
    current=current.next
   }
   return false;

}

console.log(searchList(head,67))
//TC:O(n)
//SC:O(1)