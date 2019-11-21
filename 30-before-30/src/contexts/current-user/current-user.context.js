import { createContext } from 'react'

const CurrentUserContext = createContext(undefined)
export const CurrentUserProvider = CurrentUserContext.Provider
export const CurrentUserConsumer = CurrentUserContext.Consumer

export default CurrentUserContext




