import React, { Component, useEffect} from 'react'
import axios from 'axios';

export class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { prodata: [], task: '', priority:0, status:'Completed' }
    }
    componentDidMount() {
        this.call()
    }
    call = () => {
        const URL = "http://localhost:3001/Users"
        
        axios.get(URL)
            .then(res => {
                this.setState({ prodata: res.data })
            })
            .catch(err => { console.log(err) })
    }
    handle = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
  
    add = (event) => {
        event.preventDefault()
     
        const URL = "http://localhost:3001/Users"
        axios.post(URL, {
            task: this.state.task, 
            priority:this.state.priority,
            status:"" 
            })
            .catch(err => { console.log(err) })  
    }
    // addCart=(task)=>{
    //     // alert(task);
    //     if(localStorage.getItem('Tasks')!=undefined){
    //         let arr=JSON.parse(localStorage.getItem('Tasks'));
    //         if(arr.includes(task))
    //         {
    //             alert("Task already added");
    //         }
    //         else{
    //             arr.push(task);
    //             localStorage.setItem('Tasks',JSON.stringify(arr));
    //             this.setState({len:arr.length})
    //             // alert("Product Added to cart");
    //         }
    //     }
    //     else{
    //         let arr=[];
    //         arr.push(task);
    //         localStorage.setItem('Tasks',JSON.stringify(arr));
    //     }
    // }
   
    delete = (id) => {
        const URL = `http://localhost:3001/Users/${id}`
        console.log(URL)
       
        axios.delete(URL)
        .catch(err => { console.log(err) })
        this.call()
    }

    // updateStatus = (id) => {
    //     const URL = `http://localhost:3001/Users/${id}`
    //       //this.add2();
          
    //     // axios.put(URL,
    //     //  {

    //     //     id: id,
    //     //     // task:task,
    //     //     // priority:priority,
    //     //     //  task: this.state.task,
    //     //     // priority: this.state.priority,
            
    //     //     status:prompt("Enter Status")
    //     // }

    //     // )
           
    //     //     .catch(err => { console.log(err) })
    //     axios.post(URL, {
    //         task: this.state.task, 
    //         priority:this.state.priority,
    //         status:"COmpleted"
           
            
    //         })
    //         .catch(err => { console.log(err) })
    //     this.call()
    // }

    render() {
        
        return (
            <div className="mt-5" style={{backgroundColor:"#EFE3E1",height:"1000px"}}>
                 <h1 className="text-secondary  text-center pl-1">Todo List</h1>
                <div className="container form-group " >
                    <form onSubmit={this.add}>
                        <label>Add Todo</label>
                            <input type="text" name="task" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />
                            
                        <label>Priority</label>
                        <input type="number" name="priority" className="form-control" onChange={this.handle} style={{backgroundColor:"#F9F1F1"}} />    
                      
                        <input type="submit" value="Submit" className="btn btn-primary " style={{marginLeft:"525px",marginTop:"20px"}} />
                    </form>
                </div>
                <div>
                    <h2 className="text-center text-dark mt-5 mb-5">Task List</h2>
                    <table className="container text-center" style={{width:"4000px",backgroundColor:"#E8CEC9"}}>
                        <tr>
                            <th>Task ID</th>
                            <th>Task</th>
                            <th>Priority</th>
                            {/* <th>Status</th> */}
                           
                            {/* <th>Address</th> */}
                            <th colSpan="2">Action</th>
                        </tr>
                        {this.state.prodata.map(element =>
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.task}</td>
                                <td>{element.priority}</td>
                                {/* <td>{element.status}</td> */}
                                
                               
                                <td><button className="btn btn-danger" onClick={() => this.delete(`${element.id}`)} >DELETE</button></td>
                                {/* <td><button className="btn btn-primary" onClick={() => this.updateStatus(`${element.id}`)} > Completed</button></td> */}
                            </tr>)}
                    </table>
                </div>
            </div>
        )
    }
}

export default Home
