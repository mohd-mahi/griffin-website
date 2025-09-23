import React, { useEffect, useRef } from "react";

function TextSplit({ children, revealType }) {
  const elementRef = useRef(null);

  const mergeRefs = (...refs) => {
    return (node) => {
      for (const ref of refs) {
        ref.current = node;
      }
    };
  };

  useEffect(() => {
    const textElement = elementRef.current;
    const letters =
      revealType == "word"
        ? textElement.querySelectorAll(".words .word")
        : textElement.querySelectorAll(".char");

    const letterCount = letters.length;

    const totalDuration = revealType == "word" ? 1200 : 1600;
    const adjustedDelay = totalDuration / letterCount;

    letters.forEach((letter, i) => {
      const delay = adjustedDelay * (i / 2);
      letter.style.setProperty("--delay", `${delay}ms`);
    });

    textElement.querySelectorAll(".words .word").forEach((word, i) => {
      const delay = adjustedDelay * (i / 5);
      word.style.setProperty("--delay", `${delay}ms`);
    });
  }, [revealType]);

  const normalizeChildren = (children) => {
    return React.Children.toArray(children).map((child) => {
      if (typeof child == "string") {
        return child;
      } else if (React.isValidElement(child)) {
        if (child.type === "br") {
          return "<br/>";
        } else {
          return {
            tag: child.type,
            content: normalizeChildren(child.props.children),
            props: child.props,
          };
        }
      }
      return child;
    });
  };

  const finalRender = normalizeChildren(children.props.children).map(
    (item, index) =>
      item.tag ? (
        <item.tag key={index} {...item.props}>
          {item.content
            .join("")
            .split(/\s+/)
            .filter((word) => word.trim() !== "")
            .map((tagWord, tagWordIndex) => (
              <React.Fragment key={tagWordIndex}>
                <span className="words line">
                  <span className="word" style={{ display: "inline-block" }}>
                    {tagWord.split("").map((tagChar, tagCharIndex) => (
                      <span key={tagCharIndex} className="char">
                        {tagChar}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="whitespace"> </span>
              </React.Fragment>
            ))}
        </item.tag>
      ) : item === "<br/>" ? (
        <br key={index} />
      ) : (
        item
          .split(/\s+/)
          .filter((word) => word.trim() !== "")
          .map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
              <span className="words line">
                <span className="word" style={{ display: "inline-block" }}>
                  {word.split("").map((char, charIndex) => (
                    <span key={charIndex} className="char">
                      {char}
                    </span>
                  ))}
                </span>
              </span>
              <span className="whitespace"> </span>
            </React.Fragment>
          ))
      )
  );

  return React.cloneElement(children, {
    ref: children.props.ref
      ? mergeRefs(children.props.ref, elementRef)
      : elementRef,
    children: finalRender,
  });
}

export default TextSplit;
