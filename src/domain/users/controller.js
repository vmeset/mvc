const userModel = require('./model')

module.exports = {
  getAll: (req, res) => {
    return res.render('users.hbs', {
      users: userModel.getAll()
    })
  },
  create: (req, res) => {
    try {
      const {username, age} = req.body
      if(!username || !age) {
        throw new Error('all fields required')
      }
      userModel.create({username, age})
      // return res.redirect('/users')
      return res.render('error.hbs', {
        message: `welcome ${username}`
      })
    } catch(e) {
      return res.render('error.hbs', {
        message: e.message
      })
    }
  },
  // delete: (req, res) => {
  //   try {
  //     const id = req.query
  //     userModel.removeById({id})
  //     return res.render('error.hbs', {
  //       message: `user with id ${id} was deleted`
  //     })
  //   } catch(e) {
  //     return res.render('error.hbs', {
  //       message: e.message
  //     })
  //   }
  // }
  delete: (req, res) => {
    try {
        const id = req.query.id;

        if(!id) {
            throw new Error('id не указан');
        }

        userModel.removeById({ id })

        // return res.render('users.hbs', {
        //     users: userModel.getAll()
        // })
        return res.render('error.hbs', {
          message: `user with id ${id} was deleted`
        })
    } catch (e) {
        return res.render('error.hbs', {
            message: e.message
        });
    }
  }
}