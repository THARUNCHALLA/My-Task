import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import Last from '../Last'

import First from '../First'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
    istrue: false,
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
    istrue: false,
  },
  {
    optionId: 'ENTERTAINMENT',
    istrue: false,
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
    istrue: false,
  },
  {
    optionId: 'TRAVEL',
    istrue: false,
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    istrue: false,
    displayText: 'Others',
  },
]

class Final extends Component {
  state = {
    final: [],
    value: '',
    select1: 'HEALTH',
    isActive: true,
    final1: [],
    id: '',
    tagsList1: tagsList,
  }

  onchange = event => {
    this.setState({value: event.target.value})
  }

  select = event => {
    this.setState({select1: event.target.value})
  }

  onclickButton = event => {
    event.preventDefault()
    const {value, select1} = this.state
    const tharun = tagsList.filter(each => each.optionId === select1)

    const add = {
      value,
      display: tharun[0].displayText,
      id: uuidv4(),
    }
    if (value !== '') {
      this.setState(prevState => ({
        final: [...prevState.final, add],
        value: '',
        select1: 'HEALTH',
      }))
    }
  }

  displayText1 = (displayText, optionId, isActive12) => {
    const {final} = this.state
    const filter1 = final.filter(each => each.display === displayText)
    this.setState(prevState => ({
      tagsList1: prevState.tagsList1.map(each => {
        if (each.optionId === optionId) {
          return {...each, istrue: !each.istrue}
        }
        return {...each, istrue: false}
      }),
    }))

    this.setState({id: optionId})

    if (!isActive12) {
      this.setState(
        {
          isActive: false,
          final1: filter1,
        },
        this.tharun,
      )
    } else {
      this.setState({isActive: true}, this.tharun)
    }
  }

  tharun = () => {
    const {isActive, final, final1} = this.state
    if (isActive) {
      this.setState({final})
    } else {
      this.setState({final1})
    }
  }

  render() {
    const {value, final, select1, isActive, final1, id, tagsList1} = this.state

    return (
      <div className="container">
        <form className="firstContainer" onSubmit={this.onclickButton}>
          <h1 className="Head">Create a task!</h1>
          <div className="labelContainer">
            <label htmlFor="text1">Task</label>
            <input
              type="text"
              id="text1"
              placeholder="Enter the task here"
              onChange={this.onchange}
              value={value}
            />
          </div>
          <ul className="labelContainer1">
            <label htmlFor="tags">Tags</label>
            <select
              className="select"
              id="tags"
              onChange={this.select}
              value={select1}
            >
              {tagsList1.map(each => (
                <option key={each.optionId} value={each.optionId}>
                  {each.displayText}
                </option>
              ))}
            </select>
          </ul>
          <button type="submit" className="button">
            Add Task
          </button>
        </form>
        <div className="secondContainer">
          <h1 className="SecHead">Tags</h1>
          <ul className="buttonContainer">
            {tagsList1.map(eachItem => (
              <First
                userItem={eachItem}
                key={eachItem.optionId}
                displayText1={this.displayText1}
                isActive12={eachItem.optionId === id}
              />
            ))}
          </ul>
          <h1 className="SecHead">Tasks</h1>
          {isActive &&
            (final.length > 0 ? (
              <ul>
                {final.map(each => (
                  <Last user={each} />
                ))}
              </ul>
            ) : (
              <div className="center">
                <p className="heading">No Tasks Added Yet</p>
              </div>
            ))}
          {!isActive &&
            (final1.length > 0 ? (
              <ul>
                {final1.map(each => (
                  <Last user={each} />
                ))}
              </ul>
            ) : (
              <div className="center">
                <p className="heading">No Tasks Added Yet</p>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Final
