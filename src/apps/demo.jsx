import { useFormik } from "formik";
import { object, string } from "yup";
import Input from "../components/input";

const demoValidationSchema = object({
  companyName: string().required("Please provide your company name."),
  contactNumber: string()
    .required("Please provide your contact number.")
    .length(10, "Contact number should be 10 digits"),
  companyEmail: string()
    .email("Invalid email format")
    .required("Company email is required"),
  product: string().required("Please choose a product"),
  message: string()
    .required("Please provide a valid message.")
    .min(20, "Message should be at least 20 characters long")
    .max(255, "Message should not exceed 255 characters")
    .trim(),
});

export default function Demo() {
  const { handleChange, values, errors, handleSubmit } = useFormik({
    initialValues: {
      companyName: "",
      contactNumber: "",
      companyEmail: "",
      product: "",
      message: "",
    },
    validationSchema: demoValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="bg-[#c7d5ea] p-6 rounded-3xl">
      <h1>Contact Us</h1>
      <p className="mb-6">
        If you have any inquiry, please feel free to contact us!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="gap-6 grid grid-cols-2">
          <Input
            label="Company Name"
            name="companyName"
            handleChange={handleChange}
            value={values.companyName}
            placeholder="Company Name"
            error={errors.companyName}
          />
          <Input
            label="Contact Number"
            name="contactNumber"
            handleChange={handleChange}
            value={values.contactNumber}
            placeholder="Contact Number"
            error={errors.contactNumber}
          />
          <Input
            label="Company Email"
            name="companyEmail"
            handleChange={handleChange}
            value={values.companyEmail}
            placeholder="Company Email"
            error={errors.companyEmail}
          />
          <Input
            label="Product"
            name="product"
            handleChange={handleChange}
            value={values.product}
            placeholder="Company Email"
            error={errors.product}
          />

          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block mb-3 font-medium text-destructive text-sm leading-none"
            >
              Message
            </label>
            <textarea
              value={values.message}
              rows={5}
              onChange={handleChange}
              type="text"
              name="message"
              id="message"
              placeholder="Type here"
              className="block bg-white px-3 py-2 rounded-md w-full text-sm"
            ></textarea>
            <p className="mt-2 text-red-500 text-xs">{errors.message}</p>
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-400 mt-4 px-3 py-2 rounded-md text-white text-sm"
        >
          Request a Demo
        </button>
      </form>
    </div>
  );
}
