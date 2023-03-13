import axios from "axios";
import { BsWindowSidebar } from "react-icons/bs";
import { redirect, useNavigate } from "react-router-dom";
import { useAxios } from "../components/hooks/useAxios";

export const getAllProducts = async () => {
  try {
    return await axios.get("http://localhost:8081/api/productsAll");
  } catch (err) {
    console.log(err);
    if (err.message == "Network Error") {
      console.log(err.message);
      return "Network Error";
    }
  }
};

export const loginCustomer = async (data) => {
  return await axios.post("http://localhost:8084/api/customer/loginUser", data);
};

export const loginSeller = async (data) => {
  return await axios.post("http://localhost:8084/api/seller/loginUser", data);
};

export const signupCustomer = async (data) => {
  return await axios.post("http://localhost:8080/api/addCustomer", data);
};

export const signupSeller = async (data) => {
  return await axios.post("http://localhost:8080/api/addSeller", data);
};

export const getCustomer = async (email) => {
  return await axios.get(`http://localhost:8080/api/customer/${email}`);
};

export const getSeller = async (email) => {
  return await axios.get(`http://localhost:8080/api/seller/${email}`);
};

export const addToCartCustomer = async (customerid, productid) => {
  try {
    return await axios.post(
      `http://localhost:8082/api/${customerid}/${productid}/addToCart`
    );
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const deleteFromCartCustomer = async (customerid, productid) => {
  return await axios.delete(
    `http://localhost:8082/api/${customerid}/${productid}/deletefromCart`
  );
};

export const getCartCustomer = async (customerid) => {
  return await axios.get(`http://localhost:8082/api/${customerid}/cartsAll`);
};

export const getCustomerOrders = async (customerid) => {
  return await axios.get(`http://localhost:8082/api/${customerid}/ordersAll`);
};

export const addToOrderCustomer = async (customerid, data) => {
  try {
    return await axios.post(
      `http://localhost:8082/api/${customerid}/upi/addToOrder`,
      data
    );
  } catch (err) {
    return err;
  }
};

export const getOrderlistPrice = async (data) => {
  return await axios.post(`http://localhost:8082/api/order/price`, data);
};
export const deleteCartCustomer = async (customerid) => {
  return await axios.delete(
    `http://localhost:8082/api/${customerid}/deleteCart`
  );
};

export const isUserSeller = async (email) => {
  return await axios.get(`http://localhost:8084/api/isSeller/${email}`);
};

export const addProduct = async (sellerid, values) => {
  return await axios.post(
    `http://localhost:8081/api/${sellerid}/addProduct`,
    values
  );
};

export const deleteProduct = async (sellerid, productid) => {
  return await axios.delete(
    `http://localhost:8081/api/${sellerid}/${productid}/delete`
  );
};

export const addReviewCustomer = async (productid, customerid, review) => {
  return await axios.post(
    `http://localhost:8082/api/${productid}/${customerid}/addReview`,
    { rating: review }
  );
};

export const getReviewsAll = async () => {
  return await axios.get(`http://localhost:8082/api/reviewsAll`);
};
