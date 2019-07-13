import React from "react";

const Header = props => {
  const { onCreateNote, onDeleteNote } = props;
  return (
    <div>
      <div>노트 키퍼</div>
      <div>
        <button onClick={onCreateNote}>추가</button>
        <button onClick={onDeleteNote}>삭제</button>
      </div>
    </div>
  );
};

export default Header;
