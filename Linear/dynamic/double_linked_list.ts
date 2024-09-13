class Link<T> {
  next: Link<T> | null = null;
  prev: Link<T> | null = null;
  constructor(public value: T) {
    this.value = value;
  }
}
class DoublyLinkedList<T> {
  private head: Link<T> | null = null;
  private tail: Link<T> | null = null;
  private size = 0;
  get length() {
    return this.size;
  }
  isEmpty() {
    return this.size === 0;
  }
  append(value: T) {
    const newLink = new Link(value);
    if (this.head === null || this.tail === null) {
      this.head = newLink;
      this.tail = newLink;
      return newLink;
    }
    newLink.prev = this.tail;
    this.tail.next = newLink;
    this.tail = newLink;
    return newLink;
  }
  prepend(value: T) {
    const newLink = new Link(value);
    if (this.head === null) {
      this.head = newLink;
      this.tail = newLink;
      return newLink;
    }
    newLink.next = this.head;
    this.head.prev = newLink;
    this.head = newLink;
    return newLink;
  }
  insertAt(value:T , index:number){
    const link = new Link(value);
    if(index === 0){
      return this.prepend(value);
    }
    if(index === this.size){
      return this.append(value);
    }
    let current = this.head;
    let i=0
    while(current !== null && i<index-1){
      current = current.next;
      i++;
    }
    if(current === null){
      console.log("Index out of range");
      return null;
    }
    link.next =current.next;
    link.prev = current;
    current.next = link;
    if(link.next !== null){
      link.next.prev = link;
    }
    return link;
  }
}
const list = new DoublyLinkedList<number>();
console.log(list.isEmpty()); // true
console.log(list.length);
