import styled from "styled-components";
import { skyBlue } from "./colors";

export const Input = styled.input`
  outline: none;
  border-radius: 0.1rem;
  padding: 0.2rem 0.4rem;
  border: none;
`;

export const InputNewletters = styled.input`
  border: none;
  outline: none;
  flex: 8;
  padding-left: 2rem;
  background: transparent;
`;

export const SelectOptions = styled.option`
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-right: 2rem;
  outline: none;
  background-color: ${skyBlue};
  border: 1px solid ${skyBlue};
`;
export const FilterSize = styled.select`
  margin-left: 1rem;
  outline: none;
  padding: 0.5rem;
  cursor: pointer;
`;
