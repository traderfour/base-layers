export const useSidebar = () =>
  useState<Ref<boolean>>("sidebar", () => ref(true));
export const toggleSidebar = (value: Ref<boolean>) => {
  const sidebar = useSidebar();
  sidebar.value = value;
};
