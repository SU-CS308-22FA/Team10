import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";

export default function PricingTable({ price, title, text, offers, action }) {
  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        <p className="font30 extraBold">{price}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div style={{ maxWidth: "120px", margin: "30px auto 0 auto" }}>
        <FullButton title="Buy" action={action} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
