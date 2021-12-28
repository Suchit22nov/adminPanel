import React from 'react'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo';
import { data } from "../../../DummyData";
import Chart from '../../chart/Chart';
import WidgetLg from '../../WidgetLg/WidgetLg';
import WidgetSm from '../../WidgetSm/WidgetSm';
function Home() {
    return (
        <div>
            <FeaturedInfo />
            <Chart data={data} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />

            </div>

        </div>
    )
}

export default Home;
