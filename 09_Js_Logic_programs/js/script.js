console.log("Arithmetic operations using Functions:")

function Arithmetic(a,b)
{
    console.log("AdditionResult:"+Number(a+b))
    console.log("SubstractionResult:"+Number(a-b))
    console.log("MultiplicationResult:"+Number(a*b))
    console.log("DivisionResult:"+Number(a/b))
    console.log("ModuloDivisionResult:"+Number(a%b))
}
Arithmetic(10,20)
//////////////////////////////////////////////////////////////////
console.log("To print 5 table:")

for(var i=5;i<=50;i++)
{
    if (i%5==0) //to print 5 table
    {
      console.log("num:"+i)   
    }
}
/////////////////////////////////////////////////////////////////
console.log("To print 5 table in descending order: ")

for(var i=50;i>=5;i--)
{
    if (i%5==0) //5 table in descending order
    {
      console.log("num:"+i)  
    }
}
//////////////////////////////////////////////////////////////////
console.log("To print even numbers from 1-20:")

for(var i=1;i<=20;i++)
{
    if (i%2==0) 
    {
      console.log("num:"+i)  
    }
}
////////////////////////////////////////////////////////////////////////
console.log("To print 9 table:")

for(var i=9;i<=90;i++)
{
    if (i%9==0) 
    {
      console.log("num:"+i)  
    }
}
////////////////////////////////////////////////////////////////////
console.log("Print numbers from 1-10 using forEach:")

var num=[1,2,3,4,5,6,7,8,9,10]
num.forEach(element=>console.log(element))
///////////////////////////////////////////////////////////////////
console.log("To find lenght of array using forEach: ")

var fruits=["apple","guava","mango","orange"]
for(let i=0;i<=fruits.lenght;i++)
{
     console.log(fruits[n]);
}
fruits.forEach(element=>console.log(element))//using forEach
///////////////////////////////////////////////////////////////////
console.log("Display Even & Add number to element using forEach:")

var num=[1,2,3,4,5,6,7,8,9,10]
num.forEach(element=>{
  if(element%2==0){
    console.log(element)
  }
});
////////////////////////////////////////////////////////////////////
console.log("Display eve numbers:")

var num=[1,2,3,4,5,6,7,8,9,10]
num.forEach(element=>{
  if(element%2==0){
  console.log(element+10);
}
else{
  console.log(element)
}
});
/////////////////////////////////////////////////////////////////////
// var num=[1,2,3,4,5,6,7,8,9,10]

// var n=0;
// for(let i=0;i<num.length;i++)
// {
//   if(n<num[i]){
//     num[i];
//   }
// }
// console.log(n);

// let arr=[100,500,20,50]
// {
//   let n=0;
//   for(let i=0;i<=arr.length;i++)
//   {
//     if(n>arr[i]){
//       n=arr[i]
//     }
//   }
//   console.log("Max value:"+n)
// }


