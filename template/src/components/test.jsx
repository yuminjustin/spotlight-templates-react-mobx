import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;


function onChange(date, dateString) {
    console.log(date, dateString);
}


@observer
export default class Test extends Component {

    render() {
        return (
            <div>
                <DatePicker onChange={onChange} />
                <br /><br />
                <MonthPicker onChange={onChange} placeholder="Select month" />
                <br /><br />
                <RangePicker onChange={onChange} />
                <br /><br />
                <WeekPicker onChange={onChange} placeholder="Select week" />
            </div>
        );
    }
}
