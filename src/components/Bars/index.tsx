import * as React from 'react'


type BarsProps = {
    data:number[],
    limit: number
}

const Bars: React.FunctionComponent<BarsProps> = (props) => {
        return <ul className='progress'>
            {props.data.map((v, i) => {
                return <li key={i} className='progress__item'>
                    <span className='progress--bar'
                          style={{
                              width: Math.min(300, 300 * v / 100),
                              background: v > props.limit ? 'red' : 'aqua'
                          }}></span>
                    <span className='progress--text'>{v}</span>
                </li>
            })}
        </ul>

}

export default Bars
