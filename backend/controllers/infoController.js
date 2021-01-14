const Info = require('../models/info')


// Display list of all infos
exports.info_list = async (req, res) => {
    const infos = await Info.find()
    try {
        if (infos.length === 0) {
            return res.send('No info found')
``      }
        res.send(infos)
    } catch (error) {
        res.status(500).send('Error\n' + error)
    }
}

// Handle info create on POST
exports.info_create_post = async (req, res) => {
    const username = req.body.username
    const description = req.body.description
    const date = Date.parse(req.body.date)
    const info = new Info({
        username,
        description,
        date
    })
    try {
        await info.save()
        res.status(201).send('New info has been added: ' + info.description.slice(0, 15) + '...')
    } catch (error) {
        res.status(400).send('Error\n' + error)
    }   
}

// Handle Info update on PATCH
exports.info_update_patch = async (req, res) => {
    const updates = Object.keys(req.body)
    try {
        const _id = req.params.id
        const info = await Info.findOne({ _id })
        if (!info) {
            return res.status(404).send('Info not found')
        }
        updates.forEach((update) => {
            info[update] = req.body[update]
        })
        await info.save('The info has been updated: ' + info.description.slice(0, 15) + '...')
        res.send()
    } catch (error) {
        res.status(400).send('Error(s)\n' + error)
    }
}

// Handle Info delete on DELETE
exports.info_delete_delete = async (req, res) => {
    const id = req.params.id
    try {
        const info = await Info.findByIdAndRemove(id)
        res.send('The following info has been deleted\n' + info.description)
    } catch (error) {
      res.status(500).send('Error(s)\n' + error)
    }
}