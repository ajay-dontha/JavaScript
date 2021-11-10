//if condition
console.log("if condition:");
var a=18; 
if(a>=18)
{
  console.log("Iam Eligible for Voting");
}

//if else condition
console.log("if else condition:");
var marks=75;
if(marks>=76)
{
    console.log("Fail")
} 
else{
    console.log("Pass")
}

//if else if condition
console.log("if else if condition:")

var marks=101;
 if(marks>=0&&marks<=25)
 {
     console.log("Fail");
 }
 else if(marks>=26&&marks<=70)
 {
     console.log("pass");
 }
 else if(marks>=71&&marks<=100)
 {
     console.log("distinction");
 }
else
{
  console.log("invalid marks")
}

//nested if
console.log("nested if condition:")

var score=90;
if(score>=90)
{
  console.log("First if")

    if(score>=80)
    {
      console.log("Second if")

      if(score>=70)
      {
         console.log("Score is 70")
      }
    }
}

//ladder if condition
console.log("ladder if condition:")

var number=0;
if(number>=0 && number<=10)
{
  console.log("number lies in between 0-10")
}
if(number>=11 && number<=30)
{
  console.log("number lies in between 11-30")
}
if(number>=31 && number<=50)
{
  console.log("number lies in between 31-50")
}
if(number>=51 && number<=100)
{
  console.log("number lies in between 51-100")
}