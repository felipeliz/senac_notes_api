import Note from '../models/Note';

module.exports = {

    async list(req, res) {     
        const noteList = await Note.findAll({
            include: [
                { association: 'user' }
            ],
        });

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: noteList
            }
        )
    },

    async show(req, res) {     
        const noteId = req.params.id;
        const note = await Note.findByPk(noteId);

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },

    async store(req, res) {
        const obj = {
            userId: req.body.userId,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date,
        }

        console.log('1. obj', obj);

        const note = await Note.create(obj);

        console.log('2. note', obj);

        console.log('3. res', {
            timestamp: Date.now(),
            ok: true,
            data: note
        });

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },

    async update(req, res) {
        const noteId = req.params.id;
        console.log('1. id', noteId);

        const obj = {
            userId: req.body.userId,
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            date: req.body.date,
        }

        const note = await Note.update(obj, { where: { id: noteId }});

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },

    async delete(req, res) {
        const id = req.params.id;
        
        const note = await Note.destroy({ where: { id: id }});

        return res.status(200).json(
            {
                timestamp: Date.now(),
                ok: true,
                data: note
            }
        )
    },
};