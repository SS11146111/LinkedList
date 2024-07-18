let head = null;

class Node{
    constructor(data)
    {
        this.data = data;
        this.next = null;
    }
}

function push(data)
{
    let newNode = new Node(data);
    newNode.next=head;
    head=newNode;

}

function findMiddleLL()
{
    let counter = 1;
    let mid = head;
    while(head.next!=null)
    {
        head=head.next;
        counter++;
        if(counter%2==0)
        {
            mid=mid.next;
        }
    }

    return mid
}

for(let i=1;i<=7;i++)
{
    push(i)
}

const middleNode = findMiddleLL();

console.log(middleNode.data)
//TC: O(n)
//SC: O(1)