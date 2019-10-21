import * as React from 'react'

interface ButtonsProps {
    data:number[],
    onClick: (v:number) => void
}

const  Buttons: React.FunctionComponent<ButtonsProps> = (props) => {
 
            return  <ul className='bars'>
                {props.data.map((v, i) => {
                    return <button key={i} onClick={() => props.onClick(v)}>{v}</button>
                })}
            </ul>
        
}

export default Buttons
