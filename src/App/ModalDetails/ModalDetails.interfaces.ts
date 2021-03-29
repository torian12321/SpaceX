export interface IModalDetails {
  children?: never,
  isVisible: boolean,
  closeAction: Function,
  data: {
    title: string,
    desc: string,
    img: string,
    link: string,
  },
};
