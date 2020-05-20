import { observable, runInAction, action } from "mobx";
import { getHorses } from "../services/api";
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
}


export const store = new HorseStore();
