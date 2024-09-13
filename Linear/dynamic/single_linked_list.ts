class Link<T> {
  next: Link<T> | null = null;
  constructor(public data: T) {
    this.data = data;
  }
}
export class SingleLinkedList<T> {
  head: Link<T> | null = null;
  append(value: T) {
    const newLink = new Link(value);
    if (this.head === null) {
      this.head = newLink;
      return newLink;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newLink;
    return newLink;
  }
  prepend(value: T) {
    const newLink = new Link(value);
    newLink.next = this.head;
    this.head = newLink;
    return newLink;
  }

  insertAt(value: T, index: number) {
    const newLink = new Link(value);
    let current = this.head;
    let i = 0;
    while (current !== null && i < index - 1) {
      current = current.next;
      i++;
    }
    if (current === null) {
      console.log("Index out of range");
      return null;
    }
    newLink.next = current.next;
    current.next = newLink;
    return newLink;
  }
  remove(value: T) {
    let current = this.head;
    if (current === null) {
      console.log("List is empty");
      return null;
    }
    if (current.data === value) {
      this.head = current.next;
      return current;
    }
    while (current.next !== null && current.next.data !== value) {
      current = current.next;
    }
    if (current.next === null) {
      console.log("Value not found");
      return null;
    }
    const link = current.next;
    current.next = current.next.next;
    return link;
  }
  removeAt(index: number) {
    let current = this.head;
    let i = 0;
    if (current === null) {
      console.log("list is empty");
      return null;
    }
    if (index === 0) {
      this.head = current.next;
      return current;
    }
    while (current.next !== null && i < index - 1) {
      current = current.next;
      i++;
    }
    if (current.next === null) {
      console.log("Index out of range");
      return null;
    }
    const link = current.next;
    current.next = current.next.next;
    return link;
  }
  sort() {
    let current = this.head;
    if (current === null) {
      console.log("List is empty");
      return null;
    }
    while (current !== null) {
      let innerCurrent = current.next;
      while (innerCurrent !== null) {
        if (current.data > innerCurrent.data) {
          let temp = current.data;
          current.data = innerCurrent.data;
          innerCurrent.data = temp;
        }
        if (innerCurrent.next === null) {
          break;
        }
        innerCurrent = innerCurrent.next;
      }
      current = current.next;
    }
  }
  reverse() {
    let current = this.head;
    if (current === null) {
      console.log("List is empty");
      return null;
    }
    let prev = null;
    let next = null;
    
  }
  isThere(value: T) {
    let current = this.head;
    if (current === null) {
      console.log("Empty list");
      return;
    }
    let i = 0;
    while (current !== null) {
      if (current.data === value) {
        return i;
      }
      current = current.next;
      i++;
    }

    return;
  }
  rip(value: T) {
    let current = this.head;
    if (current === null) {
      console.log("list is empty");
      return;
    }
    while (current !== null) {
      if (current.data === value) {
        current.next = null;
        break;
      }
      current = current.next;
    }
    if(current===null){
      console.log(`${value} not found`)
      return
    }
  }
  strip(value:T){
    let current=this.head
    if(current===null) return  
    while(current!==null){
      if(current.data===value) break;
      current= current.next
    }
    if(current===null)return 
    this.head=current
    return
  }
  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

}
const list = new SingleLinkedList<number>();
console.log(list.append(100));
list.append(50);
list.append(75);
list.append(25);
list.prepend(1000);
console.log(`value present at index : ${list.isThere(0)}`);
list.sort();

list.print();

