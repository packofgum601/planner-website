import React from 'react';
import {useState, useEffect} from 'react';
import '../css/global.css';

const TodaysPlan = () => {
    const [todaysPlan, setTodaysPlan] = useState([]);

    useEffect(() => {
      console.log(todaysPlan);
    }, [todaysPlan]);
    
    const handleComplete = (item) => {
        const updatedTodaysPlan = todaysPlan.map((planItem) => {
          if (planItem.id === item.id) {
            return {
              ...planItem,
              completed: true,
            };
          }
          return planItem;
        });
        setTodaysPlan(updatedTodaysPlan);
      };
    
    


    const handleAdd = (e) => {
        //make item complet = false
        //add item to todays plan

        e.preventDefault();
        const newItem = {
            id: todaysPlan.length + 1,
            text: e.target[0].value,
            completed: false
        }
        setTodaysPlan([...todaysPlan, newItem])
        console.log(todaysPlan)
        //clear input
        e.target[0].value = ""


    }
    

    

    const handleDelete = (item) => {
        //filter out item from todays plan
        const updatedTodaysPlan = todaysPlan.filter((planItem) => {
            return planItem.id !== item.id;
          });
          setTodaysPlan(updatedTodaysPlan);
    }

    return (
        <div className = "TodaysPlan">
            <div className = "Header2">
                <h1>Today's Plan</h1>
            </div>
            <form onSubmit = {(e) => {handleAdd(e)}}>
                <input className = "input" type = "text" placeholder = "" />
                <button className = "button" type = "submit">Add To List</button>
            </form>
            {/* map out todays plan with with compleeted option*/}
            <div className = "TodaysPlanList">
                {todaysPlan.map((item) => {
                    return (
                        <div className = "TodaysPlanItem">
                            {/* add strikethrough if item is completed */}
                            <p className={`Task ${item.completed ? "completed" : ""}`}>{item.text}</p>
                            <button className = "Complete" onClick = {() => {handleComplete(item)}}>Complete</button>
                            <button className = "Delete" onClick = {(e) => {handleDelete(item)}}>Delete</button>
                            
                        </div>
                    )
                })}
  
                </div>




                
           
            

            
            
        </div>
    );
}

export default TodaysPlan;