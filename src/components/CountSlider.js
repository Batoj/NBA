import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: this.props.defaultValue,
    };

    handleChange = (inputValue) => {
        console.log('CountSlider update');
        this.setState({ inputValue });
        this.props.handleMinCountChange(inputValue);
    };

    render() {
        const { inputValue } = this.state;
        return (
            <Row>
                <Col span={12}>
                    <Slider
                        min={1}
                        max={20}
                        onChange={this.handleChange}
                        value={typeof inputValue === 'number' ? inputValue : 0}
                    />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                </Col>
            </Row>
        );
    }
}