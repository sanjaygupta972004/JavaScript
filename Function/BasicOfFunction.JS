// STRUCTURE OF FUNCTION 
//function definition
function name(parameter1,parameter2,parameter3){
    //body of function 
}
//function calling
name()


// EXAMPLE 
//function declaration
function demo(){   // demo is name of function 
    let address="delhi"  //address is a local variable which is store a string,it can be used only in body of function
    console.log(address)
}
demo()  // function calling 



//A function can access an outer variable as well
let Name= 'john'
function show(){
    let message ='hello '+'Name'
    console.log(message)
}
show()

//we can be modify outer variable in a body of function

