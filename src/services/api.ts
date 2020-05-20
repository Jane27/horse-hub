import axios from "axios";
import { IHorse } from "../types";

const host = `http://localhost:3016`;

export const getHorses = async (): Promise<IHorse[]> => {
  const res = await axios.get(`${host}/horse`);
  return res.data;
};

export const getHorseById = async (id: string): Promise<IHorse> => {
  const res = await axios.get(`${host}/horse/${id}`);
  return res.data;
};

export const addHorse = async (horse: IHorse): Promise<any> => {
  const res = await axios.put(`${host}/horse`, horse);
  return res.data;
};

export const updateHorse = async (horse: IHorse): Promise<any> => {
  const res = await axios.put(`${host}/horse/${horse.id}`, horse);
  return res.data;
};
