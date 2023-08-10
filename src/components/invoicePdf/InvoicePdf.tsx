import React from "react";
import { Multas } from "../../utils/type";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    gap: 1,
    backgroundColor: "#ffffff",
  },
  section: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    padding: 20,
  },
});
interface Props {
  multa: Multas[];
  data: any[];
}
const InvoicePdf: React.FC<Props> = ({ multa, data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {multa.map((e: Multas) => (
          <View style={styles.section} key={e.id}>
            <Text>{e.reason}</Text>
            <Text>
              RD$
              {data &&
                data
                  .filter((reason: any) => reason.reason == e.reason)
                  .map((obj: any) => obj.price)}
            </Text>
          </View>
        ))}
      </Page>
    </Document>
  );
};

export default InvoicePdf;
