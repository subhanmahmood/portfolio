import supabase from 'lib/db'

export default async function handler(req, res) {
    const { pid } = req.query
    if (req.method === 'POST') {
        const { data, error } = await supabase
            .from('link_clicks')
            .insert({ link_id: pid })
        if (error) {
            console.log(error)
            res.status(500).json({ error: error })
        } else {
            res.status(200).json(data)
        }
    }
}