import { useContext, useRef } from "react";
import styled from "styled-components";
import { CardCssContext } from "../hooks/CardCSS";
import CSSPropVal from "./CSSPropVal";
import CodeHeader from "./CodeHeader";

const Code = () => {
  const { cardCss } = useContext(CardCssContext);
  const codeRef = useRef(null);

  const ifBorderRadius = () => {
    const br = cardCss.borderRadius;
    return (
      br.topLeft.x.value ||
      br.topLeft.y.value ||
      br.topRight.x.value ||
      br.topRight.y.value ||
      br.bottomRight.x.value ||
      br.bottomRight.y.value ||
      br.bottomLeft.x.value ||
      br.bottomLeft.y.value
    );
  };

  const borderRadiusCSSValue = `${cardCss.borderRadius.topLeft.y.value}${
    cardCss.borderRadius.topLeft.y.unit
  } ${cardCss.borderRadius.topRight.y.value}${
    cardCss.borderRadius.topRight.y.unit
  } ${-cardCss.borderRadius.bottomRight.y.value}${
    cardCss.borderRadius.bottomRight.y.unit
  } ${-cardCss.borderRadius.bottomLeft.y.value}${
    cardCss.borderRadius.bottomLeft.y.unit
  } / ${cardCss.borderRadius.topLeft.x.value}${
    cardCss.borderRadius.topLeft.x.unit
  } ${-cardCss.borderRadius.topRight.x.value}${
    cardCss.borderRadius.topRight.x.unit
  } ${-cardCss.borderRadius.bottomRight.x.value}${
    cardCss.borderRadius.bottomRight.x.unit
  } ${cardCss.borderRadius.bottomLeft.x.value}${
    cardCss.borderRadius.bottomLeft.x.unit
  }`;

  const genBoxShadow = () => {
    const active = cardCss.boxShadow[cardCss.activeBoxShadow];
    return `${active.inset ? "inset" : ""} ${active.x}px ${active.y}px ${
      active.blur
    }px ${active.spread}px ${active.color}`;
  };

  return (
    <Div>
      <CodeHeader codeRef={codeRef} />
      <Pre>
        <code ref={codeRef}>
          .card {"{"}
          <Comment>{"/* Basic Styles */"}</Comment>
          <CSSPropVal
            prop="width"
            val={`${Math.round(cardCss.width)}${cardCss.widthUnit}`}
          />
          <CSSPropVal
            prop="height"
            val={`${Math.round(cardCss.height)}${cardCss.heightUnit}`}
          />
          <CSSPropVal prop="background-color" val={cardCss.bgColor} />
          {ifBorderRadius() || cardCss.allBorderRadius ? (
            <>
              <br />
              <Comment>{"/* Border Radius */"}</Comment>

              <CSSPropVal
                prop="border-radius"
                val={
                  cardCss.allBorderRadius
                    ? `${cardCss.allBorderRadius}${cardCss.allBorderRadiusUnit}`
                    : borderRadiusCSSValue
                }
              />
            </>
          ) : undefined}
          <br />
          <Comment>{"/* Box Shadow */"}</Comment>
          <CSSPropVal prop="box-shadow" val={genBoxShadow()} />
        </code>
      </Pre>
    </Div>
  );
};

const Div = styled.div`
  background-color: rgb(var(--bg-main));
  border-radius: 0.5rem;
  border: 1px solid rgb(var(--gray));
`;

const Comment = styled.div`
  color: rgb(var(--gray));
  padding-inline-start: 1.5rem;
`;

const Pre = styled.pre`
  padding: 1.5rem;
`;

export default Code;
