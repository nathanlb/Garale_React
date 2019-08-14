import React, {Component} from 'react'
import '../../../css/EventFilterForm.css'

export default class EventFilterForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filters: [],
    }
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

  handleCheckboxChange = (event) => {
    const target = event.target
    const value = target.checked
    const name = target.name
    const prevState = this.props.appState
    const prevCategories = prevState.filters.categories
    let categories = []

    if (value) {
        categories = [...prevCategories, name]
    }
    else {
      if (prevCategories.includes(name)){
        const index = prevCategories.indexOf(name)
        categories = prevCategories.filter((_, i) => i != index)
      }
    }

    this.props.setAppState({
      filters: {
        ...prevState.filters,
        categories: categories
      }
    })
  }

  render() {
    return(
      <div id="event-filter-container">
        <form>
          <div className='checkbox-column'>
            <label className='container'> Fitness
              <input type='checkbox' name='Fitness' onChange={this.handleCheckboxChange} />
              <span className='checkmark' />
            </label>
            <label className='container'> Environmental
              <input type='checkbox' name='Environmental' onChange={this.handleCheckboxChange} />
              <span className='checkmark' />
            </label>
          </div>
          <div className='checkbox-column'>
            <label className='container'> Entertainment
              <input type='checkbox' name='Entertainment' onChange={this.handleCheckboxChange} />
              <span className='checkmark' />
            </label>
            <label className='container'> {'Food & Drink'}
              <input type='checkbox' name='FoodnDrink' onChange={this.handleCheckboxChange} />
              <span className='checkmark' />
            </label>
          </div>
          <div className='checkbox-column'>
            <label className='container'> Culture
              <input id='culture' type='checkbox' name='Culture' onChange={this.handleCheckboxChange} />
              <span className='checkmark' />
            </label>
            <label className='container'> Free
              <input type='checkbox' name='Free' onChange={this.handleCheckboxChange} />
              <span className='checkmark' />
            </label>
          </div>
        </form>
      </div>
    )
  }
}