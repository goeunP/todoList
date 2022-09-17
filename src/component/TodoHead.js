import styled from "@emotion/styled";

const TodoHeadBlock = styled.div`
  * {
    maring-top: 30px;
  }
  div {
    margin-left: 30px;
  }
  h1 {
    font-size: 40px;
    color: #343a40;
  }
`;

function Todohead({ children }) {
  return (
    <>
      <TodoHeadBlock>
        <div>
          <h1>{children}</h1>
        </div>
      </TodoHeadBlock>
    </>
  );
}

export default Todohead;
