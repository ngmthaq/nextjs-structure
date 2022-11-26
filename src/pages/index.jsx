import { useTrans } from "../hooks";
import { MainLayout } from "../layouts";
import { getFullUrl, trans } from "../utils/server.utils";

const Home = ({ locale, locales, url, title }) => {
  const { trans, changeLocale } = useTrans(locale, locales);

  return <MainLayout url={url} title={title}></MainLayout>;
};

export default Home;

export async function getServerSideProps(context) {
  return {
    props: {
      locales: context.locales,
      locale: context.locale,
      url: getFullUrl(context),
      title: trans(context, "hello", { name: "demo" }),
    },
  };
}
