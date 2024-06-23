// assets
import logo from "assets/images/logo.png";

// styling
import styled from "styled-components";

// components
import { NavLink } from "react-router-dom";

// utils
import PropTypes from "prop-types";

// const Img = styled.img`
//   width: 30px;
//   height: 30px;
//   will-change: transform;
//   transition: transform var(--transition);
// `;

const Wrapper = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover,
  &:focus {
    Img {
      transform: scale(1.2);
    }
  }
`;

const Text = styled.span`
  font-weight: 700;
`;

const Logo = ({ compact }) => {
  return (
    <Wrapper as={NavLink} to="/app/home" className="logo h-[85%]">
      <img src={logo} alt="Clinic Care" className="h-full" />
      {!compact ? (
        <Text>
          Clinic<span className="text-blue-500">Care</span>
        </Text>
      ) : null}
    </Wrapper>
  );
};

Logo.propTypes = {
  compact: PropTypes.bool,
};

export default Logo;
