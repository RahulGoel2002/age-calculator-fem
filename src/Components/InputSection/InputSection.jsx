import React, { useRef, useState } from 'react';
import "./InputSection.css"
import arrow_icon from "../../assets/icon-arrow.svg"

const isValidDOB = (dob) => {
    var {day, month, year} = dob
    day = Number(day)
    month = Number(month)
    year = Number(year)

    var leapYear = false;
    var errors = []
    if (year % 4 === 0) {
        if (year % 100 === 0)
        {
            if (year % 400 !== 0) {
                leapYear = true;
            }
        }
        else {
            leapYear = true;
        }
    }

    if (year < 0) errors = [...errors, "year"]
    if (month < 0 || month > 12) errors = [...errors, "month"]
    // Jan
    if (month === 1  && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 3  && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 4  && (day < 0 || day > 30)) errors = [...errors, "day"]
    if (month === 5  && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 6  && (day < 0 || day > 30)) errors = [...errors, "day"]
    if (month === 7  && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 8  && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 9  && (day < 0 || day > 30)) errors = [...errors, "day"]
    if (month === 10 && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 11 && (day < 0 || day > 30)) errors = [...errors, "day"]
    if (month === 12 && (day < 0 || day > 31)) errors = [...errors, "day"]
    if (month === 2  && (leapYear ? ((day < 0 || day > 29)) : (day < 0 || day > 28))) errors = [...errors, "day"]


    // const isValidDate = (date instanceof Date && !isNaN(date.valueOf())) && date < (new Date())
    if (errors.length > 0) return {status:"INVALID", errors: errors}
    var date = new Date(`${year}-${month}-${day}`);
    return {status:"VALID", date:date}
}

const InputSection = ({updateDaysLived}) => {

    const [warn, setWarn] = useState({
        day: false,
        month: false,
        year: false
    })

    const [dob, setDOB] = useState({
        day: "",
        month: "",
        year: ""
    })

    const handleClick = e => {
        setWarn(prev => { return { ...prev, day: dob.day === "" } })
        setWarn(prev => { return { ...prev, month: dob.month === "" } })
        setWarn(prev => { return { ...prev, year: dob.year === "" } })
        if (dob.day !== "" && dob.month !== "" && dob.year !== "") {
            // accept dob

            const validity = isValidDOB(dob)
            if (validity.status === "VALID") {
                console.log(dob)
                updateDaysLived(validity.date)
                setDOB({
                    day: "",
                    month: "",
                    year: ""
                })
            }
            else if (validity.status === "INVALID") {
                updateDaysLived(null)
                validity.errors.map(
                    key => {
                        return setWarn(
                            prev => {
                                return {
                                    ...prev,
                                    [key]: true
                                }
                            }
                        )
                    }
                )
            }


        }

    }

    const handleChange = e => {

        setWarn({
            day: false,
            month: false,
            year: false
        })

        const { name, value } = e.target;

        setDOB(
            prev => {
                return {
                    ...prev,
                    [name]: value
                }
            }
        )
    }

    const monthRef = useRef()
    const yearRef = useRef()

    const handleKeyDown = e => {
        if (e.key === "Enter")
        {
            if (e.target.name === "day") monthRef.current.focus()
            if (e.target.name === "month") yearRef.current.focus()
            if (e.target.name === "year") handleClick(null)
        }
    }

    return (
        <div className='input-section'>
            <span className="inp inp-date">
                <label className={`${warn.day && "warning"}`}>Day</label>
                <input value={dob.day} onKeyDown={handleKeyDown} onChange={handleChange} name="day" placeholder='DD' type="text" />
                {warn.day && <span className="warning warn">Incorrect Day</span>}
            </span>
            <span className="inp inp-month">
                <label className={`${warn.month && "warning"}`}>Month</label>
                <input ref={monthRef} onKeyDown={handleKeyDown} value={dob.month} onChange={handleChange} name="month" placeholder='MM' type="text" />
                {warn.month && <span className="warning warn">Incorrect Month</span>}
            </span>
            <span className="inp inp-year">
                <label className={`${warn.year && "warning"}`}>Year</label>
                <input ref={yearRef} onKeyDown={handleKeyDown} value={dob.year} onChange={handleChange} name="year" placeholder='YYYY' type="text" />
                {warn.year && <span className="warning warn">Incorrect Year</span>}
            </span>
            <button onClick={handleClick} className="btn">
                <img src={arrow_icon} alt="go" />
            </button>
        </div>
    );
}

export default InputSection;
