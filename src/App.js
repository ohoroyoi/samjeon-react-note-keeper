import React from "react";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Note from "./components/Note";

class App extends React.Component {
  state = {
    notes: [
      {
        id: 0,
        title: "제목",
        content: "ㅎㅇㅎㅇ "
      },
      {
        id: 1,
        title: "다이소",
        content: "ㅎㅇㅎㅇ "
      }
    ],
    activeNoteId: 0
  };

  // // 원조
  // handleSelectNote() {
  //   console.log(this); // 전역으로 scope 가지는 ec
  //   //this : undefined
  // }

  // 신형
  handleSelectNote = id => {
    // arrow : 상위 scope의 this
    // this: App
    console.log(this);
    console.log(id);
    this.setState({
      activeNoteId: id
    });
  };

  handleEditNote = e => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    const { name, value } = e.target;
    const newNotes = this.state.notes.map(note => {
      if (note.id === this.state.activeNoteId) {
        // name은 동적으로 변하는 값이라 [] 가 필요함
        return {
          ...note,
          [name]: e.target.value
        };
      } else {
        return note;
      }
    });

    this.setState({
      notes: newNotes
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <div>
          <Navbar
            list={this.state.notes}
            activeNoteId={this.state.activeNoteId}
            // onSelectNote={this.handleSelectNote.bind(this)} // 원조 : App주는거 왜냐믄 this.setState나 props 쓰고싶으니까 -> 그럴라면 React.Component 상속한 클래스여야함
            // onSelectNote={() => this.handleSelectNote()} // 원조
            onSelectNote={this.handleSelectNote} // 신형
            // onSelectNote={() => this.handleSelectNote()} // 신형
          />
          <Note
            list={this.state.notes}
            activeNoteId={this.state.activeNoteId}
            onEditNote={this.handleEditNote}
          />
        </div>
      </div>
    );
  }
}

export default App;
