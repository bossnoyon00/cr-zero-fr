import { Spin } from "antd";
import styled from "styled-components";

const Loader = () => {
  return (
    <Box>
      <Spin size="large" />
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  padding: 20px 0px;
  display:flex;
  align-items: center;
  justify-content: center;
`;

export default Loader;
