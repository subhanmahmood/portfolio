import supabase from 'lib/db.js'

export default async function handler(req, res) {

    if (req.method === 'POST') {
        const { data, error } = await supabase
            .from('links')
            .insert([
                req.body
            ])
        if (error) {
            console.log(error)
            res.status(500).json({ error: error })
        } else {
            res.status(200).json(data)
        }
    } else if (req.method === 'GET') {
        const { data, error } = await supabase
            .from('links')
            .select()
        if (error) {
            console.log(error)
            res.status(500).json({ error: error })
        } else {
            res.status(200).json(data)
        }
    } else if (req.method === 'DELETE') {
        const { data, error } = await supabase
            .from('links')
            .delete()
            .match({ id: req.body.id })
        if (error) {
            console.log(error)
            res.status(500).json({ error: error })
        } else {
            res.status(200).json(data)
        }
    }
}