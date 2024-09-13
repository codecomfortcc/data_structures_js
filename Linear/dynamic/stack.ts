import { SingleLinkedList } from "./single_linked_list.ts";
class Stack<T>{
  list:SingleLinkedList<T>|null= null
  lastValue:T
  push(value:T){
    this.list?.append(value)
    this.lastValue=value
  }
  pop(){
    return this.list?.remove(this.lastValue)
    
  }
  peek(){
    return this.list?.isThere(this.lastValue)
  }
}
const stack= new Stack<number>()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.peek()
