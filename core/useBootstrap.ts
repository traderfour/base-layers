import { initFlowbite } from "flowbite";

const useBootstrap = () => {
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
  const route = useRoute();
  watch(
    () => route.path,
    () => {
      initFlowbite();
    }
  );
};
export default useBootstrap;
