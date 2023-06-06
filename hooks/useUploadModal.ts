import { create } from "zustand";

interface IUploadModalStore {
  isOpen: boolean;
  onOpen: VoidFunction;
  onClose: VoidFunction;
}

const useUploadModal = create<IUploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useUploadModal;
