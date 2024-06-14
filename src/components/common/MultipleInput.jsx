import { Card, Button, TextInput, Label } from "flowbite-react";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircle } from "react-icons/io";
import { RxValue } from "react-icons/rx";
import { BsFiletypeKey } from "react-icons/bs";

export function MultipleInput({ entries, setEntries, name }) {
  const handleKeyChange = (index, key) => {
    const newEntries = [...entries];
    newEntries[index].key = key;
    setEntries(newEntries);
  };

  const handleValueChange = (index, value) => {
    const newEntries = [...entries];
    newEntries[index].value = value;
    setEntries(newEntries);
  };

  const handleAddEntry = () => {
    setEntries([...entries, { key: "", value: "" }]);
  };

  const handleRemoveEntry = (index) => {
    const newEntries = [...entries];
    newEntries.splice(index, 1);
    setEntries(newEntries);
  };
  return (
    <>
      {/* <Card className="w-"> */}
      <div class="my-5 flex-grow border-t border-gray-400"></div>
      <div className="mb-2 block">
        <Label value={name} />
      </div>
      {entries.map((entry, index) => (
        <div className="flex justify-center align-middle">
          {/* Row 1: TextInput (3 columns) and Button (1 column) */}
          <div className="mt-4 flex w-full justify-between align-middle">
            {/* Flexbox to make TextInput and Button inline */}
            <TextInput
              type="text"
              icon={BsFiletypeKey}
              value={entry.key}
              className="mr-3 flex-1"
              onChange={(event) => {
                let newEntities = [...entries];
                newEntities[index].key = event.target.value;
                setEntries(newEntities);
              }}
              placeholder="key"
            />
            <TextInput
              type="text"
              icon={RxValue}
              value={entry.value}
              className="mx-3 flex-1"
              onChange={(event) => {
                let newEntities = [...entries];
                newEntities[index].value = event.target.value;
                setEntries(newEntities);
              }}
              placeholder="value"
            />
            <div className="mx-3 w-10 p-1">
              <Button
                className="w-full"
                pill
                onClick={() => handleRemoveEntry(index)}
              >
                -
              </Button>
            </div>
          </div>
        </div>
      ))}
      {/* </Card> */}
      <div>
        <Button color="blue" pill onClick={handleAddEntry}>
          +
        </Button>
      </div>
      <div class="my-5 flex-grow border-t border-gray-400"></div>
    </>
  );
}
