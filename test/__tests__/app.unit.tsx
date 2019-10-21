// import * as rendererer from 'react-test-renderer'
import * as React from 'react'

import App from '../../src/components/app'
import {shallow} from 'enzyme'

const data = {
    bars: [20, 10, 19, 74],
    buttons: [10, 23, -20, -7],
    limit: 0
}

describe('app', () => {

    it('click successfully', () => {
        const component:any = shallow(<App/>)
        component.setState(data)
        const instance: any = component.instance()
        const spyFunction = jest.spyOn(instance, 'click');
        const currentIndex = instance.currentBar
        instance.click(data.buttons[currentIndex]);
        spyFunction.mockRestore();
        expect(data.bars[currentIndex] + data.buttons[currentIndex]).toBe(component.state().bars[currentIndex])
    })

})