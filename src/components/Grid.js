import React from "react";
import styled from "styled-components";
import { Responsive, WidthProvider } from "react-grid-layout";
import Notes from '../pages/Notes';
import ToDo from "../pages/ToDo";
import Weather from "../pages/Weather";
import {Link} from "react-router-dom";
const ResponsiveGridLayout = WidthProvider(Responsive);



const layout = [
  { i: "tile-two", x: 0, y: 0, w: 1, h: 1 },
  { i: "tile-three", x: 2, y: 0, w: 1, h: 1 },
  { i: "tile-four", x: 4, y: 0, w: 1, h: 1 },
];

const GridItemWrapper = styled.div`
  background: none;
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
        cols={{ lg: 2, md: 2, sm: 2, xs: 2, xxs: 1 }}
        rowHeight={700}
        width={1000}
      >
        <Link to={"../pages/Notes"}>View Full Page</Link>
        <GridItemWrapper key="tile-two">
          <GridItemContent><Notes /></GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="tile-three">
          <GridItemContent><ToDo/></GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="tile-four"><GridItemContent><Weather/></GridItemContent></GridItemWrapper>
      </ResponsiveGridLayout>
    </Root>
  );
};
export default Grid;
