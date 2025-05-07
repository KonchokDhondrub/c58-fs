import { useEffect } from "react";
import Feedback from "../../components/feedback/Feedback";

function Homework04({ setPageTitle }) {
  useEffect(() => {
    setPageTitle("Feedback – Homework 04");
  }, [setPageTitle]);

  return <Feedback />;
}

export default Homework04;
