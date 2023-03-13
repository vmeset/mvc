let users = [
  {id: 1, username: 'AA', age: '37'},
  {id: 2, username: 'FX', age: '33'},
  {id: 3, username: 'XL', age: '88'},
]

module.exports = {
  create: ({username, age}) => {
    return users.push({username, age, id: Date.now()})
  },
  // removeById: ({id}) => {
  //   const index = users.findIndex(user => user.id == id)
  //   if(!index) {
  //     return console.log('errorka')
  //   }
  //   return users.splice(index, 1)
  // },
  getAll: () => {
    return users
  },
  getById: ({id}) => {
    return users.find(user => id === user.id)
  },
  removeById: ({ id }) => {
    const userIndex = users.findIndex(user => user.id == id);
  
    if(userIndex === -1) {
        throw new Error('Пользователь не найден')
    }
    users.splice(userIndex, 1)
  
    return id
  },
}