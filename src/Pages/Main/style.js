import styled, { keyframes, css } from 'styled-components';

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

const animate = keyframes`
from{
    transform: rotate(0deg);
} to {
    transform: rotate(360deg);
}
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: "submit",
    disabled: props.loading
}))`
background-color: #0d2636;
border: 0;
border-top-right-radius: 4px;
border-bottom-right-radius: 4px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: center;

&[disabled]{
    cursor: not-allowed;
    opacity: 0.5;
}

${props => props.loading &&
        css`
        svg {
    animation: ${animate} 2s linear infinite;
        }
`
    }
`;

export const List = styled.ul`
list-style: none;
margin-top: 20px;

li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & + li {
        border-top: 1px solid #eee;
    }

    a {
        color: #0d2636;
        text-decoration: none;
    }
}

`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
background-color: transparent;
color: #0d2636;
border: 0;
padding: 8px 7px;
outline: 0;
border-radius: 4px;
opacity: 0;
transition: all 0.5s;

:hover {
    opacity: 1;
}
`;