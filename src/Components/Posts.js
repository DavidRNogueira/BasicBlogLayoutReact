import React, {Component} from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"



class Posts extends Component{
    render(){
        const{posts} = this.props
        const postsMapped = posts.length ? 
        (
            posts.map(eachPost => 
                <div key = {eachPost.id}>
                    <Link to={"/" + eachPost.id} >
                    <h1>{eachPost.title}</h1>
                    </Link>
                    <p>{eachPost.body}</p>
                </div>
            )
        )
        :
        (
        <div><h1>No Posts Yet</h1></div>
        )
        

        return(
            
            <div>{postsMapped}</div>
            
            
        )
    }
} 
    const mapStateToProps = (state) =>{
        return {posts:state.posts}
    }


export default connect(mapStateToProps)(Posts)
