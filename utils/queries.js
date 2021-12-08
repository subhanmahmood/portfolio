import Client from './prismicHelpers'
import Prismic from '@prismicio/client'

export async function fetchBlogPosts() {
    return await Client().query(
        Prismic.Predicates.at("document.type", "blog")
    )
}

export async function fetchBlogPost(uid) {
    return await Client().getByUID("blog", uid)
}
