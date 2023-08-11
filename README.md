# Weather-web-app
This repository hosts the codebase for Weather Web App built using React and TypeScript

Problem Solving Patterns:-
1. Frequency Counter Pattern :- Create an Object and store the DataStructures(Arrays) item's as Keys and their frequency in DS as Values.
2. Multiple Pointers Pattern :- While iterating over a DS create two variables that act as pointers which iterate over DS at different pace.
3. Sliding Window Pattern :- Create a subArray of an Array as an window and remove the first item and add the current item to the subArray as it iterates over the SubArray.
4. Divide & Conquer Pattern :- Create a left pointer & right pointer that starts from the last index of an array, calculate the middle index and compare the value of middle index and the provided value and change the pointer accordingly.

Algorithms:-
1. Recursion :- Recursion basically means calling a function inside itself with reduced data set. Two main requirements for Recursion are 1. Base Condition 2. Calling Function with Reduced Data.
2. Searching Algorithms:- Linear Search(Iterating through the DS), Binary Search(Using Multiple Pointer Pattern)
3. Sorting Algorithms :- Bubble Sort(Swap the Current item in the DS with the next item and swap them if the current is larger than the next item).
                         Selection Sort()

Data Structures:-
1. Singly Linked List :-Nodes & Linked List.

                          class Node{
                           constructor(val){
                             this.val = val;
                             this.next = null;
                           }
                         }

                        class SinglyLinkedList{
                           constructor(){
                               this.head = null;
                               this.tail = null;
                               this.length = 0;
                            }

                           push(val){
                               const newNode = new Node('TestVal');
                               if(!this.head){
                                 this.head = newNode;
                                 this.tail = this.head;
                                }
                               else{
                                 this.tail.next = newNode;
                                 this.tail = newNode;
                                }
                                this.length++;
                            }

                          traverse(){
                            let current = this.head;
                            while(current){
                               console.log(current.val);
                               current = current.next;
                            }
                           }

                          reverse(){
                            let node = this.head;
                            this.head = this.tail;
                            this.tail = node;
                            let prev = null;
                            let next;

                            for(let i = 0; i < this.lenght; i++){
                              next = node.next;
                              node.next = prev;
                              prev = node;
                              node = next
                            } 
                        }
                        }

2. Stack:-
   1) Array Implementation & use methods as Push and Pop.
   2) Nodes Implementation like Singly Linked List

                class Node{
                  constructor(value){
                    this.value = value;
                    this.next = null;
                  }
                }

                class Stack{
                  constructor(){
                    this.first = null;
                    this.last = null;
                    this.size = 0;
                  }

                push(val){
                  const newNode = new Node(val);
                  if(!this.first){
                    this.first = newNode;
                    this.last = newNode;
                  }
                  else{
                    const temp = this.first;
                    this.first = newNode;
                    this.first.next = temp;
                }
              return ++this.size;
              }

              pop(){
                const temp = this.first;
                if(!this.first) return null;
                if(this.first === this.last){
                    this.last = null;
                  }
                this.first.next = this.first;
                this.size--;
                return temp.value;
              }
            }

3. Queue:-
   1) Array Implementation
   2) Node Class like Singly Linked List:-
      
            class Node{
                constructor(value){
                    this.value = value;
                    this.next = null;
                }
            }

            class Queue{
                constructor(){
                    this.first = null;
                    this.last = null;
                    this.size = 0;
                }
  
                enqueue(val){
                    const newNode = new Node(val);
                    if(!this.first){
                        this.first = newNode;
                        this.last = newNode;
                    }
                    else{
                        this.last.next = newNode;
                        this.last = newNode;
                    }
                    return ++this.size;
                }
            }
