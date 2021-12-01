import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.footer};
  padding: 100px 0 60px;

  ul {
    list-style-type: none;
    color: #fff;
    padding: 80px 0 0;
  }

  ul li {
    margin-bottom: 20px;
  }
  p {
    color: #fff;
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
