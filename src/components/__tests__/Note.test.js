/** @jest-environment jsdom */
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import Note from '../Notes/Note';

const mockedNote = {
  key: '34',
  text: 'hi there',
  date: '3/7/22'
}

const handleDeleteNote = jest.fn();

test("Note deleted when x button is clicked", () => {
  const { getByTestId } = render(
    <Note note={mockedNote} handleDeleteNote={handleDeleteNote} />
  );
  const deleteBtn = getByTestId("delete-note");
  fireEvent.click(deleteBtn);

  expect(handleDeleteNote).toHaveBeenCalledTimes(1);
  expect(handleDeleteNote).toHaveBeenCalledWith("34");
});