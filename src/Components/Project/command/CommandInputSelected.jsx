import React, { useEffect } from "react";
import { InputSelecte } from "../../Basic/formControlls/FormControlls";

function CommandInputSelected({ onHandleSelectedACommand }) {
  const commands = [
    { name: "تنظیم زمان با سرور", value: "1" },
    { name: "تنظیم زمان با زمان دلخواه", value: "2" },
    { name: "تخلیه ترددها", value: "3" },
    { name: "بازیافت ترددها", value: "4" },
    { name: "بازیافت ترددها", value: "4" },
    { name: "بروز رسانی پرسنل", value: "17" },
  ];
  useEffect(() => {
    if (onHandleSelectedACommand) onHandleSelectedACommand("1");
  }, []);
  return (
    <>
      <InputSelecte
        options={commands}
        onHandleChangeValue={onHandleSelectedACommand}
      />
    </>
  );
}

export default CommandInputSelected;
