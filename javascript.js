// 1.Read two numbers and display their sum.

function Sum(){
    var a = prompt("Enter value for a");
    var b = prompt("Enter value for b");
    var sum = parseInt(a) + parseInt(b);
    console.log(a);
    console.log(b);
    console.log("The sum of "+a+"and"+b+"is: " +sum );
    alert(sum);
}

// 2.Read two numbers and display the larger number.

/*function Larger(){
    var a = prompt("Enter value for a");
    var b = prompt("Enter value for b");
    var Larger = Math.max(a,b);
    console.log(a);
    console.log(b);
    console.log(Larger)
    alert(Larger);
}*/
function Larger(){
    var a = prompt("Enter value for a");
    var b = prompt("Enter value for b");
    if(a>=b){
        largest = a;
    }
    else{
        largest = b;
    }
    console.log(a);
    console.log(b);
    console.log("The largest number is" + largest);
    alert(+largest);
}

// 3.Read two numbers and display in acending order

function Ascending(){
    var numbers = [prompt("Enter first number"),prompt("Enter second number")];
    numbers.sort()
    console.log(numbers);
    alert(numbers);
}

// 4.Use a loop to display the numbers 0 through 5

function Loop(){
    for(var startCount = 0; startCount <= 5; startCount++){
        console.log("Disply the numbers", startCount);
    }
}

// 5.Use a loop to display the integers 9 through 0 in descending order

function descending(){
    for(var startCount = 9; startCount >= 0; startCount--){
        console.log("Disply the numbers", startCount);
    }
}

// 6.Use a loop to display the numbers in range of 0 to 20 that are multiples of 3

function multiply3(){
    for(var startCount = 0; startCount <= 20; startCount++){
        if(startCount % 3 === 0){
            console.log(startCount, "Multiplys of 3")
        }
    }
}

// 7.Use a loop to disply the numbers in the range 0 to 100 that are prime numbers

function primeNumbers(){
    var count = 0 ;
    var i,j;
    for(j=2; j<=100; j++){
        for(i=1; i<=j; i++){
            if(j%i== 0)
            count++
        }
        if ( count==2)
        console.log(j)
        count=0
    }
}

// 8. Read a name and display it in reverse format (palindrome)

function palindrome(){
    var name = prompt("Please enter a name");
    var strLen = name.length;
    var revStr = '';
    for(var i = strLen-1;i>=0;i--){
        revStr += name[i];
    }
    console.log(name);
    console.log("resverse is",revStr);
}

// 9.Read a number and convert it from Celsius to Fahrenheit

function Celsius_to_Fahrenheit(){
    var Celsius =  prompt("Please enter value");
    var Fahrenheit = (Celsius * 1.8)+32;
    alert(Fahrenheit);
    console.log("Celsius",Celsius);
    console.log("Fahrenheit",Fahrenheit);
}

// 10.Write a javascript program to display the current day and time on button click

function Day_and_time(){
    var today = new Date();
    var day = today.getDay();
    var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    console.log("Today is :" + dayList[day],"Current Time is :" + hour+":"+minute+":"+second);
    alert("Today is :" + dayList[day]+"    "+"Current Time is :" + hour+":"+minute+":"+second);
}