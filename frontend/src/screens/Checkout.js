import React from 'react'

export default function Checkout(props) {

    React.useEffect(() => {
            alert('thanks for shopping')
            props.history.push('/');
    })
    return (
        <div>
                
        </div>
    )
}
