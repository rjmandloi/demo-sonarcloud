import React, { useEffect, useState } from "react";

export const UserForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputMobile, setInputMobile] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputCollege, setInputCollege] = useState("");
  const [validateInputs, setValidateInputs] = useState({
    isValidName: false,
    isValidMobile: false,
    isValidAddress: false,
    isValidCollege: false,
  });

  const { onAddUser, user, isEdit } = props;

  useEffect(() => {
    if (user && isEdit) {
      const { name, mobileNumber, address, college } = user;
      setInputName(name);
      setInputMobile(mobileNumber);
      setInputAddress(address);
      setInputCollege(college);
    }
  }, [isEdit]);

  const nameInputHandler = (event) => {
    setInputName(event.target.value);
  };
  const mobileInputHandler = (event) => {
    setInputMobile(event.target.value);
  };
  const addressInputHandler = (event) => {
    setInputAddress(event.target.value);
  };

  const collegeInputHandler = (event) => {
    setInputCollege(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setValidateInputs({
      isValidName: inputName.length > 3,
      isValidMobile: inputMobile.length === 10,
      isValidAddress: inputAddress.length > 3,
      isValidCollege: inputCollege.length > 3,
    });

    const { isValidName, isValidMobile, isValidAddress, isValidCollege } =
      validateInputs;
    if (isValidName && isValidMobile && isValidCollege && isValidAddress) {
      const userInputDetails = {
        name: inputName,
        mobileNumber: inputMobile,
        address: inputAddress,
        college: inputCollege,
      };

      onAddUser(userInputDetails, isEdit);
      setValidateInputs({
        isValidName: false,
        isValidMobile: false,
        isValidAddress: false,
        isValidCollege: false,
      });
      setInputName("");
      setInputMobile("");
      setInputAddress("");
      setInputCollege("");
    }
  };

  return (
    <div>
      <form className="w-50 container ">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              placeholder="full name"
              onChange={nameInputHandler}
              value={inputName}
              required
            />
            {!validateInputs.isValidName && (
              <small style={{ color: "red" }}>please enter a valid name</small>
            )}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="address">Mobile no.</label>
            <input
              type="number"
              className="form-control"
              id="mobile"
              placeholder="1234567899"
              onChange={mobileInputHandler}
              value={inputMobile}
              required
            />
            {!validateInputs.isValidMobile && (
              <small style={{ color: "red" }}>
                please enter a valid Mobile number
              </small>
            )}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="street , apartment"
            onChange={addressInputHandler}
            value={inputAddress}
            required
          />
          {!validateInputs.isValidAddress && (
            <small style={{ color: "red" }}>please enter a valid address</small>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <input
            type="text"
            className="form-control"
            id="college"
            placeholder="abc"
            onChange={collegeInputHandler}
            value={inputCollege}
            required
          />
          {!validateInputs.isValidCollege && (
            <small style={{ color: "red" }}>please enter a valid college</small>
          )}
        </div>

        <button
          type="submit"
          onClick={submitHandler}
          className="btn btn-primary"
        >
          Add
        </button>
      </form>
    </div>
  );
};
