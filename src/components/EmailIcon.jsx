import styled from "styled-components";

const TwitterIcon = ({ width = 50, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={width} height={width} {...props}>
    <path d="M12 12.713.015 3h23.97L12 12.713zm0 2.574L0 5.562V21h24V5.562l-12 9.725z" />
  </svg>
);

export default TwitterIcon;
