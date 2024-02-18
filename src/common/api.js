import axios from "axios";
import {EMAIL_SUBSCRIBE, FIND_ROUTES, GET_CITIES, LAST_ROUTES} from "./urls.config";
import "@babel/plugin-syntax-throw-expressions"

export const getCities = (v) => {
  if (!v)
    return

  return axios.get(GET_CITIES, {
    params: {
      name: v
    }
  })
    .then(({ data }) => data)
    .catch(e => console.log(e))
}

export const subscribe = (v) => {
  if (!v)
    return

  return axios.get(EMAIL_SUBSCRIBE, {
    params: {
      email: v
    }
  })
    .then(({ data }) => data)
    .catch(e => e)
}

export const findRoutes = (v) => {
  if (!v.fromId || !v.toId )
    return

  return axios.get(FIND_ROUTES, {
    params: {
      from_city_id: v.fromId,
      to_city_id: v.toId,
      date_start: v.dateStart,
      date_end: v.dateEnd,
      have_fourth_class: v.fourth,
      have_third_class: v.third,
      have_second_class: v.second,
      have_first_class: v.first,
      have_wifi: v.wifi,
      have_express: v.express,
      date_start_arrival: v.dateFrom,
      date_end_arrival: v.dateTo,
      price_from: v.price?.length && v.price[0],
      price_to: v.price?.length && v.price[1]
    }
  })
    .then(({ data }) => data)
    .catch(e => e)
}

export const lastRoutes = () => {
  return axios.get(LAST_ROUTES)
    .then(({ data }) => data)
    .catch(e => e)
}

export const seatsInfo = (id) => {
  return axios.get(FIND_ROUTES + `/${id}/seats`, {
  })
    .then(({ data }) => data)
    .catch(e => e)
}