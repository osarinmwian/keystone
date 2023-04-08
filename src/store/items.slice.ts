import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { firebase_db } from "../../firebase";
import { Items } from "../interfaces";

export const getValuablesThunk = createAsyncThunk(
  "valuables/list",
  async (_, { dispatch }) => {
    const valuables: Items[] = [];
    let total = 0;
    const querySnapshot = await getDocs(collection(firebase_db, "items"));

    querySnapshot.forEach((doc) => {
      let data = doc.data();

      let valuable: Items = {
        id: doc.id,
        name: data.name,
        category: data.category,
        price: data.price,
        description: data.description,
        photo: data.photo,
      };

      total += parseInt(data.price);
      valuables.push(valuable);
    });

    dispatch(init({ list: valuables, total }));
  }
);

export interface State {
  data: {
    list: Items[];
    total: number;
  };
  loading: "loading" | "pending" | "succeeded" | "failed";
}

const initialState = {
  data: {
    list: [],
    total: 0,
  },
  loading: "loading",
} as State;

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    init(state, action) {
      state.data.list = action.payload.list;
      state.data.total = action.payload.total;
    },
    addValuable(state, action) {
      state.data.list.push(action.payload);
      state.data.total += parseInt(action.payload.price);
    },
  },
  extraReducers(builder) {
    builder.addCase(getValuablesThunk.pending, (state) => {
      state.loading = "pending";
    });

    builder.addCase(getValuablesThunk.fulfilled, (state) => {
      state.loading = "succeeded";
    });

    builder.addCase(getValuablesThunk.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const { init, addValuable } = itemsSlice.actions;

export default itemsSlice.reducer;
