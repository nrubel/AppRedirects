export interface AppListItem {
  andorid: string | null;
  ios: string | null;
}

const apps: { [key: string]: AppListItem } = {
  b2b_uae: {
    andorid: `https://play.google.com/store/apps/`,
    ios: `https://www.apple.com/app-store/`,
  },
};

export default apps;
