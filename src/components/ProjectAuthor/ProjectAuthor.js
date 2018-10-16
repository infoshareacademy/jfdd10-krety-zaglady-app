import React, { Component } from 'react'
import './ProjectAuthor.css'

class ProjectAuthor extends Component {



  

  render() {
    return (
     <div className="ProjectAuthor"> 
        <h1 className="ProjectAuthor-header">{this.props.name}</h1>
        
        <p className="ProjectAuthor-photo">{this.props.photo}</p>
        <img src="https://via.placeholder.com/350x150" />
     </div> 

    )
  }
}

export default ProjectAuthor
