import { ADD_ARTICLE, ADD_INFO } from '../constants/action-types'

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article })

export const addInfo = info => ({ type: ADD_INFO, payload: info })
