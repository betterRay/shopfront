import service from './axios'

export const allGoodsType = function () {
    return service(
        {
            url: '/product/getBaseCategoryList',
            method: 'get',
        }
    )
}//获取商品页类型


export const reqSearchInfo = function (info) {
    return service(
        {
            url: '/list',
            method: 'post',
            data:info
        }
    )
}//获取商品页信息

export const reqGoodsDetail = function (skuId) {
    return service(
        {
            url: `/item/${skuId}`,
            method: 'get',
        }
    )
}//获取商品详情

export const addShopcart = function (skuId,skuNum) {
    return service(
        {
            url: `/cart/addToCart/${skuId}/${skuNum}`,
            method: 'post',
        }
    )
}//加入购物车

export const getShopcart = function () {
    return service(
        {
            url: '/cart/cartList',
            method: 'get',
        }
    )
}//获取购物车列表

export const deleteItem = function (skuId) {
    return service(
        {
            url: `/cart/deleteCart/${skuId}`,
            method: 'delete',
        }
    )
}//删除购物车选项

export const changeChecked = function (skuId,isChecked) {
    return service(
        {
            url: `/cart//checkCart/${skuId}/${isChecked}`,
            method: 'get',
        }
    )
}//改变购物车勾选状态

export const register = function (info) {
    return service(
        {
            url: "/user/passport/register",
            method: 'post',
            data:info
        }
    )
}//注册用户

export const getCode = function (phone) {
    return service(
        {
            url: `/user/passport/sendCode/${phone}`,
            method: 'get',
        }
    )
}//获取验证码

export const getToken = function (info) {
    return service(
        {
            url: '/user/passport/login',
            method: 'post',
            data:info
        }
    )
}//登录

export const logout = function () {
    return service(
        {
            url: '/user/passport/logout',
            method: 'get',
        }
    )
}//退出登录

export const getUserinfo = function () {
    return service(
        {
            url: '/user/passport/auth/getUserInfo',
            method: 'get',
        }
    )
}//获取用户信息

export const gettradeinfo = function () {
    return service(
        {
            url: '/order/auth/trade',
            method: 'get',
        }
    )
}//获取订单信息

export const getUserAddress = function () {
    return service(
        {
            url: '/user/userAddress/auth/findUserAddressList',
            method: 'get',
        }
    )
}//获取用户地址信息

export const submitOrder = function (tradeNo,info) {
    return service(
        {
            url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
            method: 'post',
            data:info
        }
    )
}//提交用户订单信息

export const getOrderPay = function (orderId) {
    return service(
        {
            url: `/payment/weixin/createNative/${orderId}`,
            method: 'get',
        }
    )
}//根据订单号获取订单支付页信息

export const getOrderPayState = function (orderId) {
    return service(
        {
            url: `/payment/weixin/queryPayStatus/${orderId}`,
            method: 'get',
        }
    )
}//根据订单号获取订单支付页信息

export const getOrderList = function (page,limit) {
    return service(
        {
            url: `/order/auth/${page}/${limit}`,
            method: 'get',
        }
    )
}//获取我的订单列表