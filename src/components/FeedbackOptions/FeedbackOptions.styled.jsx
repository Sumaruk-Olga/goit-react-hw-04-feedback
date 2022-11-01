import styled from "@emotion/styled";

export const FeedbackList = styled.ul`
margin: 0 auto;
width: 70%;
display: flex;
flex-direction: row;
justify-content: space-around;
@media screen and (min-width: 768px){
    width: 30%;
}
`;

export const FeedbackItem = styled.li`
padding: 5px;
`;

export const Button = styled.button`
font-size: ${p=>p.theme.fontSizes.m};
background-color: ${p => p.theme.colors.primary};
border: 1px solid ${p => p.theme.colors.primary};
border-radius: ${p=>p.theme.radii.normal};
box-shadow: ${p => p.theme.shadow};
cursor: pointer;
&:hover,&:focus{
   background-color: ${p => p.theme.colors.accent};
   border: 1px solid ${p => p.theme.colors.accent};
   transform: scale(1.25);
}
`;