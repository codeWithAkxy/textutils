import React from 'react'

export default function Alert(props) {

    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '40px'}}>
       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)} : {props.alert.msg}</strong>
        </div>}
        </div>
    )
}
