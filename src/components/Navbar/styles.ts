import styled from 'styled-components';

export const NavBarWrapper = styled.header`
    z-index: 1000;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    width: 100%;

    height: 4.5rem;
    padding: 0 10rem;

    transition: background-color 0.3s ease-in;

    ul {
        display: flex;
        gap: 5rem;

        li {
        list-style: none;

        a {
            text-decoration: none;
            font-size: 1.125rem;
            font-weight: 700;

            color: ${(props) => props.theme['green-500']};
            border-bottom: 2.5px solid transparent;
            border-top: 2.5px solid transparent;

            &.active {
                color: ${(props) => props.theme['green-300']};            
            }

            &:hover {
                border-bottom: 2px solid ${(props) => props.theme['green-500']};

            }
        }
        }
    }

    &.headerSolid {
        box-shadow: 0px 1px 5px #888;
        background: ${(props) => props.theme['brown-300']};
    }
`;

export const NavBarHomeWrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;

    height: 4.5rem;
    padding-left: 10rem;

    position: fixed;

    ul {
        display: flex;
        justify-content: center;
        gap: 5rem;

        li {
            list-style: none;

            a {
                text-decoration: none;  
                color: ${(props) => props.theme['green-500']};
                font-size: 1.125rem;
                font-weight: 700;

                border-bottom: 2.5px solid transparent;
                border-top: 2.5px solid transparent;

                &:hover {
                    border-top: 2px solid transparent;
                    border-bottom: 2px solid ${(props) => props.theme['green-500']};
                }
            }
        }
    }
`;