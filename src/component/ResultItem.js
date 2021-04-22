import React from 'react';
import Toast from 'react-bootstrap/Toast'

export default function ResultItem(props){
    return (
        <Toast 
            style={{
                width: '280px', 
                marginTop: '8px', 
                backgroundColor: "rgba(255, 255, 255, 0.6)", 
                boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.05)"}}> 
            <Toast.Header 
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)"}}
                    closeButton={false}>
                <strong className="mr-auto">{props.name}</strong>
                <small>{props.itemdefault}{props.unit}</small>
            </Toast.Header>
            <Toast.Body 
                style={{
                    color: "#3B87CE", 
                    fontSize: "large", 
                    fontWeight: "bold"}}>
                ${props.amount}
            </Toast.Body>
        </Toast>
    )
}