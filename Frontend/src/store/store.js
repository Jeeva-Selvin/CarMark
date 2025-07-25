import { create } from 'zustand'

const useAuthStore = create((set) => ({
     isAuthenticated: !! localStorage.getItem("token") ,
     user: null,
     setIsAuthenticated: (status) => set({ isAuthenticated: status }),
     setUser: (user) => set({ user }),
     logout: () => {
          localStorage.removeItem("token");
          set({ isAuthenticated: false, user: null });
     }
}))

export default useAuthStore;