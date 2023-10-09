import inquirer from 'inquirer'

const todos:string[]=[];
let loop:boolean =true;

interface ansType{
    TODOS:string,
    addTODOS:boolean
}
while (loop) {
    
    const answers :ansType = await inquirer.prompt([{
     type:"input",
     name:"TODOS",
     message:"what TODOS you want to add? "
    },
    {
        type:"confirm",
        name:"addTODOS",
        mesage:"Do you want add more todos? ",
        default:false
    }
])
const {TODOS,addTODOS}=answers;
// console.log(answers)
loop=addTODOS;
if (TODOS) {
    todos.push(TODOS)

} else {
   console.log("Kindly add TODOS"); 
}
}
if (todos.length>0) {
    console.log("your TODO list :")
    todos.forEach(todos=>{
        console.log(todos)
    })
} else {
    console.log("No TODOS found");
}
// console.log(todos)