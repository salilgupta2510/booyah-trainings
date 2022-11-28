import create from "zustand";
import {persist} from 'zustand/middleware';

const TrainingCalendarStore = create(
    persist(
    (set) => ({
    trainingCalendarData:[],
    setTrainingCalendarData : (inputData) => {
        set({
            trainingCalendarData:inputData
        })
    }
  })))

  export default TrainingCalendarStore;