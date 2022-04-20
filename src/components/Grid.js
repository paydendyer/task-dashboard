import React from "react";
import styled from "styled-components";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "schedule", x: 0, y: 0, w: 2, h: 1 },
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
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
        rowHeight={300}
        width={1000}
      >
        <GridItemWrapper key="schedule">
          <GridItemContent>Today's Schedule</GridItemContent>
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
      </ResponsiveGridLayout>
    </Root>
  );
};
export default Grid;