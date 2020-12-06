import React, { useState, useEffect, useRef } from 'react';

import products from '../../data/products.json';
import ProductItem from '../../components/ProductItem';

import { formatMoney, sortList } from '../../utils';

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    OrderButton,
    LoadingIcon,
    ProductsArea,
    OrderModal,
    TextModal,
    Picker,
    TextArea
} from './styles';

import OrderIcon from '../../assets/order.svg';
import { Modalize } from 'react-native-modalize';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);
    const [order, setOrder] = useState('default');
    const modalizeRef = useRef(null);

    const getProducts = async () => {
        setLoading(true);
        setList([]);

        let productsArray = [];

        products.forEach((item) => {
            productsArray.push(item);
        });

        setList(productsArray);

        setLoading(false);

    }

    const sortProducts = (format) => {
        setOrder(format);

        let products = [];
        products.push(...list);

        products = sortList(format, products);

        setList(products);
    }

    const onOpenModal = () => {
        modalizeRef.current?.open();
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container >
            <Scroller>

                <HeaderArea>
                    <HeaderTitle>Adicione seus jogos favoritos ao carrinho</HeaderTitle>
                    <OrderButton onPress={() => onOpenModal()} >
                        <OrderIcon width="30" height="30" fill="#FFFFFF" />
                    </OrderButton>

                </HeaderArea>

                {loading &&
                    <LoadingIcon size="large" color="#FFFFFF" />
                }

                <ProductsArea >
                    {list.map((product, key) => (
                        <ProductItem key={key} data={product} />
                    ))}
                </ProductsArea>


            </Scroller>

            <Modalize
                ref={modalizeRef}
                snapPoint={150}
                modalHeight={150}
            >

                <TextArea>
                    <TextModal>Ordernar produtos por:</TextModal>
                </TextArea>

                <OrderModal >
                    <Picker

                        selectedValue={order}
                        onValueChange={(itemValue, itemIndex) => sortProducts(itemValue)}
                    >
                        <Picker.Item label="Ordem Padrão" value="default" />
                        <Picker.Item label="Ordem Alfabética" value="a-z" />
                        <Picker.Item label="Ordem pelo preço" value="price" />
                        <Picker.Item label="Ordem pela popularidade" value="score" />
                    </Picker>
                </OrderModal>

            </Modalize>

        </Container>
    )
}

export default Home;