const User = require('../models/user')


// Display list of all users
exports.user_list = async (req, res) => {
    const users = await User.find()
    try {
        if (users.length === 0) {
            return res.send('No users found')
        }
        res.send(users)
    } catch (error) {
        res.status(500).send('Error\n' + error)
    }
}

// Handle user create on POST
exports.user_create_post = async (req, res) => {
    const username = req.body.username
    const user = new User({ username })
    try {
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send('Error\n' + error)
    }
}

// Handle user delete on DELETE
exports.user_delete_delete = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.findByIdAndRemove(id)
        res.send('The following User: ' + user.username + ' has been removed!')
    } catch (error) {
        res.status(500).send('Error(s)\n' + error)
    }
}
