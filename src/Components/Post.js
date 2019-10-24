import React, {Component} from 'react'
import {connect} from "react-redux"
import {deletePost } from "../ActionCreators/ActionCreators.js"
class Post extends Component{
   
   render(){
     
    const {post} = this.props

    const handleClick = () =>{
        this.props.deletePost(post.id)
        this.props.history.push("/produtos")
    }
 
        const postLoaded = post ? (
        <div key = {post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <button onClick={handleClick}>Delete Post</button>
        </div>
    ) : (
        <div>
        <h1>Post Loading...</h1>
        </div>
        
    )

    return (
      <div>
        {postLoaded} 
        </div>
        
    )
   }
} 

const mapStateToProps = (state, componentProps) =>{
    let id = componentProps.match.params.post_id
    return{
        post:state.posts.find(post => post.id == id)
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deletePost: (id) => (dispatch(deletePost(id)))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)