import React, { Component } from 'react'
import {Link,Route} from "react-router-dom"
import Detail from './Detail'

export default class Message extends Component {
    
	state = {
		messageArr:[
			{id:'1',title:'消息1'},
			{id:'2',title:'消息2'},
			{id:'3',title:'消息3'},
		]
	}



	render() {
		const {messageArr}=this.state
		return (
			<div>
				<ul>
					{
                       messageArr.map(message=>{
						   return (
						       <li key={message.id}>
							      <Link to={`/home/message/detail/${message.id}/${message.title}`}>{message.title}</Link>
							   </li>
						   )
					   })
					}
				</ul>

				<Route  path='/home/message/detail/:id/:title' component={Detail}  />
			</div>
		)
	}
}
