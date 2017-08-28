const userData = require('./../userData.json');

module.exports = {
  getUsers: (req, res)=>{
    res.status(200).send(userData.filter(userData=>{
      if(req.query.age){
        return userData.age < req.query.age
      }
      if(req.query.lastname){
        return userData.last_name == req.query.lastname
      }
      if(req.query.email){
        return userData.email == req.query.email
      }
      if(req.query.favorites){
        return userData.favorites.includes(req.query.favorites)
      }
      return userData
    }))
  },
  getUser: (req, res)=>{
    const user = userData.filter(userData=>{
      return userData.id == req.params.id
    })
    if(user[0]){
      res.status(200).send(user[0])
    } else res.status(404).json(null)
  },
  getAdmins: (req, res)=>{
    res.status(200).send(userData.filter(userData=>{
      return userData.type == 'admin'
    }))
  },
  getNonAdmins: (req, res)=>{
    res.status(200).send(userData.filter(userData=>{
      return userData.type != 'admin'
    }))
  },
  getUserByType: (req, res)=>{
    res.status(200).send(userData.filter(userData=>{
      return userData.type == req.params.userType
    }))
  },
  updtateUser: (req, res)=>{
    const copy = userData.filter(userData=>{return userData.id == req.params.id});
    const user = copy[0]
    user.first_name = req.body.first_name 
    user.last_name = req.body.last_name
    user.email = req.body.email
    user.gender = req.body.gender
    user.language = req.body.language
    user.age = req.body.age
    user.city = req.body.city
    user.state = req.body.state
    user.type = req.body.type
    user.favorites = req.body.favorites
    res.status(200).send(user);
  },
  createUser: (req, res)=>{
    const users = userData;
    const user = {};
    user.id = userData.length + 1
    user.first_name = req.body.first_name 
    user.last_name = req.body.last_name
    user.email = req.body.email
    user.gender = req.body.gender
    user.language = req.body.language
    user.age = req.body.age
    user.city = req.body.city
    user.state = req.body.state
    user.type = req.body.type
    user.favorites = req.body.favorites
    userData.push(user)
    res.status(200).send(userData);
  },
  deleteUser: (req, res)=>{
    userData.splice(req.params.id - 1, 1)
    res.status(200).send(userData);
  }

  }

