import React from 'react'


interface SelectPropsType {
    data: number[],
    onChange: (e: React.ChangeEvent) => void
}

const  Select: React.FunctionComponent<SelectPropsType> = (props) => {
        return  <select onChange={props.onChange}>
            {props.data.map((v,i) => <option key={i} value={i}>progress{i+1}</option>)}
        </select>

}

export default Select