import "./featuredInfo.css";
import React from 'react'
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

function FeaturedInfo() {
    return (
       <div className="featured">
           <div className="featuredItem">
               <span className="featruedTitle">Revenue</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$2,415</span>
                   <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/></span>

               </div>
               <span className="featuredSub">Compared to last month</span>
           </div>

           <div className="featuredItem">
               <span className="featruedTitle">Sales</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$4,555</span>
                   <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative"/></span>

               </div>
               <span className="featuredSub">Compared to last month</span>
           </div>

           <div className="featuredItem">
               <span className="featruedTitle">Cost</span>
               <div className="featuredMoneyContainer">
                   <span className="featuredMoney">$2,415</span>
                   <span className="featuredMoneyRate">-11.4 <ArrowUpward className="featuredIcon"/></span>

               </div>
               <span className="featuredSub">Compared to last month</span>
           </div>
       </div>
    )
}

export default FeaturedInfo;
