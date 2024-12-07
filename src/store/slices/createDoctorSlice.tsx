// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../index'

// // interface CounterState {
// //   value: number
// // }

// const initialState = {
//   personalInformation: {
//     name: "",
//     specialization: "",
//     email: "",
//     phone: "",
//     address: [{
//         addressLineOne: "",
//         addressLineTwo: "",
//         city: "",
//         state: "",
//         country: "",
//         pincode: ""
//     }],
//     gender: "",
//     doctorType: ""
//   },
//   medicalRegistration: {
//     registrationNo:"",
//     registrationCouncil: "",
//     registrationYear: ""
//   },
//   education: [{
//     degree:"",
//     institute: "",
//     yearOfCompletion: "",
//     yearsOfExperience: ""
//   }],
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   initialState,
//   reducers: {
//     increment: (state) => {
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     },
//   },
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer