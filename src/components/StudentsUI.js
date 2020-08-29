import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({students: state.students});

const StudentsUI = props => {
    return(
        <div className="studentsui">
            <h1>StudentsUI</h1>
            <div>
                {props.students.map((student, index) => (
                    <div className="student" key={student.id}>
                        The student n. {index + 1} is {student.name} from {student.country}.
                    </div>
                ))}
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(StudentsUI);