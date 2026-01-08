import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar cartCount={0} />
     <div className="container mt-20 mb-30">
      <h2 className="text-center mb-30">Contact Us</h2>

      <div className="grid">
        <div>
          <h3>Get in Touch</h3>
          <p>📍 Prayagraj, Uttar Pradesh</p>
          <p>📞 9506640798</p>
          <p>✉️ adilkhanofficial74@gmail.com</p>
          <p>
            🔗 <a href="https://github.com/a9856" target="_blank">
              https://github.com/a9856
            </a>
          </p>
        </div>

        <div>
          <iframe
            title="Prayagraj Map"
            src="https://www.google.com/maps?q=Prayagraj&output=embed"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
