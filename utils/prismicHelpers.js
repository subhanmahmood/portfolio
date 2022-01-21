// ~/utils/prismicHelpers.js
import * as prismic from '@prismicio/client'
import Link from 'next/link'
import {
  apiEndpoint,
  accessToken,
  linkResolver,
  Router
} from '../prismicConfiguration'

// Helper function to convert prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link
    key={index}
    href={linkResolver(element.data)}
  >
    <a>{content}</a>
  </Link>
)

// -- @prismicio/client initialisation
// Initialises the prismic Client that's used for querying the API and passes it any query options.
export const Client = prismic.createClient(apiEndpoint)

// Options to be passed to the Client
const createClientOptions = (req = null, prismicAccessToken = null, routes = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  const routesOption = routes ? { routes: Router.routes } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
    ...routesOption,
  }
}


export default Client