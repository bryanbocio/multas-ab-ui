import React from "react";
import { Multas } from "../../utils/type";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 0.5,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
});
interface Props {
  multa: Multas[];
  data: any[];
  total: string;
}
const InvoicePdf: React.FC<Props> = ({ multa, data, total }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {multa.map((e: Multas) => (
          <View style={styles.section} key={e.id}>
            <Text>{e.reason.split(" ").slice(1).join(" ")}</Text>
            <Text>
              RD$
              {data &&
                data
                  .filter((reason: any) => reason.reason == e.reason)
                  .map((obj: any) => obj.price)}
            </Text>
          </View>
        ))}
        <Text>Total RD${total}</Text>
      </Page>
    </Document>
  );
};

export default InvoicePdf;
