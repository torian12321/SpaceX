export interface ILaunchCard {
  id: string,
  title: string,
  details: string,
  date: string,
  onClick: (id: string) => void,
};

export interface ILaunchCardList {
  children: any;
}
