import styled from "styled-components";
import { Link } from "react-router-dom";

export const Loading = styled.div`
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background-color: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.5);
    padding: 30px;
    margin: 80px auto;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 150px;
        border-radius: 20%;
        margin: 20px;
    }

    h1 {
        font-size: 30px;
        color: #0d2636;
        text-transform: capitalize;
    }

    p {
        margin-top: 5px;
        font-size: 14px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background-color: transparent;
`;

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li {
        display: flex;
        padding: 15px 10px;

        & + li {
            margin-top: 12px;
        }

        img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            border: 2px solid #0d2636;
        }

        div {
            flex: 1;
            margin-left: 12px;

            strong{
                font-size: 15px;
                
                a {
                    text-decoration: none;
                    color: #222;
                    transition: all 0.3s;

                    &:hover {
                        color: #0071db
                    }
                }

                span {
                    background-color: #222;
                    color: #fff;
                    border-radius: 4px;
                    font-size: 12px;
                    font-weight: 600;
                    padding: 5px 7px;
                    margin-left: 10px
                }
            }

            p {
                margin-top: 10px;
                font-size: 12px;
                color: #000;
            }

        }
    }
`;

export const PageActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border: 0;
        outline: 0;
        background-color: #222;
        color: #fff;
        padding: 5px 10px;
        border-radius: 4px;
        transition: all 0.5s;
        margin-top: 15px;

        &:hover {
            opacity: 0.8;
        }

        &:disabled {
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;