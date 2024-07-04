import { apiSlice } from "./apiSlice";
import { VEHICLES_URL } from "../constants";
export const vehicleApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVehicles: builder.query({
      query: () => ({
        url: `${VEHICLES_URL}/`,
      }),
    }),

    createVehicle: builder.mutation({
      query: (data) => ({
        url: `${VEHICLES_URL}/`,
        method: "POST",
        body: data,
      }),
    }),

    getVehiclesById: builder.query({
      query: (id) => ({
        url: `${VEHICLES_URL}/${id}`,
      }),
    }),

    deleteVehicle: builder.mutation({
      query: (id) => ({
        url: `${VEHICLES_URL}/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetVehiclesQuery,
  useGetVehiclesByIdQuery,
  useDeleteVehicleMutation,
  useCreateVehicleMutation,
} = vehicleApiSlice;
