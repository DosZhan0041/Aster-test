import { getCLS, getFID, getFCP, getLCP, getTTFB, type ReportHandler } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && typeof onPerfEntry === "function") {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals