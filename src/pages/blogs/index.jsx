import { useTrans } from "../../hooks";
import { MainLayout } from "../../layouts";
import { getFullUrl } from "../../utils/server.utils";

const BLogs = ({ locale, locales, url }) => {
  const { trans, changeLocale } = useTrans(locale, locales);

  return (
    <MainLayout
      title="Create Next App"
      url={url}
    ></MainLayout>
  );
};

export default BLogs;

export async function getServerSideProps(context) {
  return {
    props: {
      locales: context.locales,
      locale: context.locale,
      url: getFullUrl(context),
    },
  };
}
