import service from './axios'

export const allGoodsType = function () {
    return service(
        {
            url: '/product/getBaseCategoryList',
            method: 'get',
        }
    )
}


export const reqSearchInfo = function (info) {
    return service(
        {
            url: '/list',
            method: 'post',
            data:info
        }
    )
}

export const reqGoodsDetail = function (skuId) {
    return service(
        {
            url: `/item/${skuId}`,
            method: 'get',
        }
    )
}

export const addShopcart = function (skuId,skuNum) {
    return service(
        {
            url: `/cart/addToCart/${skuId}/${skuNum}`,
            method: 'post',
        }
    )
}

export const getShopcart = function () {
    return service(
        {
            url: '/cart/cartList',
            method: 'get',
        }
    )
}

export const deleteItem = function (skuId) {
    return service(
        {
            url: `/cart/deleteCart/${skuId}`,
            method: 'delete',
        }
    )
}

export const changeChecked = function (skuId,isChecked) {
    return service(
        {
            url: `/cart//checkCart/${skuId}/${isChecked}`,
            method: 'get',
        }
    )
}

export const register = function (info) {
    return service(
        {
            url: "/user/passport/register",
            method: 'post',
            data:info
        }
    )
}

export const getCode = function (phone) {
    return service(
        {
            url: `/user/passport/sendCode/${phone}`,
            method: 'get',
        }
    )
}

export const getToken = function (info) {
    return service(
        {
            url: '/user/passport/login',
            method: 'post',
            data:info
        }
    )
}

export const logout = function () {
    return service(
        {
            url: '/user/passport/logout',
            method: 'get',
        }
    )
}

