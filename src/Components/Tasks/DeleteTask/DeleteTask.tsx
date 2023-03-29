import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TaskModel } from "../../../Models/TaskModel";
import TaskCard from "../TaskCard/TaskCard";
import "./DeleteTask.css";

function DeleteTask(): JSX.Element {
    const navigate = useNavigate();
    const url = "http://localhost:8080/api/tasks";
    const [tasks, setTasks] = useState<TaskModel[]>([]);

    // const deleteTaskFromRemoteServer = () => {
    //     const url = "http://localhost:8080/api/tasks/1";
    //     console.log('in deleteTaskFromRemoteServer')
    //     axios.post(url)
    //         .then(res => {
    //             console.log("Deleted");
    //             // Navigate to previous screen
    //             navigate('/tasks');
    //         })
    //         .catch(err => console.log(err));
    // }

   //Mounting ~ componentDidMount
   useEffect(() => {
    axios.get<TaskModel[]>(url)
        .then(res => setTasks(res.data))
        .catch(err => console.log('Oppsy'));
}, []);
return (
    <div className="TaskList">
        <div className="center">
            <h1>Task List</h1>
        </div>
        <div className="displayList">
            {
                tasks.map(t =>
                    <div>
                    <TaskCard
                        key={'task ' + t.id}
                        task={t} />
                        {/* <button  key={'delete ' + t.id}>REM</button> */}
                        </div>
                )

            }
        </div>

    </div>
);
}

export default DeleteTask;
