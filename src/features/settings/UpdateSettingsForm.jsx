import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useSettings from "./useSettings";
import useUpdateSetting from "./useUpdateSetting";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxGuestsPerBooking,
      maxBookingLength,
      breakfastPrice,
    } = {},
    error,
  } = useSettings();
  // const {
  //   minBookingLength,
  //   maxGuestsPerBooking,
  //   maxBookingLength,
  //   breakfastPrice,
  // } = settings;
  const { isUpdating, updateSetting } = useUpdateSetting();

  const handleUpdateSetting = (e, field) => {
    const value = e.target.value;
    if (!value) return;
    // if (field === "minBookingLength") {
    // updateSetting({
    //   minBookingLength: value,
    //   maxGuestsPerBooking,
    //   maxBookingLength,
    //   breakfastPrice,
    // });
    // console.log({ field: value }); {field: '14'}
    // {minBookingLength: '14'}
    console.log({ [field]: value });
    updateSetting({ [field]: value });
    // }
  };

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isUpdating}
          onBlur={(e) => handleUpdateSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
