/**
 * insertion at the beginning of LL
 * insertion at any specific point in LL
 * insertion at the end of LL
 */


class Node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(1);
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);

head.next=firstNode;
firstNode.next=secondNode;
secondNode.next=thirdNode;

//insertion at the beginning
/*function insertNodeInBeginning(key)
{
    let newNode = new Node(key);
    newNode.next = head;
    head=newNode
}

insertNodeInBeginning(22)
insertNodeInBeginning(11)*/

//insertion at specific point
/*function insertAtSpecificPoint(prevNode, data)
{
    let newNode = new Node(data);
    
    newNode.next=prevNode.next;
    prevNode.next=newNode
}

insertAtSpecificPoint(secondNode,66)*/

//insertion at the end
/*function insertAtTheEnd(data)
{
    let newNode = new Node(data)
    let current=head;
    while(current.next!=null)
        current=current.next

    current.next=newNode;

}

insertAtTheEnd(45)*/

//Inerstion at specific point

function insertAtSpecificPointWithoutPos(data, index)
{
    let newNode = new Node(data);

    let counter=index-1;
    let current=head;
    while(counter>0)
    {
        current=current.next;
        counter--;
   
    }
    newNode.next=current.next;
    current.next=newNode;


}
 
insertAtSpecificPointWithoutPos(78,3)

function printList(head)
{
    let p = head;
    while(p!=null)
    {
        console.log(p.data)
        p=p.next;
    }
    
}

printList(head)

//TC for inserting at the beginning is O(1)
//SC for inserting at the beginning is O(1)


//TC for inserting at specific point is O(1)
//SC for inserting at specific point is O(1)

//TC for inserting at the end is O(n)
//SC for inserting at the end is O(1)