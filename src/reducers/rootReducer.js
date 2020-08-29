const initialState = {students: [
    {name: "Student1", country: "Italy", id: 1},
    {name: "Student2", country: "France", id: 2},
    {name: "Student3", country: "Spain", id: 3},
    {name: "Student4", country: "Norway", id: 4},    
],
}
const rootReducer = (state = initialState, action) => state;

export default rootReducer;