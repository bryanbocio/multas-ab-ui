import React, { useContext } from "react";
import { Multas } from "../../utils/type";
import InvoicePdf from "../invoicePdf/InvoicePdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { AuthContext } from "../../context/authContext";
import { AuthContextType } from "../../context/AuthContextType";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../Request";
interface Props {
  multa: Multas[];
  setOpenInvoice: React.Dispatch<React.SetStateAction<boolean>>;
}

const Invoice: React.FC<Props> = ({ multa, setOpenInvoice }) => {
  const { token } = useContext(AuthContext) as AuthContextType;

  const { data, isLoading } = useQuery({
    queryKey: ["priceDetails"],
    queryFn: () => {
      return newRequest(token)
        .get("TrafficFine/reasons")
        .then((results) => results.data)
        .catch((err) => console.log(err));
    },
  });

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 dark:bg-white/20 ">
      <div className="flex flex-col items-center gap-3 px-5 pt-2 pb-3 overflow-scroll bg-white dark:bg-[#444] rounded-md scroll-fire">
        <h2 className="text-xl font-semibold dark:text-white">Factura</h2>

        <div className="flex items-center self-start"> <span className="font-semibold dark:text-[lightgray]">Multas Pagadas</span>  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 dark:text-[lightgray]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
</svg>
</span>  </div>
        <div className="pt-5 overflow-scroll pb-7">
          {multa &&
            multa.map((e: Multas) => (
              <div key={e.id} className="flex gap-2 dark:text-[lightgray]">
                <span className="font-medium">{e.reason}</span>
                <span>
                  RD$
                  {!isLoading &&
                    data
                      .filter((reason: any) => reason.reason == e.reason)
                      .map((obj: any) => obj.price)
                      .toLocaleString("en-US")}
                </span>
              </div>
            ))}
        </div>

        <div className="self-end text-lg font-semibold dark:text-[lightgray]">Total  <span>RD$2,000</span> </div>
        <div className="flex justify-between w-full gap-7">
          <button
            className="flex-1 w-full p-2 text-white rounded-md bg-emerald-500"
            onClick={() => setOpenInvoice(false)}
          >
            Ok
          </button>
          <PDFDownloadLink
            document={<InvoicePdf multa={multa} data={data} />}
            fileName="somename.pdf"
            className="flex-1 w-full p-2 text-center text-white bg-blue-500 rounded-md"
          >
            {({ loading }) =>
              loading ? "Loading document..." : "Download pdf"
            }
          </PDFDownloadLink>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
