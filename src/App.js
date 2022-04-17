import React from "react";
import GridLayout from "react-grid-layout";
import styled from "styled-components";

const layout = [
  { i: "tile-one", x: 0, y: 0, w: 1, h: 1 },
  { i: "tile-two", x: 1, y: 0, w: 1, h: 1 },
  { i: "tile-three", x: 2, y: 0, w: 1, h: 1 },
  { i: "tile-four", x: 3, y: 0, w: 1, h: 1 },
  { i: "tile-five", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;


export const Grid = () => {
  return (
    <Root>
      <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
        <GridItemWrapper key="tile-one">
          <GridItemContent>Tile One</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="tile-two">
          <GridItemContent>Tile Two</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="tile-three">
          <GridItemContent>Tile Three</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="tile-four">
          <GridItemContent>Tile Four</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="tile-five">
          <GridItemContent>Tile Five</GridItemContent>
        </GridItemWrapper>
      </GridLayout>
    </Root>
  );
};
export default Grid;