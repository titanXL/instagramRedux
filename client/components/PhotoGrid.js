import React, { Component } from 'react'
import { Link } from 'react-router'
import Photo from './Photo'
export default class PhotoGrid extends Component {
  render () {
    return (
      <div className='photo-grid'>
      {this.props.posts.map((post, i) => (
        <Photo key={i} {...this.props} i={i} post={post}/>
      ))}
      </div>
    )
  }
}
