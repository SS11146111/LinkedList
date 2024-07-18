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

function printList()
{
    let p = head;
    while(p!=null)
    {
        console.log(p.data)
        p=p.next;
    }
    
}

//Deletion from beginning of LL
/*function deleteBeginning()
{

    if(head==null)
        {
            console.log("List is empty")
        }
        else
        {
            temp=head;
            head=head.next;
            temp=null;
        }
}


function printList()
{
    let p = head;
    while(p!=null)
    {
        console.log(p.data)
        p=p.next;
    }
    
}

deleteBeginning()
printList()
console.log("-------------------------")
deleteBeginning()
printList()
console.log("-------------------------")
deleteBeginning()
printList()
console.log("-------------------------")
deleteBeginning()
printList()
console.log("-------------------------")
deleteBeginning()
printList()
console.log("-------------------------")*/

//TC: O(1)
//SC: O(1)


//Deletion at the end
/*function deleteEnd()
{
    if(head == null)
    {
        console.log("List is empty")
        return
    }
    
    if(head.next==null)
    {
        head=null
        return
    }
    
        let current = head
        while(current.next.next != null)
            current=current.next;
        let temp=current.next;
        current.next=null;
        temp=null;

    
}



deleteEnd()
printList()
console.log("-------------------------")

deleteEnd()
printList()
console.log("-------------------------")

deleteEnd()
printList()
console.log("-------------------------")

deleteEnd()
printList()
console.log("-------------------------")

deleteEnd()
printList()
console.log("-------------------------")*/

//TC:Avg/Worst case - O(n)
//TC:Best Case - one node in LL/ LL empty - O(1)
//SC:O(1)

//Deletion at an index
function deleteAtIndex(index)
{
    let d = head;
    index=index-1;
    while(index>0)
    {
        d=d.next;
        index--;
    }

    d1=d.next;
    d.next=d1.next;
    d1.next=null
}

deleteAtIndex(3)

printList()

