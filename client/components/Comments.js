import React, { Component } from 'react'

export default class Comments extends Component {
  constructor (props) {
    super(props)
    this.renderComment = this.renderComment.bind(this)
  }
  renderComment (comment, i) {
    return (
      <div className='comment' key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment' onClick={this.props.removeComment.bind(this, this.props.params.postId, i)}>
            ×
          </button>
        </p>
      </div>
    )
  }
  handleSubmit (event) {
    event.preventDefault()
    const { postId } = this.props.params
    const author = this.refs.author.value
    const comment = this.refs.comment.value
    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }
  render () {
    return (
      <div className='comments'>
        {this.props.postComments.map(this.renderComment)}
        <form ref='commentForm' className='comment-form' onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='author' ref='author' />
          <input type='text' placeholder='comment' ref='comment' />
          <input type='submit' hidden />
        </form>
      </div>
    )
  }
}
