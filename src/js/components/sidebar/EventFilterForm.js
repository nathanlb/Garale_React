import React, {Component} from 'react'
import '../../../css/EventFilterForm.css'

export default class EventFilterForm extends Component {

  constructor() {
    super()
    this.colors = {
      "Fitness": "#f352a3",
      "Environmental": "#67d414",
      "Culture": "#46648f",
      "Entertainment": '#52c3f4',
      "Food&Drink": "#fdd501",
    }
  }

  readableTimestamp = (ts) => {
    var date = new Date(ts)
    return date.toString().substring(0, 21)
  }

  render() {
    return(
      <div id="event-filter-container">
        <form>
          <input type='checkbox' name='fitness' value='fitness' /> Fitness
          <input type='checkbox' name='environmental' value='environmental' /> Environmental
        </form>
      </div>
    )
  }
}