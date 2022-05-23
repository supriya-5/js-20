//promises - promises are used to handle asynchronous operation in javascript. they are easy to manage when dealing with multiple asynchronous operations where multiple callbacks can create callback hells leading to unmanageable code.

// this doesn't means that promises are only used for avoiding callback hells,instead are often for handling asynchronous operations.

//promises takes two executor functions as parameters, namely resolve and reject. if the data is fetched correctly then the control is passed to resolve method which in turn calls the .then() method, but if the data isn't fetched for some reasons i.e. there is an error, then the reject method is called which further calls the .catch() method.

//there are three stages in promises:

//1.Pending - when the promise is still executing i.e.not yet resolved or rejected are called pending stage.

//2.resolved/fulfilled- when the promise is resolved or have fetched the data correctly, it ends up being resolved state.

//3.rejected - when the promise fails in fetching the result, it ends up being rejected state.

//promise creation
const getEmployeeID = new Promise((resolve, reject) =>{
    setTimeout(() => {
        let id = [1,2,3,4,5]
        resolve(id);
        // reject("The data isn't found")
    }, 2000);

})

const getEmployeeDetails = (data) =>{
   return new Promise((resolve, reject) =>{
    setTimeout ((data) => {
        let employeeDetails = {
            name : "durga",
            age : 23
        }
        console.log(data);
        resolve(`The name of the employee is ${employeeDetails.name} an the age is ${employeeDetails.age}`);

    }, 3000, data);
   })
}


//promise consuming - used for consumption of promise
// getEmployeeID
//    .then((id) =>{
//      console.log(id);
     
//      getEmployeeDetails("Hi").then((data) =>{
//          console.log(data);
//      })
//  })
//     .catch((err) =>{
//         console.log("Error message: ", err);
//  })
// //     .finally(() =>{
//         console.log("End of program");
//  }) // finally - something that execute at the end.


//promise chaining

let promise = new Promise((resolve, reject) =>{
    resolve();
})

promise.then(() =>{
    setTimeout(() => {
        console.log("first call");
        
    }, 1000);
}).then(() =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            console.log("second call")
            resolve();
        }, 3000);
    })
}).then(() =>{
    setTimeout(() => {
        console.log("third call");
    }, 2000);
})