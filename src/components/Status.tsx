import { CustomSelect, Flex, Button } from "../utils/styles";

export const Status = (
  id: string,
  currentValueStatus: boolean,
  setValue: React.Dispatch<React.SetStateAction<boolean>>,
  saveFunction: (id: string, status: boolean) => void
) => {

  const save = () => {
    saveFunction(id, currentValueStatus);
  };

  return (
    <>
      <section>
        <div>
          <label>Current status:</label>
        </div>
        <CustomSelect>
          <select
            id="currentAntiSpoilerStatus"
            value={currentValueStatus ? "Enabled" : "Disabled"}
            onChange={(e) => {
              if (e.target.value === "Enabled") {
                setValue(true);
              } else {
                setValue(false);
              }
            }}
          >
            <option disabled selected>
              Choose a status
            </option>
            <option value="Enabled">Enabled</option>
            <option value="Disabled">Disabled</option>
          </select>
        </CustomSelect>
      </section>
      <Flex justifyContent={"flex-end"}>
        <Button variant={"secondary"} style={{ marginRight: "0.625em" }}>
          Reset
        </Button>
        <Button variant={"primary"} onClick={save}>
          Save
        </Button>
      </Flex>
    </>
  );
};
