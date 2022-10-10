export interface AppListItem {
  android: string | null;
  ios: string | null;
}

const apps: { [key: string]: AppListItem } = {
  "b2b-uae": {
    android: `https://play.google.com/store/apps/details?id=com.flyhub.b2b.uae`,
    ios: `https://apps.apple.com/app/flyhub-agent-uae/id6443584285`,
  },
};

export default apps;
