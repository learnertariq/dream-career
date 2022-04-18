import React from "react";

const qnaData = [
  {
    q: "Authentication vs Authorization",
    a: [
      "The process of verifying who the person is called Authentication and the process of verifying if the user has the right permission to access the data is called Authentication.",
      "Passwords, Pin, Biometric information, etc is used to Authenticate a user. But Authorization role is set by the organization.",
      "Authentication is the first step to access any protected data. And Authorization always happens after successful Authorization.",
      "User can change the information of Authentication, but authorization is only changed by the admin",
    ],
  },
  {
    q: 'Why "Firebase"? Why not Others?',
    a: [
      "Firebase services is almost all in one place services",
      "Firebase (BAAS) Backend as a service, a Google based product helps us to deploy any kinda backend on the firebase hosting.",
      "Firebase has it's won database. We can store users data like user details, chat message and metadata",
      "Firebase has it's cloud storage. We can store profile pictures and multimedia files on it's cloud storage",
      "Firebase has also cloud messaging service",
      "We use firebase because of it's vast majority of services.",
    ],
  },
  {
    q: '"Firebase" services other than Authentication',
    a: [
      "Firebase has many services other than Authentication",
      "Firebase provides real time database platform",
      "Firebase provides real time database management API",
      "Firebase provides Cloud storage to store many kinda data and multimedia files",
      "Firebase provides Hosting our site live to the internet",
      "With all the services above firebase also provides the services called Function and ML KIT",
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
