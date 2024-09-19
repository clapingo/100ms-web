import React from "react";
import { Button, Input, styled } from "@100mslive/roomkit-react";
import { isStreamingKit } from "../../common/utils";

const PreviewName = ({ name, onChange, onJoin, enableJoin }) => {
  const learner = localStorage.getItem('learner');
  const type = localStorage.getItem('type');
  const formSubmit = e => {
    e.preventDefault();
  };
  console.log("Learner and type", learner, type)
  return (
    <Form onSubmit={formSubmit}>
      <Input
        required
        id="name"
        css={{ w: "100%" }}
        value={name}
        onChange={e => onChange(e.target.value.trimStart())}
        placeholder="Enter your name"
        autoFocus
        autoComplete="name"
      />
      <Button type="submit" disabled={!name || !enableJoin || !learner || !type || learner=== "null" || type === "null"} onClick={onJoin}>
        {isStreamingKit() ? "Join Studio" : "Join Room"}
      </Button>
    </Form>
  );
};

const Form = styled("form", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "$4",
  mt: "$10",
  mb: "$10",
});

export default PreviewName;
