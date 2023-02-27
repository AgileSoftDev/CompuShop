import { SET_STATE_VIEW_CARD, SET_STEP_BUILD_PC, GET_ALL_COMPONENTS, SET_NUM_PAGINATED, SEARCH_COMPONENT, ORDER_PRICE, GET_DETAIL_COMPONENT, FILTER_BY_CATEGORY, DELETE_FILTER_CATEGORY, PICK_ARMA_TU_PC, CLEAN_ARMA_TU_PC, ADD_TO_CART, INCREMENT_CART, DECREMENT_CART, REMOVE_ITEM_CART } from "../actions/actions.types";
import { paginationArray, getCurrentComponent } from "../../utils";
import { sortByPrice } from "../../helpers/reducer.helpers";
const pc_build= JSON.parse(window.localStorage.getItem("pc_build"))

const initialState = {
    allComponents: [],
    numPaginado: 0,
    paginated: [],
    connectionON : true,
    stateViewCard: window.localStorage.getItem("viewCarStyle")===null?true:window.localStorage.getItem("viewCarStyle")==='true'?true:false,
    build_pc :pc_build?pc_build: {
        cpu: undefined,
        motherBoard: undefined,
        cooler: undefined,
        ram: undefined,
        gpu:undefined,
        storaged: undefined,
        psu: undefined,
        case: undefined,
        screen: undefined,
        peripherals:undefined,
    },
    step_build_pc:undefined,
    categoryPick: undefined,
    orderPrice:undefined,
    shoppingCart:window.localStorage.getItem("carrito")===null?[]:JSON.parse(window.localStorage.getItem("carrito")),
}

//hola
const rootReducer = (state = initialState, { type, payload }) =>{

    

    let data = undefined;
    switch (type) {
        case SET_STATE_VIEW_CARD:
            return {
                ...state,
                stateViewCard: !state.stateViewCard,
            };

        case SET_STEP_BUILD_PC:
            return{
                ...state,
                step_build_pc:payload,
            };

        case SET_NUM_PAGINATED:
            return{
                ...state,
                numPaginado: payload,
            };

        case SEARCH_COMPONENT:


            return{
                ...state,
                allComponents:payload,
                paginated: paginationArray(payload, 9),
            }
        
        case GET_ALL_COMPONENTS:
            data = state.orderPrice?sortByPrice(payload, state.orderPrice) :payload
            return{
                ...state,
                allComponents: data,
                paginated: paginationArray(data, 9),
            };
        case GET_DETAIL_COMPONENT:
            return{
                ...state,
                detailComponent: payload,
            };

        case ORDER_PRICE:
            const newOrder = sortByPrice(payload.data, payload.tipo)
            return{
                ...state
                , allComponents: newOrder,
                paginated: paginationArray(newOrder, 9),
                numPaginado:0,
                orderPrice: payload.tipo,

            };

        case FILTER_BY_CATEGORY:
             data = state.orderPrice?sortByPrice(payload.data, state.orderPrice) :payload.data
            return{
                ...state,
                allComponents: data,
                paginated:paginationArray(data),
                numPaginado: 0,
                categoryPick:payload.pick
            };

        case DELETE_FILTER_CATEGORY:
            return{
                ...state,
                categoryPick: undefined
            };
        
        case PICK_ARMA_TU_PC:

            const build_pc={
                ...state.build_pc
            };

            build_pc[getCurrentComponent[state.step_build_pc]]=payload;


            const newState= {
                ...state,
                build_pc,
            };

            window.localStorage.setItem('pc_build', JSON.stringify(build_pc))

            return{
                ...newState
                };

        case CLEAN_ARMA_TU_PC:
            localStorage.removeItem('pc_build');
            return{
                ...state,
                build_pc:{}
            }

        case ADD_TO_CART:
            const cart = state.shoppingCart.map(e=>e);
            const itemInCart = cart.find((item ,) => item._id === payload._id);
            let index;

            if (itemInCart) {

                cart.forEach((e,i)=>{
                    if (e._id === itemInCart._id) 
                    index = i
                })

                const newob={
                    ...itemInCart,
                    quantity:itemInCart.quantity+1
                }
                cart.splice(index,1,newob)
                
            } else {
                cart.push({ ...payload, quantity: 1 });
            }

            window.localStorage.setItem('carrito', JSON.stringify(cart))
            return {
                ...state,
                shoppingCart: cart,
              };
      
        case INCREMENT_CART:
            let cartt = state.shoppingCart.map(e=>e);
            const itemPlus = cartt.find((item) => item._id === payload);
            let indexx;

            cartt.forEach((e,i)=>{
                if (e._id === itemPlus._id) indexx = i
            })
            const newob={
                ...itemPlus,
                quantity:itemPlus.quantity+1
            }
            cartt.splice(indexx,1,newob)
            window.localStorage.setItem('carrito', JSON.stringify(cartt))

            return{
                ...state,
                shoppingCart: cartt,
            }

        case DECREMENT_CART:
                 let carttt = state.shoppingCart.map(e=>e);
                const itemLess = carttt.find((item) => item._id === payload);
                if (itemLess.quantity> 1) {
                let indexxx;

                carttt.forEach((e,i)=>{
                    if (e._id === itemLess._id) indexxx = i
                })
                const newobb={
                    ...itemLess,
                    quantity:itemLess.quantity-1
                }
                carttt.splice(indexxx,1,newobb)
                window.localStorage.setItem('carrito', JSON.stringify(carttt))

                return{
                    ...state,
                    shoppingCart: carttt,
                }
            }else{
                return{
                    ...state
                }
            }
            
        case REMOVE_ITEM_CART:
            const cartttt= state.shoppingCart.map(e=>e)
            const arrFiltrado = cartttt.filter((item) => item._id !== payload);    
            window.localStorage.setItem('carrito', JSON.stringify(arrFiltrado))        
            return{
                ...state
                ,shoppingCart: arrFiltrado,
            }

        default:
            return{
                ...state
            }
    }
};


export default rootReducer;