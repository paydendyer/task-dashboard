import React from "react";
import styled from "styled-components";
import { Responsive, WidthProvider } from "react-grid-layout";
import Notes from '../pages/Notes';
import ToDo from "../pages/ToDo";
import Weather from "../pages/Weather";
import Budget from '../pages/Budget';
const ResponsiveGridLayout = WidthProvider(Responsive);



const layout = [
  { i: "tile-two", x: 0, y: 0, w: 1, h: 1.5 },
  { i: "tile-three", x: 1, y: 0, w: 1, h: 1 },
  { i: "tile-four", x: 2, y: 0, w: 1, h: 1 },
  { i: "tile-five", x: 1, y: 1, w: 1, h: 1 },
];

const GridItemWrapper = styled.div`
  background: none;
`;

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
`;


export const Grid = () => {
  return (
    <Root>
      <ResponsiveGridLayout
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 2, sm: 2, xs: 2, xxs: 1 }}
        rowHeight={400}
        width={1000}
        isDraggable={false}
      >
        <GridItemWrapper key="tile-two" >
          <GridItemContent className="tile-two"><Notes /></GridItemContent>
        </GridItemWrapper>

        <GridItemWrapper key="tile-three">
          <GridItemContent><ToDo/></GridItemContent>
        </GridItemWrapper>

        <GridItemWrapper key="tile-four">
          <GridItemContent><Weather/></GridItemContent></GridItemWrapper>

      <GridItemWrapper key="tile-five">
          <GridItemContent><Budget/></GridItemContent></GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};
export default Grid;
