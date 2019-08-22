import React from 'react';
import { useDispatch } from 'react-redux';
import { plusProductToBucket, minusProductToBucket } from '../../store/bucket/actions';
import styled from 'styled-components';

const Img = styled.img`
    width: 60px;
    height: auto;

    align-self: center;
    justify-self: right;
`;

const Name = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    align-self: center;

    padding-left: 10px;
`;

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
`;

// в font-awesome нельзя сделать иконки потоньше, поэтому использовал это небольшой хак
const Minus = styled.i`
    -webkit-text-stroke: 2px white;
    margin-top: 1px;

    font-size: 16px;
    cursor: pointer;
`;

const Quantity = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;

    margin-left: 5px;
    margin-right: 5px;
`;

// в font-awesome нельзя сделать иконки потоньше, поэтому использовал это небольшой хак
const Plus = styled.i`
    -webkit-text-stroke: 2px white; 
    margin-top: 1px;

    font-size: 16px;
    cursor: pointer;
`;

const Price = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ff3f5f;
    align-self: center;
    justify-self: right;
`;

const Position = ({ _id, uri, title, quantity, price }) => {
    const dispatch = useDispatch();

    const handleOnMinusClick = () => {        
        dispatch(minusProductToBucket(_id));
    };

    const handleOnPlusClick = () => {
        quantity < 100 && dispatch(plusProductToBucket(_id));
    };

    return (
        <React.Fragment>    
            <Img src={uri}></Img>
            <Name>{title}</Name>
            <QuantityWrapper>
                <Minus className="fa fa-minus" onClick={handleOnMinusClick} />
                <Quantity>{quantity}</Quantity>
                <Plus className="fa fa-plus" onClick={handleOnPlusClick} />
            </QuantityWrapper>
            <Price>{price} &#8381;</Price>
        </React.Fragment>      
    );
};

export default Position;
