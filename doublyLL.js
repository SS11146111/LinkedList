var head;

class Node{
    constructor(data)
    {
        this.data = data;
        this.previous = null;
        this.next=null;
    }
}

//to insert node in beginning of DLL
function pushNodeBeginning(data){

    let newNode = new Node(data)

    if(head==null)
    {
        head=newNode;
        return
    }

    newNode.next = head;
    head.previous = newNode;
    head=newNode;

}

function printDLL()
{
    let p = head;
    while(p!=null)
    {
        console.log(p.data)
        p=p.next;
    }

    let q = head;
    while(q.next!=null)
        q=q.next
    while(q!=null)
    {
        console.log(q.data)
        q=q.previous;

    }


    
}

pushNodeBeginning(2)
pushNodeBeginning(3)
pushNodeBeginning(4)
pushNodeBeginning(5)
printDLL()

