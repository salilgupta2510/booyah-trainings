import create from "zustand";
import {persist} from 'zustand/middleware';

const TestimonialStore = create(
    persist(
    (set) => ({
    testimonialData:[],
    setTestimonialData : (inputData) => {
        set({
            testimonialData:inputData
        })
    }
  })))

  export default TestimonialStore;