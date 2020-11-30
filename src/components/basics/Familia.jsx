import React from 'react';

export default props => {
    console.dir(props)
    return (
        <div>
            {/* {React.Children.map(props.children, element => {
                return React.cloneElement(element, props)
            })} */}
            {props.children.map((child, index) => {
                return React.cloneElement(child, {...props, key: index})
            })}
        </div>
    )
}