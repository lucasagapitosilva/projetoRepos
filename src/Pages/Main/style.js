import styled from 'styled-components';

export const Container = styled.div`
max-width: 700px;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 20px rgba(0,0,0, 0.4);
padding: 30px;
margin: 80px auto;

h1 {
    font-size: 1.4em;
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
        margin-right: 10px;
    }
}
`;

export const Form = styled.form`
margin-top: 1.7em;
display: flex;
flex-direction: row;

input {
    flex: 1;
    border: 1px solid #ddd;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 1.1em
}
`;

export const SubmitButton = styled.button`
background-color: #0d2636;
border: 0;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: center;
`;