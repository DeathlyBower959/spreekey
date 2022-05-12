import Axios from 'axios'
import config from '../config'

const AUTH_PARAMS = {
  key: process.env.REACT_APP_TRELLO_API_KEY,
  token: process.env.REACT_APP_TRELLO_API_TOKEN,
}

export const getTrelloListsForBoard = async (
  userID = config.trello_username
) => {
  if (!userID) return console.error('Missing userID')

  try {
    const res = await Axios.get(
      `${config.trello_api_endpoint}/boards/${config.trello_board_id}/lists`,
      {
        params: AUTH_PARAMS,
      }
    )

    return res
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js

      return error.request
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
      return error
    }
  }
}

export const getTrelloCardsForBoard = async (
  userID = config.trello_username
) => {
  if (!userID) return console.error('Missing userID')

  try {
    const res = await Axios.get(
      `${config.trello_api_endpoint}/boards/${config.trello_board_id}/cards`,
      {
        params: AUTH_PARAMS,
      }
    )

    return res
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return error.response
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js

      return error.request
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
      return error
    }
  }
}

export const getTrelloData = () => {
  return new Promise(async (resolve, reject) => {
    const lists = await getTrelloListsForBoard()
    const cards = await getTrelloCardsForBoard()

    if (!lists || !cards) reject('Error fetching Trello data')

    let formattedLists = {}

    lists.data.forEach(list => {
      formattedLists[list.id] = {
        id: list.id,
        name: list.name,
        cards: [],
      }
    })

    cards.data.forEach(card => {
      formattedLists[card.idList].cards.push({
        id: card.id,
        name: card.name,
        description: card.desc,
        url: card.url,
        labels: card.labels,
        due: card.due,
        dueComplete: card.dueComplete,
      })
    })

    resolve(formattedLists)
  })
}
