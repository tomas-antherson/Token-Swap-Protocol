import { useEffect, useState } from "react";
import FormSection from "./FormSection";
import HeaderSection from "./HeaderSection";
import ImageSection from "./Imagesection";
import { getService } from "../../utils/services";
import { useParams } from "react-router-dom";

const RequestDetail = () => {
  const [data, setData] = useState();

  const { id } = useParams();
  useEffect(() => {
    getService(`/categories/${id}`).then((res) => {
      if (res) {
        setData(res.data);
      }
    });
  }, []);

  return (
    <>
      <div className="h-full w-full pb-[160px]">
        <HeaderSection data={data} />

        <div className="md:px-[100px] px-22px">
          <ImageSection data={data} />
          <FormSection data={data} />
        </div>
      </div>
    </>
  );
};

export default RequestDetail;
