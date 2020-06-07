module.exports = function (req, res) {
  //verify the phone number
  if (!req.bidy.phone) {
    return res.status(422).send({ err: "Bad Input" });
  }

  // format the phone number
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  // create a user account using that phone number

  // respond to the phone number
};
