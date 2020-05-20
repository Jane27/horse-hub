import { observable, runInAction, action } from "mobx";
import { getHorses, addHorse, updateHorse,getHorseById } from "../services/api";
import { IHorse } from "../types";

class HorseStore {
  @observable horses = [] as IHorse[];
  @observable state: { loading: boolean; error: boolean } = {
    loading: false,
    error: false,
  };


  /**
   * Load horses list from API
   */
  @action async load() {
    let data: IHorse[];
    try {
      this.state.loading = true;
      data = await getHorses();
    } catch (e) {
      this.state.error = true;
      return;
    }

    runInAction(() => {
      this.horses = data;
      this.state.loading = false;
    });
  }

/**
   * Add new horse
   * @param horse Horse details
   */
  @action async addHorse(horse: IHorse) {
    let id: string;
    try {
      this.state.loading = true;
      id = await addHorse(horse);
    } catch (e) {
      this.state.error = true;
      return;
    }

    runInAction(() => {
      horse.id = id;
      this.horses.push(horse);
      this.state.loading = false;
    });
  }

  /**
   * Update horse
   * @param horse 
   */
  @action async updateHorse(horse: IHorse) {
    let data: IHorse;
    try {
      this.state.loading = true;
      data = await updateHorse(horse);
    } catch (e) {
      this.state.error = true;
      return;
    }

    runInAction(() => {
      this.horses.push(data);
      this.state.loading = false;
    });
  }

    /**
   * Clear all selection
   */
  @action async clearAllSelection() {
    this.horses = this.horses.map((h) => {
      h.isSelected = false;
      return h;
    });
  }

   /**
   * Toggle selected horse
   * @param horseId Horse Id
   * @param isSelected Horse is selection status
   */
  @action async toggleSelect(horseId: string, isSelected: boolean) {
    this.horses = this.horses.map((h) => {
      if (h.id === horseId) {
        h.isSelected = isSelected;
      }
      return h;
    });
  }
}

export const store = new HorseStore();
