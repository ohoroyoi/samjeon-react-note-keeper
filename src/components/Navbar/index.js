import React from "react";
import styled from "styled-components";

const Navbar = props => {
  const { list, activeNoteId, onSelectNote } = props;
  return (
    <div>
      {list.map(item => {
        const active = item.id === activeNoteId; // true of false
        return (
          <Item
            active={active}
            key={item.id}
            onClick={() => {
              onSelectNote(item.id);
            }}
          >
            {item.title}
          </Item>
        );
      })}
    </div>
  );
};

export default Navbar;

const Item = styled.div`
  background: ${props => {
    return props.active ? "red" : "white";
  }};
`;
