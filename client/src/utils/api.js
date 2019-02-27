import { fetchRequest } from './';
const api = {
  saveUserLifts: async data => {
    try {
      const resp = await fetchRequest('/api/userInfo', 'PUT', data);
      console.log('RESPONSE', resp);
      return resp.ok ? true : resp.status;
    } catch (err) {
      if (err) console.error(err);
    }
  },
  createAccessoryPlan: async (userId, basePlan) => {
    try {
      let resp = await fetchRequest('/api/accessory', 'POST', { userId, basePlan });
      console.log(resp);
    } catch (err) {
      if (err) console.error(err);
    }
  },
  getAccessoryPlan: async userId => {
    console.log('getaccessoryplan, userid: ', userId);
    try {
      let resp = await fetch(`/api/accessory/${userId}`);
      resp = await resp.json();
      const respArray = [];
      if (resp.length) {
        const weekLength = resp[resp.length - 1].dayIndex;
        for (let i = 0; i < weekLength; i++) {
          respArray.push(resp.filter(item => item.dayIndex === i));
          //Reduces the amount of work filter does but only works if array order is retained
          const sliceIndex = respArray[i].length;
          resp = resp.slice(sliceIndex);
        }
      }
      console.log(respArray);

      return respArray;
    } catch (err) {
      if (err) console.error(err);
    }
  },
};

export default api;
