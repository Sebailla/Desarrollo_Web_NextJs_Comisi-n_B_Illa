import { addDoc, collection, doc, updateDoc, getFirestore } from 'firebase/firestore/lite';
import React, { FC, ReactNode, useState } from 'react';
import Swal from 'sweetalert2';

// Interfaces para definir los tipos de la información
interface Order {
    items: Record<string, any>[];
    userId: string;
    timestamp: any;
    total: number;
}

interface AppContextState {
    carrito: Record<string, any>[];
    addProductToCart: (product: Record<string, any>) => void;
    quantityCart: number;
    createNewOrder: (order: Order) => void;
    lastOrder: string;
}

// Crear el contexto
export const AppContext = React.createContext<AppContextState>({
    carrito: [],
    addProductToCart: () => { },
    quantityCart: 0,
    createNewOrder: () => { },
    lastOrder: '',
});

const { Provider } = AppContext;

// El componente ContextProvider
const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [carrito, setCarrito] = useState<Record<string, any>[]>([]);
    const [orderId, setOrderId] = useState<string>('');

    const addProductToCart = (product: Record<string, any>) => {
        setCarrito([...carrito, product]);
    }

    // Crear la orden de compra
    const createNewOrder = (order: Order) => {
        const db = getFirestore();
        const orders = collection(db, 'orders');

        addDoc(orders, order)
            .then((snapshot) => {
                setOrderId(snapshot.id);
                setCarrito([]);
                // SweetAlert
                Swal.fire(
                    'Felicitaciones!',
                    `Se orden "${snapshot.id}", se realizo correctamente`,
                    'success'
                );
                // Actualizar el Id
                const getDoc = doc(db, 'orders', snapshot.id);
                updateDoc(getDoc, { ordersId: snapshot.id });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <Provider value={{ carrito, addProductToCart, quantityCart: carrito.length, createNewOrder, lastOrder: orderId }}>
            {children}
        </Provider>
    );
};

export default ContextProvider;

// Fin del componente context