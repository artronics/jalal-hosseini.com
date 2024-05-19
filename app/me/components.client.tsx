"use client";
import React, {useState} from "react";

interface PeriodData {
    fromMonth: number;
    fromYear: number;
    toMonth: number;
    toYear: number;
}

const Period: React.FC<PeriodData> = ({fromMonth, fromYear, toMonth, toYear}) => {
    const y = toYear - fromYear;
    const m = toMonth - fromMonth;
    const ym = Math.round((y * 12 + m) / 12);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return (
        <div className="flex flex-col text-center w-full">
            <div className="flex flex-row">
                <div className="flex flex-col flex-grow pr-1 text-right">
                    <p>{months[fromMonth - 1]}</p>
                    <p>{fromYear}</p>
                </div>
                <div className="flex flex-col flex-grow pl-1 text-left">
                    <p>{months[toMonth - 1]}</p>
                    <p>{toYear}</p>
                </div>
            </div>
            <div className="w-full">~{ym} year{y > 1 ? "s" : ""}</div>
        </div>
    );
};

const CollapsableSection: React.FC<any> = ({title, children}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <section className="flex flex-col">
            {collapsed
                ? (
                    <button onClick={() => setCollapsed(false)}><span><i className="fa fa-plus-circle"></i> more</span>
                    </button>
                ) : (
                    <div>
                        <div>{children}</div>
                        <button onClick={() => setCollapsed(true)}><i className="fa fa-minus-circle"></i></button>
                    </div>)
            }
        </section>
    );
};

export {CollapsableSection, Period};
export type {PeriodData};