import React, {useState} from "react";
import ViewSecttion from './component/bugViewSection'
import './bugView.css'
import BugModel from '../../../Models/bugModel'
import {useDispatch} from 'react-redux'
import {markComplete} from '../../../Controllers/Redux/bugSlice'
import editPanel from "../edit delete/editPanel";
import EditPanel from "../edit delete/editPanel";
import EditBug from '../Bug Create/bugForm'

export default (props) => {
    const dispatch = useDispatch();
    const bug = new BugModel(props.bug);
    const [displayEdit, setDisplayEdit] = useState(false);

    function editClicked(){
        setDisplayEdit(!displayEdit)
    }
    function deleteClicked(){

    }

    return(
        <>
        <div className="bug-view">
            <EditPanel editClicked={editClicked} deleteClicked={deleteClicked}/>
            <button onClick={props.clicked} className="close-btn">Close</button>
            <h1>{bug.name}</h1>
            <ViewSecttion title='Details' info={bug.details}/>
            <ViewSecttion title='Steps' info={bug.steps}/>
            <ViewSecttion title='Priority' info={bug.priority}/>
            <ViewSecttion title='Creator' info={bug.creator}/>
            <ViewSecttion title='App Version' info={bug.version}/>
            <ViewSecttion title='Time Created' info={bug.time}/>
            <button onClick={() => {
                dispatch(markComplete())
            }}>Mark Complete</button>
        </div>
        {displayEdit && <EditBug title="Edit bug" bug="bug" close={editClicked}/>}
        </>
    )
}