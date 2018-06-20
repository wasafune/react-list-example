import React, { Component } from 'react'
import axios from 'axios'

class ListContainer extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
  }

  render () {
    return (
      <div className="list-container">
        this is List Container
      </div>
    )
  }
}

export default ListContainer
