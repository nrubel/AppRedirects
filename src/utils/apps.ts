export interface AppListItem {
  andorid: string | null;
  ios: string | null;
}

const apps: { [key: string]: AppListItem } = {
  b2b_uae: {
    andorid: null,
    ios: null,
  },
  b2b_bd: {
    andorid: null,
    ios: null,
  },
};

export default apps;
