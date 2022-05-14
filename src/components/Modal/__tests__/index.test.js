import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, fireEvent } from "@testing-library/react";
import Modal from "..";

const currentPhoto = {
  name: "Park Bench",
  category: "landscape",
  description:
    "lorem ipstum dolor sit amet, consectetur adiiscing elit. nunc ultricie",
  index: 1,
};
const mockToggleModal = jest.fn();

afterEach(cleanup);

describe("Modal component", () => {
  it("renders", () => {
    render(<Modal currentPhoto={currentPhoto} />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Modal currentPhoto={currentPhoto} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
describe("Click Event", () => {
  it("calls onClose handler", () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    //eslint-disable-next-line
    fireEvent.click(getByText("Close this modal"));

    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
