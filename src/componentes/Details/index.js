import React, { useEffect, useReducer } from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const RootContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;


`;

const Header = styled.div`

    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 2rem;

`;


const CustonLink = styled(Link)`

    text-decoration: none;
    color: white;

`;

const CustomImg = styled.img`

    width: 100%;

`;


const getUrlQuery = (attr) => {

    const params = new URLSearchParams(window.location.search);
    return params.get(attr);

}

const dataReducer = (state, action) => {

    switch (action.type) {

        case 'SET_DATA':
            return {
                result: action.payload,
                loading: false
            };

        default:
            return state;

    }

};

const Details = () => {

    const [data, dispatchData] = useReducer(dataReducer, { result: [], loading: true });

    useEffect(() => {

        Axios.get(`https://pokeapi.co/api/v2/pokemon/${getUrlQuery('id')}`).then(response => {

            dispatchData({ type: 'SET_DATA', payload: response.data });

        });

    }, []);

    return (

        <RootContainer>

            {(!data.loading) && <>

                <Header><Button variant={'contained'}><CustonLink to="/">Voltar</CustonLink></Button></Header>

                <p>
                    <CustomImg src={data.result.sprites.other.home.front_default} alt='pokemon' />
                </p>

                <div>

                    <h1>#{data.result.id} {data.result.name[0].toUpperCase() + data.result.name.slice(1)}</h1>

                </div>

            </>

            }

        </RootContainer>

    )

};

export default Details;