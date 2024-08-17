import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import AddCabin from "../features/cabins/AddCabin";
import Button from "../ui/Button";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    console.log("cabins effect");
    getCabins().then((data) => console.log(data));
  }, []);
  // access the client
  // const queryClient = useQueryClient();

  // queries
  const handleSetShowForm = () => {
    setShowForm((showForm) => {
      return !showForm;
    });
  };

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>
      <Row>
        <CabinTable />
        {/* <AddCabin /> */}
        <Button onClick={handleSetShowForm}>Add new cabin</Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
