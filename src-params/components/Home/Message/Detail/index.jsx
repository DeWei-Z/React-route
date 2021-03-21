import React, { Component } from 'react'



const datas=[
    {id:'1',content:'这是第1条消息'},
    {id:'2',content:'这是第2条消息'},
    {id:'3',content:'这是第3条消息'}]
export default class Detail extends Component {
    render() {

        const {id,title}=this.props.match.params
        const findResult = datas.find((data)=>{
			return data.id === id
		})
        return (
            <ul>
                <li>ID：{id}</li>
                <li>TITILE：{title}</li>
                <li>内容：{findResult.content}</li>
            </ul>
        )
    }
}
