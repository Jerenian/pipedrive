import React, { useEffect, useRef, useState } from 'react'
import classes from './App.module.scss'
import arrow from '../public/down_13077156.png'
const App = () => {    
    const [area, setArea] = useState();
    const [visibleArea, setvisibleArea] = useState(false)

    const [JobType, setJobType] = useState();
    const [visibleJobType, setvisibleJobType] = useState(false)

    const [JobSource, setJobSource] = useState();
    const [visibleJobSource, setvisibleJobSource] = useState(false)

    const [Test, setTest] = useState();
    const [visibleTest, setvisibleTest] = useState(false)

    const inputRefEnd = useRef(null)
    const inputRefStart = useRef(null)

    const [startTime, setstartTime] = useState()
    const [endTime, setendTime] = useState()

    const ChangeType = () => {
        inputRefEnd.current.type = 'time'
    }
    const hendleArea = (value) => {
        let changer = !value
        setvisibleArea(changer)
    }

    const hendleJobType = (value) => {
        let changer = !value
        setvisibleJobType(changer)
    }
    
    const hendleJobSource = (value) => {
        let changer = !value
        setvisibleJobSource(changer)
    }

    const hendleTest = (value) => {
        let changer = !value
        setvisibleTest(changer)
    }
  return (
    <div  className={classes.wrapper}>
        <div className={classes.item}>
            <div className={classes.client}>
            <h2>Client details</h2>
                <div className={classes.client_item}>
                     <ul className={classes.name}>
                        <li>
                            <input placeholder='First name' type="text" />
                        </li>
                        <li>
                            <input placeholder='Last name' type="text" />
                        </li>
                    </ul>
                    <ul className={classes.contacts}>
                        <li>
                            <input placeholder='Phone' type="tel" />
                        </li>
                        <li>
                            <input placeholder='Email (option)' type="email" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.job}>
            <h2>Job details</h2>
                <div className={classes.job_item}>
                    <div className={classes.typeAndSource}>
                        <div className={classes.SectionContainer}>
                                <input readOnly value={JobType} placeholder='Job type' type="text" />
                                <button onClick={() => hendleJobType(visibleJobType)} > <img src={arrow} alt="" /></button>
                                <div  data-selector = {visibleJobType} className={classes.List}>
                                    <select onChange={(e) => {setJobType(e.target.value); hendleJobType(visibleJobType)}} multiple="multiple" >
                                        <option value={'Job type  1'} >Job type  1</option>
                                        <option value={'Job type  2'} >Job type  2</option>
                                        <option value={'Job type  3'} >Job type  3</option>
                                        <option value={'Job type  4'} >Job type  4</option>
                                        <option value={'Job type  5'} >Job type  5</option>
                                    </select>
                                </div>
                            </div>
                            <div className={classes.SectionContainer}>
                                <input readOnly value={JobSource} placeholder='Job source' type="text" />
                                <button onClick={() => hendleJobSource(visibleJobSource)} > <img src={arrow} alt="" /></button>
                        
                                <div  data-selector = {visibleJobSource} className={classes.List}>
                                    <select onChange={(e) => {setJobSource(e.target.value); hendleJobSource(visibleJobSource)}} multiple="multiple" >
                                        <option value={'Job source 1'} >Job source 1</option>
                                        <option value={'Job source 2'} >Job source 2</option>
                                        <option value={'Job source 3'} >Job source 3</option>
                                        <option value={'Job source 4'} >Job source 4</option>
                                        <option value={'Job source 5'} >Job source 5</option>
                                    </select>
                                </div>
                            </div>
                    </div>
                    <div className={classes.description}>
                        <textarea placeholder='Job description (optinal)' name="" id=""></textarea>
                    </div>
                </div>
            </div>
            <div className={classes.service}>
                <div className={classes.service_item}>
                    <h2>Service location</h2>
                    <ul className={classes.location}>
                        <li>
                            <input placeholder='Address' className={classes.address} type="text" />
                        </li>
                        <li>
                            <input placeholder='City' className={classes.City} type="text" />
                        </li>
                        <li>
                            <input placeholder='State' className={classes.State} type="text" />
                        </li>
                    </ul>
                    <div className={classes.service_footer}>
                        <div>
                            <input placeholder='Zip code' className={classes.zip} type="number" />
                        </div>
                        <div className={classes.SectionContainer}>
                            <input readOnly  value={area} placeholder='Area' type="text" />
                            <button onClick={() => hendleArea(visibleArea)} > <img src={arrow} alt="" /></button>
                       
                            <div  data-selector = {visibleArea} className={classes.List}>
                                <select onChange={(e) => {setArea(e.target.value), hendleArea(visibleArea)}} multiple="multiple" >
                                    <option value={'Area 1'} >Area 1</option>
                                    <option value={'Area 2'} >Area 2</option>
                                    <option value={'Area 3'} >Area 3</option>
                                    <option value={'Area 4'} >Area 4</option>
                                    <option value={'Area 5'} >Area 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.scheduled}>
                <h2>Scheduled</h2>
                <div className={classes.scheduled_item}>

                    <div className={classes.Date}>
                        <input type="date" />
                    </div>

                    <div className={classes.time}>
                        <div className={classes.start}> 
                        <input 
                        
                        onChange={(e) => setstartTime(e.target.value)}
                        onClick={ () => inputRefStart.current.type = 'time'}
                        placeholder='Time start'
                        ref = {inputRefStart}
                        type="text" />
                        </div>
                        <div className={classes.end}>
                            <input 

                            ref={inputRefEnd}
                            onClick={ () => inputRefEnd.current.type = 'time'}
                            onChange={(e) => setendTime(e.target.value)}
                            placeholder='Time end'
                            type="text" />
                        </div>
                        
                    </div>

                    <div className={classes.test}>
                        <div className={classes.SectionContainer}>
                            <input readOnly  value={Test} placeholder='Test select' type="text" />
                            <button onClick={() => hendleTest(visibleTest)} > <img src={arrow} alt="" /></button>
                       
                            <div  data-selector = {visibleTest} className={classes.List}>
                                <select onChange={(e) => {setTest(e.target.value), hendleTest(visibleTest)}} multiple="multiple" >
                                    <option value={'Test 1'} >Test 1</option>
                                    <option value={'Test 2'} >Test 2</option>
                                    <option value={'Test 3'} >Test 3</option>
                                    <option value={'Test 4'} >Test 4</option>
                                    <option value={'Test 5'} >Test 5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App