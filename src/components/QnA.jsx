import React from "react";

const qnaData = [
  {
    q: "Authentication vs Authorization",
    a: [
      "There many hooks are introduced in the 2 or 3 earlier versions of REACT.",
    ],
  },
  {
    q: 'Why "Firebase"? Why not Others?',
    a: ["Semantic Tags indicates what they actually are"],
  },
  {
    q: '"Firebase" services other than Auth',
    a: [
      "Block elements starts on a new line, But inline-block elements doesn't starts on a new line",
    ],
  },
];

const QnA = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center text-success">FAQ for this Assignment :)</h2>
      <div className="qna-container row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 mt-3">
        {qnaData.map((item, index) => (
          <div key={index} className="col">
            <article
              style={styles.article}
              className="qna border border-success rounded shadow"
            >
              <div
                style={styles.qContainer}
                className="q-container d-flex align-items-center justify-content-between bg-light p-3"
              >
                <h3 className="fs-4 text-danger text-center w-100">{item.q}</h3>
                <i className="fa-solid fa-chevron-down fs-4 text-primary"></i>
              </div>
              <div className="a-container p-3">
                <ul style={styles.answer}>
                  {item.a.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  qContainer: {
    borderBottomWidth: "2px",
    borderBottomStyle: "solid",
    borderColor: "gray",
  },

  answer: {
    textAlign: "justify",
    textJustify: "inter-word",
  },
  article: { height: "100%" },
};

export default QnA;
