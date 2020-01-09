import { createContext } from 'react'
import axios from 'axios'

const RequestContext = createContext(axios)

const RequestProvider = RequestContext.Provider

export {
  RequestContext as default,
  RequestProvider
}
