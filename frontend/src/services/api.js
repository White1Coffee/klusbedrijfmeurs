```jsx
import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Voeg automatisch de JWT-token toe wanneer iemand is ingelogd.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export const authApi = {
  login: async (email, password) => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/register", userData);

    return response.data;
  },
};

export const appointmentApi = {
  getAppointments: async () => {
    const response = await api.get("/appointments");

    return response.data;
  },

  getAvailableDates: async () => {
    const response = await api.get("/appointments/available");

    return response.data;
  },

  createAppointment: async (appointmentData) => {
    const response = await api.post(
      "/appointments/book",
      appointmentData
    );

    return response.data;
  },

  approveAppointment: async (id) => {
    const response = await api.put(
      `/appointments/${id}/approve`
    );

    return response.data;
  },

  rejectAppointment: async (id) => {
    const response = await api.put(
      `/appointments/${id}/reject`
    );

    return response.data;
  },
};

export const reviewApi = {
  getReviews: async () => {
    const response = await api.get("/reviews");

    return response.data;
  },

  createReview: async (reviewData) => {
    const response = await api.post("/reviews", reviewData);

    return response.data;
  },
};

export default api;
```
