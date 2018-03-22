import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './form.css';
import './table.css';
import Form from "./form";
import Table from "./table";
import orderBy from "lodash/orderBy";


const invertDirection = {
  asc: "desc",
  desc: "asc"
};


class App extends Component {
    state = {
        data: [
            {id: 1, fullName: "Alex osipov", email: "alex.osipov@gmail.com", phone: "0466345789"},
            {id: 2, fullName: "Jaya Bidari", email: "jkb@gmail.com", phone: "0466345678"},
            {id: 3, fullName: "Saru Nepali", email: "saru11@gmail.com", phone: "0466358907"},
            {id: 4, fullName: "Prahlad Devkota", email: "Prahlad.devkota@gmail.com", phone: "046678932"},
            {id: 5, fullName: "Sunita lamichhane", email: "sunita2@gmail.com", phone: "0466781234"},
            {id: 6, fullName: "Dhiraj koirala", email: "dhirajko@gmail.com", phone: "0466234598"},
            {id: 7, fullName: "Pankaj Udas", email: "Pankaj11@gmail.com", phone: "0466247854"},
            {id: 8, fullName: "Saugat Awale", email: "saugat44@gmail.com", phone: "0466568732"},
            {id: 9, fullName: "Manish mahat", email: "manish.mahat@gmail.com", phone: "0449876546"},
            {id: 10, fullName: "Amit  tandon", email:"amit21@gmail.co", phone: "0466758765"},
            {id: 11, fullName: "Manoj Dulal", email: "manu2@gmail.com", phone: "0466548976"},
           {id: 12, fullName: "Thakur gaire", email: "gairethakur@gmail.com", phone: "0466349844"},
           {id: 13, fullName: "Pramod Dulal", email: "dulalbhai@gmail.com", phone: "0466984433"},
           {id: 14, fullName: "Anita Adhikari", email: "Anita65@gmail.com", phone: "04667094432"},
            {id: 15, fullName: "Hari lama", email: "lama11@gmail.com", phone: "0466567898"},
           {id: 16, fullName: "Kriti aale", email: "krit1@gmail.com", phone: "0466324523"},
           {id: 17, fullName: "Anik Barua", email: "anik3@gmail.com", phone: "0466579832"},
           {id: 18, fullName: "Rajkumar pokhrel", email: "rajk98@gmail.com", phone: "0466324598"},
           {id: 19, fullName: "Sonam lama", email: "sona77@gmail.com", phone: "0466763218"},
           {id: 20, fullName: "Laxman karki", email: "karki44@gmail.com", phone: "0466349872"}
        ],
        editIdx: -1,
        nextId: 21,
        columnToSort: "",
        sortDirection: "desc"
    };
    handleRemove = (i) => {
        this.setState(state => ({
            data: state.data.filter((row, j) => j !== i),
        }));

    }
     startEditing = (i) => {
        this.setState({editIdx: i});

    }
    stopEditing = () => {
    this.setState({editIdx: -1});

    }
        handleChange = (e, name, i) => {
            const {value} = e.target;
        this.setState(state => ({
            id: this.state.nextId,
            data: state.data.map(
                (row, j) => (j === i ? { ...row, [name]: value } : row )
                )
             }));
         }

     handleSort =(columnName) => {
         this.setState(state => ({
             columnToSort: columnName,
             sortDirection: state.columnToSort === columnName ? invertDirection[state.sortDirection] : 'asc'
         }));
     }

render() {
        return (
         <div className = "Container">

            <header className="Heading">
                <img src={logo} className="logo" alt="logo" />Nord Software
            </header>

             <div className = "Formandtable">

        <Form onSubmit = {submission => this.setState({

            data: [...this.state.data, submission],
            nextId: ++this.state.nextId

            })
            } />

            <Table
                handleSort={this.handleSort}
                handleRemove={this.handleRemove}
                startEditing={this.startEditing}
                editIdx={this.state.editIdx}
                handleChange={this.handleChange}
                handleCancel={this.handleCancel}
               columnToSort={this.state.columnToSort}
               sortDirection={this.state.sortDirection}
                stopEditing={this.stopEditing}
                    data= {orderBy(
                           this.state.data,
                            this.state.columnToSort,
                            this.state.sortDirection
                            )
                          }
                    nextId={++this.state.nextId}

                    header= {[

                           {
                            name: "Name  "  ,
                           prop: 'fullName',
                          },
                           {
                            name: "E-mail address",
                           prop: 'email',
                          },
                           {
                            name: "Phone number",
                           prop: 'phone',
                          }
                            ]} 
                    />
            </div>
        </div>

            );

    }
}

export default App;
