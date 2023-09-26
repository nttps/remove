import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActionStatus } from "../features/removeBackground";
import loadImage from "blueimp-load-image";

export default function RemoveBackground() {
  const status = useSelector((state) => state.status.bgRemoved);
  const dispatch = useDispatch();

  let blob = null;

  const [image, setImage] = useState(null);

  const imgUpload = (e) => {
    const img = e.target.files[0];
    var input = document.getElementById("upload");
    var infoArea = document.getElementById("upload-label");
    var fileName = input.files[0].name;
    infoArea.textContent = "File name: " + fileName;

    setImage(img);
  };

  const uploadImage = async () => {
    dispatch(setActionStatus(false));

      const formData = new FormData();
      formData.append("file", image);

      const response = await fetch("http://localhost:5000/upload-file", {
          method: "POST",
          body: formData,
      });

      if (response.status === 200) {
        dispatch(setActionStatus(true));
      } else {
        dispatch(setActionStatus(false));
      }

      const outputBlob = await response.blob();

      blob = URL.createObjectURL(outputBlob);
      const imageResult = document.getElementById("imageResult");
      const down = document.getElementById("down");
      imageResult.src = blob;
      down.href = blob;
      down.download = "signature.png";
  };

  return (
    <div className="row py-4">
      <div className="col-lg-6 mx-auto text-center">
        <div className="input-group mb-3 px-2 py-2 rounded-pill bg-white shadow-sm">
          <input
            id="upload"
            type="file"
            onChange={imgUpload}
            className="form-control border-0"
          />
          <label
            id="upload-label"
            for="upload"
            className="font-weight-light text-muted"
          >
            เลือกไฟล์รูป (นามสกุลไฟล์ JPEG,JPG และ PNG)
          </label>

          <div className="input-group-append">
            <label for="upload" className="btn btn-light m-0 rounded-pill px-4">
              {" "}
              <i className="fa fa-cloud-upload mr-2 text-muted"></i>
              <small className="text-uppercase font-weight-bold text-muted">
                Choose file
              </small>
            </label>
          </div>
        </div>
        <button
          className="btn btn-outline-light remove-button"
          onClick={uploadImage}
        >
          ตกลง
        </button>
        <div>
          <div className="row py-4">
            <div className="col-lg-7 mx-auto text-center">
              <p className="font-italic text-white text-center">
                 ผลลัพธ์จะแสดงในช่องด้านล่าง
                 {/* ขนาดไฟล์ xxx KB */}
              </p>
              <div className="image-area mt-4 justify-content-center">
                {status === false ? (
                  <div class="lds-roller mb-3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <img
                    id="imageResult"
                    src="#"
                    alt=""
                    className="img-fluid rounded shadow-sm mx-auto d-block"
                  />
                )}{" "}
              </div>
              {status ? (
                <a id="down">
                  <button className="btn btn-light down-button">
                    {" "}
                    <i className="fas fa-download" /> ดาวน์โหลด
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
