export default bug

function bug(bug){
    if(bug!=undefined){
        this.id=bug._id;
        this.name=bug.name;
        this.details=bug.details;
        this.steps=bug.steps;
        this.version=bug.version;
        this.priority=bug.priority;
        this.assigned=bug.assigned;
        this.creator=bug.creator;
        this.time=bug.time;
    }
}