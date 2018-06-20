import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { fetch } from '../../actions'
import { oddSelector } from '../../selectors'

import Post from './Post'
import './style.css'

class ListContainer extends Component {
  // make fetch request by dispatching action
  componentDidMount() {
    this.props.fetch()
  }

  render () {
    const { oddList } = this.props
    const domOddList = oddList.map(ele => {
      return (
        <Post {...ele} />
      )
    })
    return (
      <div className="list-container">
        <h1>OddList</h1>
        <ol>
          {domOddList}
        </ol>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  oddList: oddSelector(state),
})

const mapDispatchToProps = {
  fetch,
}

ListContainer.propTypes = {
  oddList: PropTypes.array.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListContainer)
