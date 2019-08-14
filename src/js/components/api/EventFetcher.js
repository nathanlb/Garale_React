import React from 'react'
import Events from '../../../../sampledata/sampledata'

export default class EventFetcher {

  getEvents = (filters) => {
    const selectEvents = Events.filter(e => {
      let match = true
      if (filters.categories.length > 0){
        match = filters.categories.includes(e.category)
      }
      if (filters.searchString.length > 0){
        match = (e.title.toLowerCase().search(filters.searchString.toLowerCase()) >= 0)
      }
      return match
    })
    return selectEvents
  }
  
}