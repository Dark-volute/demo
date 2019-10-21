import * as React from 'react'
import './app.scss'
import Bars from './Bars/index'
import Buttons from './Buttons/index'
import Select from './Select/index'
import request from '../api/request'


export interface AppState {
    bars: number[],
    buttons: number[],
    limit: number
}


class App extends React.Component<any, AppState> {
    currentBar: number

    constructor(props) {
        super(props)
        this.state = {
            bars: [],
            buttons: [],
            limit: 0
        }
        this.currentBar = 0
    }

    componentDidMount() {
        request('http://pb-api.herokuapp.com/bars').then(res => {
            const { bars,buttons, limit } = res.data
            console.log(res.data);
            this.setState({
                bars,
                buttons,
                limit
            })
        })
    }

    click(v) {
        this.setState({
            bars: this.state.bars.map((item, index) => this.currentBar === index ? Math.max(item + v, 0) : item)
        })
    }

    change(e) {
        this.currentBar = parseInt(e.target.value)
    }

    render() {
        return this.state.bars && this.state.bars.length > 0 ? <div className='app'>
            <Bars data={this.state.bars}
                  limit={this.state.limit}/>
            <div className='wrapper'>
                <Select data={this.state.bars}
                        onChange={(e) => this.change(e)}/>
                <Buttons data={this.state.buttons}
                         onClick={(v) => this.click(v)}/>
            </div>
        </div> : null
    }
}

export default App
