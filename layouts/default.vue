<template>
  <Html :lang="locale" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ title }}</Title>

      <Meta name="description" :content="description" />
      <Meta name="og:description" :content="description" />
      <Meta name="twitter:description" :content="description" />
      <Meta
        :name="meta.name"
        :content="meta.content"
        v-for="(meta, index) in metaList"
        :key="index"
      />
      <template v-for="link in head.link" :key="link.id">
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
    </Head>
    <Body>
      <main class="container mx-auto">
        <div class="flex flex-row gap-10 relative">
          <div class="basis-1/6">
            <Sidebar />
          </div>
          <div class="basis-5/6 mt-5 px-5">
            <Header></Header>
            <!-- Nuxt Pages -->
            <slot />
            <!-- Nuxt Pages -->
          </div>
        </div>
      </main>

      <SiteFooter />
    </Body>
  </Html>
</template>
<script setup >


//route
const route = useRoute();

//i18n
const { locale, t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

// meta tags for seo and social media  and more
// setup meta tags dynamically
const title = computed(() => t("meta.title", { title: route.meta.title }));
const description = computed(() => t("meta.description"));
const metaList = computed(() => [
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "theme-color", content: "#ffffff" },
  { name: "apple-mobile-web-app-capable", content: "yes" },
  { name: "apple-mobile-web-app-status-bar-style", content: "black" },
  { name: "apple-mobile-web-app-title", content: "parsa jiravand" },
  { name: "msapplication-TileColor", content: "#ffffff" },
  { name: "msapplication-TileImage", content: "/icons/ms-icon-144x144.png" },
  { name: "msapplication-config", content: "/icons/browserconfig.xml" },
  { name: "format-detection", content: "telephone=+989166320277" },
  { name: "author", content: "parsa jiravand" },
  { name: "og:site_name", content: "parsa jiravand" },
  { name: "og:url", content: "https://parsajiravand.netlify.app" },
  { name: "og:type", content: "website" },
  { name: "og:title", content: "parsa jiravand" },
  {
    name: "og:image",
    content: "https://avatars.githubusercontent.com/u/54263016?v=4",
  },
  { name: "twitter:url", content: "parsajiravand" },
  { name: "twitter:title", content: "parsajiravand" },
  {
    name: "twitter:image",
    content: "https://avatars.githubusercontent.com/u/54263016?v=4",
  },
]);


</script>
<style lang="css">
.rtl {
  direction: rtl;
}
</style>
