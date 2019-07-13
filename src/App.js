import React from "react";

import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Note from "./components/Note";

class App extends React.Component {
  state = {
    notes: [
      // {
      //   id: 0,
      //   title: "제목",
      //   content: "ㅎㅇㅎㅇ "
      // }
      // {
      //   id: 1,
      //   title: "다이소",
      //   content: "ㅎㅇㅎㅇ "
      // }
    ],
    activeNoteId: null
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
    console.log({ name, value });
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
  handleCreateNote = e => {
    const createdNote = {
      id: this.state.notes.length, //뭐시기보다 +1
      title: "제목",
      content: "내용"
    };
    // 노트루 받아옴 input textarea

    this.setState({
      notes: [...this.state.notes, createdNote],
      activeNoteId: this.state.notes.length === 0 ? 0 : this.state.notes.length
    });
  };

  handleDeleteNote = e => {
    // N18016: 어떤 id 삭제할지??
    const replaceNotes = this.state.notes.filter(note => {
      return this.state.activeNoteId !== note.id;
    });
    console.log({ replaceNotes });
    this.setState({
      notes: replaceNotes,
      // notes 배열에서 제일 상위의 값 가져오면 될까?
      activeNoteId: replaceNotes.length !== 0 ? replaceNotes[0].id : null
    });
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header
          onCreateNote={this.handleCreateNote}
          onDeleteNote={this.handleDeleteNote}
        />
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
