import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Asia/Kolkata",
});

const LocalTime = () => {
  const [time, setTime] = useState(formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-xs text-muted">
      Vellore, IN — {time} IST
    </span>
  );
};

export default LocalTime;
