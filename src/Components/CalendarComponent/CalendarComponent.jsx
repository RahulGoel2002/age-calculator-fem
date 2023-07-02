import React, { useState } from 'react';
import "./CalendarComponent.css"
import InputSection from '../InputSection/InputSection';
import OutputSection from '../OutputSection/OutputSection';

const CalendarComponent = () => {

    const [daysLived, setdaysLived] = useState(
        {days: "--", months: "--", years: "--"}
    )

    const updateDaysLived = (dob) => {
        if (dob !== null)
        {
            const diff = (new Date()) - dob;
            const days_in_between = (Math.floor(diff/(1000*60*60*24)))
            const years = Math.floor(days_in_between / (365))
            const months = Math.floor((days_in_between % 365)/30)
            const days = days_in_between % 30
            setdaysLived(
                {
                    days: days,
                    months: months,
                    years: years
                }
            )
        }
        else {
            setdaysLived({days: "--", months: "--", years: "--"})
        }
    }

    return (
        <div data-testid="calendar component" className='cal-component'>
            <InputSection updateDaysLived={updateDaysLived} />
            <OutputSection res={daysLived} />
        </div>
    );
}

export default CalendarComponent;
