import React,{ useState, useEffect} from "react";
import WorkDetails from "../components/WorkDetails";
import WorkoutForm from "../components/WorkoutForm";

export default function Home(){

    const [allWorkouts, setAllWorkouts] = useState(null)

    useEffect(()=>{
        fetch("http://localhost:4000/api/workouts")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAllWorkouts(data)
               
            })
    },[])


    return(
        <div className="home">
            <div className="workouts">
                {allWorkouts && allWorkouts.map((workout)=>{
                  return  <WorkDetails key={workout._id} workout={workout}/>
                })}
            </div>
            <div>
                <WorkoutForm />
            </div>
        </div>
    )
}