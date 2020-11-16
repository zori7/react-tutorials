import React from 'react'
import {createPost} from "../redux/actions"
import {connect} from "react-redux"

class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
    }
  }

  submitHandler = e => {
    e.preventDefault()

    const { title } = this.state

    if (!title.trim()) return

    const newPost = {
      title,
      id: Date.now().toString(),
    }

    this.props.createPost(newPost)

    this.setState({ title: '' })
  }

  changeInputHandler = e => {
    this.setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  render() {
    return (
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
                type="text"
                className="form-control"
                id="title"
                value={this.state.title}
                name="title"
                onChange={this.changeInputHandler}
            />
          </div>
          <button type="submit" className="btn btn-success">Save</button>
        </form>
    )
  }
}

const mapDispatchToProps = {
  createPost,
}

export default connect(null, mapDispatchToProps)(PostForm)
