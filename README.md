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
1. Singly Linked List :- Nodes & Linked List.
                         Class Node{
                           constructor(val){
                             this.val = val;
                             this.next = null;
                           }
                         }

                        Class SinglyLinkedList{
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
                        }
