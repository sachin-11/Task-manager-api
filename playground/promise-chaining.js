require('../src/db/mongoose')
const User = require('../src/models/user')


//5e1ad53a571d7117846b88c5



// User.findByIdAndUpdate('5e1ad77a53ded80c0c5879e4', { age: 1}).then((user) =>{
//     console.log(user)
//      return User.countDocuments({age: 1})

// }).then((result) =>{
//     console.log(result)
// }).catch((e) =>{
//     console.log(e)
// })

//5e1ad77a53ded80c0c5879e4

const updateAgeAndCount = async(id, age) =>{
    const user = await User.findByIdAndUpdate(id, {age})
     console.log(user)
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5e1ad77a53ded80c0c5879e4', 2).then((count) =>{
    console.log(count)
}).catch((e) =>{
    console.log(e)
})


