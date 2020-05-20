export interface IHorse {
    id?: string;
    name: string;
    isSelected?: boolean;
    profile: {
      favouriteFood: string;
      physical: {
        height: number;
        weight: number;
      }
    }
  }