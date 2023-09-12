export interface Images {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
  user: {
    name: string;
  };
  description: string | null;
}




export interface Task {
  id: number;
  text: string;
  completed: boolean;
}