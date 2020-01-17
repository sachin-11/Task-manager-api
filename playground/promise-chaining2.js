require('../src/db/mongoose')

const Tasks = require('../src/models/tasks')




// Tasks.findByIdAndUpdate('5e1ad941454dd91884bfdcd7', {completed: true}).then((task) =>{
//     console.log(task)
//     return Tasks.countDocuments({completed: true})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })


// Tasks.findByIdAndDelete('5e1ad941454dd91884bfdcd7').then((task) =>{
//     console.log(task)
//     return Tasks.countDocuments({completed: true})
// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })


const upDeleteAndCount = async(id) => {
    const task = await Tasks.findByIdAndDelete(id)
    console.log(task)
    const count = await Tasks.countDocuments({completed: false})

    return count
}

upDeleteAndCount('5e1b02d147759619a8f3c67b').then((count) =>{
    console.log(count)
}).catch((e) =>{
    console.log(e)
})
