import React, { Component } from "react";
import logogistda from '../image/logogistda.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="text-white text-center">
          <img
            alt="GISTDA LOGO"
            src={logogistda}
            // src="https://visit.gistda.or.th/img/logo_gistda.png"
            width="350"
            className="mb-4"
          />

          <h1 className="display-4">ระบบลบภาพพื้นหลัง</h1>
          <p className="lead mb-0">สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน)</p>
          {/* <font color="FF0000">*** เว็บไซต์นี้ไม่มีการจัดเก็บข้อมูลต้นฉบับทุกชนิด ***</font> */}
        </header>
      </div>
    );
  }
}
