import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

export default class Single extends Component {
  render () {
    const postId = this.props.params.postId
    const index = this.props.posts.findIndex((post) => post.code === postId)
    const post = this.props.posts[index]
    const postComments = this.props.comments[postId] || []
    return (
      <div className='single-photo'>
        <Photo i={index} post={post} {...this.props}/>
        <Comments postComments={postComments} {...this.props}/>
      </div>
    )
  }
}
