// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "../Features/modals/modalSlice";
import registrationReducer from "../app/Slices/Registration/RegistrationSlice";
import { Registrationapi } from "../app/api/Registration";
import { Loginapi } from "../app/api/Login";
import loginReducer from "../app/Slices/Login/LoginSlice";
import get_all_main_location_Reducer from "../app/Slices/PropertyScreenFiltter/get_all_main_location/get_all_main_location_Slice";
import { get_all_main_location_api } from "../app/api/PropertyScreenFiltterApi/get_all_main_location_api";
import { get_bathroom_api } from "../app/api/PropertyScreenFiltterApi/get_bathroom_api";
import get_bathroom_Reducer from "./Slices/PropertyScreenFiltter/get_bathroom/get_bathroomSlice";
import { get_bedroom_api } from "../app/api/PropertyScreenFiltterApi/get_bedroom_api";
import get_bedroom_Reducer from "./Slices/PropertyScreenFiltter/get_bedroom/get_bedroomSlice";
import { get_all_garages_api } from "../app/api/PropertyScreenFiltterApi/get_all_garages_api";
import get_all_garages_Reducer from "./Slices/PropertyScreenFiltter/get_garages/all_garagesSlice";
import { get_property_type_api } from "../app/api/PropertyScreenFiltterApi/get_prperty_type_api";
import get_property_type_Reducer from "./Slices/PropertyScreenFiltter/get_property_type/get_property_type_Slice";
import { get_sortby_options_api } from "./api/PropertyScreenFiltterApi/sortby_api";
import get_sortby_options_Reducer from "./Slices/PropertyScreenFiltter/get_all_sortby/get_sortby_options_Slice";
import { get_all_property_feature_api } from "../app/api/PropertyScreenFiltterApi/get_all_property_feature_api";
import get_all_property_feature_Reducer from "./Slices/PropertyScreenFiltter/get_all_property_feature/get_all_property_feature_Slice";
import { get_filtter_api } from "../app/api/PropertyScreenFiltterApi/filtter_api";
import get_all_filtter_Reducer from "./Slices/PropertyScreenFiltter/main_filtter/filtter_Slice";
import { get_all_status_api } from "./api/PropertyScreenFiltterApi/get_all_status_api";
import get_all_status_Reducer from "../app/Slices/PropertyScreenFiltter/get_all_status/get_all_statusSlice";
import { PropertyDetailScreen_api } from "./api/PropertyDetailScreenApi/PropertyDetailScreen_api";
import forgetPasswordReducer from "../app/Slices/ForgetPassword/ForgetpasswordSlice";
import { ForgetPasswordApi } from "../app/api/ForgetPasswordApi";
import VerfiyOtpReducer from "../app/Slices/VerifyOtp/VerifyOtpSlice";
import { VerifyOptapi } from "../app/api/VerifyOtpApi";
import ResetPasswordReducer from "../app/Slices/ResetPassword/ResetPasswordSlice";
import { ResetPasswordapi } from "../app/api/ResetPasswordApi";
import { user_add_sceduleApi } from "./api/user_add_scedule/user_add_sceduleApi";

export const store = configureStore({
  reducer: {
    modals: modalReducer,
    registration: registrationReducer,
    login: loginReducer,
    forgetpassword: forgetPasswordReducer,
    verifyotp: VerfiyOtpReducer,
    resetpassword: ResetPasswordReducer,
    get_all_main_location: get_all_main_location_Reducer,
    get_bathroom: get_bathroom_Reducer,
    get_bedroom: get_bedroom_Reducer,
    get_all_garages: get_all_garages_Reducer,
    get_property_type: get_property_type_Reducer,
    get_sortby_options: get_sortby_options_Reducer,
    get_all_property_feature: get_all_property_feature_Reducer,
    get_all_filtter: get_all_filtter_Reducer,
    get_all_status: get_all_status_Reducer,
    PropertyDetailScreen: PropertyDetailScreen_api.reducer,
    user_add_scedule: user_add_sceduleApi.reducer,

    [Registrationapi.reducerPath]: Registrationapi.reducer,
    [Loginapi.reducerPath]: Loginapi.reducer,
    [get_all_main_location_api.reducerPath]: get_all_main_location_api.reducer,
    [get_bathroom_api.reducerPath]: get_bathroom_api.reducer,
    [get_bedroom_api.reducerPath]: get_bedroom_api.reducer,
    [get_all_garages_api.reducerPath]: get_all_garages_api.reducer,
    [get_property_type_api.reducerPath]: get_property_type_api.reducer,
    [get_sortby_options_api.reducerPath]: get_sortby_options_api.reducer,
    [get_all_property_feature_api.reducerPath]:
      get_all_property_feature_api.reducer,
    [get_filtter_api.reducerPath]: get_filtter_api.reducer,
    [get_all_status_api.reducerPath]: get_all_status_api.reducer,
    [PropertyDetailScreen_api.reducerPath]: PropertyDetailScreen_api.reducer,
    [ForgetPasswordApi.reducerPath]: ForgetPasswordApi.reducer,
    [VerifyOptapi.reducerPath]: VerifyOptapi.reducer,
    [ResetPasswordapi.reducerPath]: ResetPasswordapi.reducer,
    [user_add_sceduleApi.reducerPath]: user_add_sceduleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(Registrationapi.middleware)
      .concat(Loginapi.middleware)
      .concat(get_all_main_location_api.middleware)
      .concat(get_bathroom_api.middleware)
      .concat(get_bedroom_api.middleware)
      .concat(get_all_garages_api.middleware)
      .concat(get_property_type_api.middleware)
      .concat(get_sortby_options_api.middleware)
      .concat(get_all_property_feature_api.middleware)
      .concat(get_filtter_api.middleware)
      .concat(get_all_status_api.middleware)
      .concat(PropertyDetailScreen_api.middleware)
      .concat(ForgetPasswordApi.middleware)
      .concat(VerifyOptapi.middleware)
      .concat(ResetPasswordapi.middleware)
      .concat(user_add_sceduleApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
