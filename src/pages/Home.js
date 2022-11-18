import React, { useState } from "react";

function Home() {

    //DAYLIST
    const daylist = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    //USESATE
    const [selected, setSelected] = useState('');
    const [day, setDay] = useState(new Date());

    //HANDLE THIS DAYS
    let thisDay = daylist[(day.getDay() + 6) % 7];

    return (
        <>
            <section id='home'>
                <div className='container-fluid wrapper-area'>
                    <div className='row text-center'>
                        <div className='today-title'>Today is <span className="this-day">{thisDay}</span></div>
                    </div>
                    <div className='row daylist'>
                        {daylist.map((day) => (
                            <div className='col-1'>
                                {thisDay !== day &&
                                    <button className='btn btn-primary'
                                        style={selected === day ? { borderColor: "white", borderRadius: "5px", boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.300)" } : {}}
                                        onClick={() => setSelected(day)}>{day}</button>
                                }

                                {thisDay === day &&
                                    <button className='btn btn-primary'
                                        style={selected === day ? { backgroundColor: "green", borderColor: "white", borderRadius: "5px", boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.300)" } : { backgroundColor: "green" }}
                                        onClick={() => setSelected(day)}>{day}</button>
                                }
                            </div>
                        ))}
                    </div>
                    <div className='row text-center'>
                        <div className='today-title'>Selected day is <span className="selected-day">{selected}</span></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home