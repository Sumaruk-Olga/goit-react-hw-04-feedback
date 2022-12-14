import styled from "@emotion/styled";

export const Container = styled.div`    
    display: 'flex';
    flex-direction: 'column'; 
    height: 100%;
    width: 90%;       
    text-align: center;
    font-size: ${p => p.theme.fontSizes.m};
    color: ${p => p.theme.text.primary};
    border-radius: ${p=>p.theme.radii.normal};
    background-color: ${p => p.theme.colors.page};
    box-shadow: ${p => p.theme.shadow}; 
    margin-left: auto;
    margin-right: auto;
    padding-top: 5px;
    padding-bottom: 5px;    

     @media screen and (min-width: 768px) {
      width: 75%;
    }
    @media screen and (min-width: 1200px) {
      width: 30%;
  }
`;