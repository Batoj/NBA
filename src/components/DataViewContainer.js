import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider } from './CountSlider';
import { Radio, Row, Col, Switch } from 'antd';
import _ from 'lodash';

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    };

    handleMinCountChange = _.debounce((minCount) => {
        console.log(`handleMinCountChange, ${minCount}`);
        this.setState({ minCount })
    }, 500);

    handleChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value });
    };

    handleDisplayTooltipChange = (displayTooltip) => {
        this.setState({ displayTooltip });
    }

    render() {
        const { playerId } = this.props;
        const { minCount, chartType, displayTooltip } = this.state;
        return (
            <div className="data-view">
                <ShotChart playerId={playerId} minCount={minCount} chartType={chartType} displayTooltip={displayTooltip}/>
                <div className="filters">
                    {chartType === 'hexbin' ? (
                        <CountSlider handleMinCountChange={this.handleMinCountChange} defaultValue={2}/>
                    ) : null}
                    <br/>
                    <Row>
                        <Col span={9}>
                            <Radio.Group onChange={this.handleChartTypeChange} value={chartType}>
                                <Radio value="hexbin">Hexbin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </Radio.Group>
                        </Col>
                        <Col span={6}>
                            Tooltip: &nbsp;
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                onChange={this.handleDisplayTooltipChange}
                                defaultChecked
                            />
                        </Col>
                    </Row>
                    <br/>
                </div>
            </div>
        );
    }
}
