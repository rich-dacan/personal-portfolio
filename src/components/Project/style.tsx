import { Flex } from "../../styles/Global";
import { styled } from "../../styles/stitches.config";

export const Project = styled("article", {
  marginTop: "4rem",
  border: "2px solid $brand1",
  borderRadius: "10px",
  padding: "24px",

  'h2': {
    maxWidth: "25ch",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
 
  '&:hover': {
    backgroundColor: '$grey4',
  }
});

export const ProjectStack = styled(Flex, {
  display: "flex",
  flexDirection: "column",
  margin: "1.25rem 0 1.25rem 0",
});

export const ProjectStackTech = styled("span", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "$brand4",
  color: "$brand2",
  padding: "0  0.5rem",
  borderRadius: "$2",
});

export const ProjectLinks = styled(Flex, {
  marginTop: "2.25rem",
});

export const ProjectLink = styled("a", {
  fontSize: "1rem",
  color: "$grey2",
  fontWeight: "500",
  marginRight: "$2",
  display: "flex",
  alignItems: "center",
  lineHeight: "0",

  "&:hover":{
    color: "$grey1"
  },

  [`& svg`]: {
    marginRight: "$1"
  }
});
