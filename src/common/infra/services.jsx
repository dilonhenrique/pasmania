//https://bitbar.online/util/api/v3/getmenu.php?authkey=PASMANIA&id=4436&index=1
//https://bitbar.online/util/api/v3/getmenu.php?authkey=KALEKEBAB&id=3327&index=1

import axios from "axios";

export const bitbarApi = axios.create({
  baseURL: 'https://bitbar.online/util/api/v3/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const bitbar = {
  getMenu: async () => {
    const response = await bitbarApi.get('getmenu.php?authkey=PASMANIA&id=4436&index=1');
    return response.data;
  }
}