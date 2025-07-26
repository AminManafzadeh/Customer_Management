import connectDB from "../../../utils/connectDB";
import Customer from "../../../models/Customer";

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "failed", message: "Error in connecting to database" });
  }

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({ _id: id });
      res.status(200).json({ status: "success", message: "Data deleted" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({
          status: "failed",
          message: "Error in Deleting data from database",
        });
    }
  }
}
