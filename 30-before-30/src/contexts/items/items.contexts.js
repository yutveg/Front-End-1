import { createContext } from 'react'
import ITEM_DATA from './items.data'

const ItemsContext = createContext(ITEM_DATA)

export default ItemsContext