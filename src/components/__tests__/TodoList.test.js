/** @jest-environment jsdom */
import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import TodoList from '../To Do/TodoList';

const mockedTodo = {
  key: '33',
  value: 'hey'
}

const deleteItem = jest.fn();

test("Todo deleted when x button is clicked", () => {
  const {getByTestId} = render (<TodoList item={mockedTodo}
    deleteItem={deleteItem}/>);
  const deleteBtn = getByTestId("delete-todo");
  fireEvent.click(deleteBtn);

  expect(deleteItem).toHaveBeenCalledTimes(1);
  expect(deleteItem).toHaveBeenCalledWith('33');
});
