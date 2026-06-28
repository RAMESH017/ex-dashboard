import api from './api';

export const shipmentService = {
  getAll: async () => {
    const response = await api.get('/shipments');
    return response.data;
  },

  getById: async (id) => {
    const response = await api.get(`/shipments/${id}`);
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await api.patch(`/shipments/${id}/status`, { status });
    return response.data;
  },
};