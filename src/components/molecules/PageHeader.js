import React from 'react';
import styled from 'styled-components';

const StyledPageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  
  h4 {
    display: flex;
    align-items: center;
    
    &::before {
      content: '';
      display: inline-block;
      width: 7px;
      height: 100%;
      background-color: #000000;
      margin-right: 10px;
    }
  }
  
  .children {
    > * {
      margin-left: 10px;
    }
  }
`;

function PageHeader({children, title}) {
  return (
    <StyledPageHeader>
      <h4>{title}</h4>
      <div className='children'>
        {children}
      </div>
    </StyledPageHeader>
  );
}

PageHeader.defaultProps = {
  color: 'blue',
  size: 'medium',
};

export default PageHeader;