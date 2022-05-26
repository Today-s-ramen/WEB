import styled from 'styled-components';

const FooterWrapper = styled.footer`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.orange};
  color: ${({ theme }) => theme.color.white};
`;

const Footer = () => {
  return <FooterWrapper>Copyright ⓒ 2022 Today Noodles All rights reserved.</FooterWrapper>;
};

export default Footer;
