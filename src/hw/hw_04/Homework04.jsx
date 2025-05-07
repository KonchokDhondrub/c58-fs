import { useEffect } from "react";
import Feedback from "../../components/feedback/Feedback";

function Homework04() {
  useEffect(() => {
    document.title = "Feedback – Homework 04";
  }, []);

  return <Feedback />;
}

export default Homework04;
