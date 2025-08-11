import "../../styles/help.css";

const Help = () => {
  let user_faq = {
    "How can I convert physical cash to UPI?":
      "You can visit a supported agent/location, give your physical cash, and provide your UPI ID. The amount will be transferred digitally to your UPI account.",

    "Do you support all UPI apps (PhonePe, GPay, Paytm)?":
      "Yes, we support all UPI apps that are registered with a valid UPI ID, including PhonePe, Google Pay, Paytm, BHIM, and others.",

    "Is the amount transferred instantly?":
      "Yes, in most cases the UPI amount is transferred instantly. However, in rare cases, there may be a slight delay due to bank or network issues.",

    "Can I exchange any amount or is there a limit?":
      "Yes, there are daily limits depending on the mode of exchange and KYC status. For non-KYC users, smaller limits apply. Limits can vary based on compliance rules.",

    "Is there a fee for converting UPI to cash or vice versa?":
      "A small service charge may apply per transaction. The exact fee will be shown before confirmation.",

    "I paid via UPI but didn’t receive my cash.":
      "Please contact our support team immediately with your transaction ID. We'll verify and resolve it as soon as possible.",

    "I gave cash, but didn’t receive the UPI payment.":
      "Sometimes UPI transfers may be delayed. Please wait for a few minutes. If still not received, contact our support with the receipt.",

    "My UPI payment failed. What should I do?":
      "If your payment failed but money was debited, it will usually be refunded automatically by your bank within 1–3 working days.",

    "I entered the wrong UPI ID. Can I fix it?":
      "Once the transaction is processed, it cannot be reversed. Always double-check your UPI ID before confirming.",

    "Why is your app not detecting my UPI ID?":
      "Please ensure your UPI app is active and that you entered the correct UPI ID format (e.g., mobile@upi). Try again or use a different ID.",

    "UPI payment is showing pending — should I try again?":
      "No. If a UPI transaction is pending, wait for confirmation. Retrying could result in duplicate charges.",

    "Can I use a different UPI ID from my registered number?":
      "Yes, you can use a different UPI ID as long as it is valid. However, we recommend linking it to your profile for easier verification.",

    "Do I need to verify KYC to do a cash exchange?":
      "KYC is required for higher value transactions. For small transactions, basic details may be sufficient as per RBI guidelines.",

    "Is PAN or Aadhaar required for transactions?":
      "For transactions above the regulatory threshold (usually ₹50,000), PAN or Aadhaar may be required. It ensures safety and compliance.",

    "What happens if I enter someone else's UPI ID?":
      "If the transaction goes through, the money will be sent to that ID. We cannot reverse it. Please be careful and double-check before confirming.",

    "Do I need to create an account to use your service?":
      "For small exchanges, you may not need an account. But for tracking history, faster service, and higher limits, an account is recommended.",

    "Can I see my past exchanges or receipts?":
      "Yes, if you have an account, your transaction history and digital receipts will be available in the app.",

    "Can I edit my UPI ID later?":
      "Yes, you can update or change your UPI ID anytime from your account settings or before making a new transaction.",

    "How long does the exchange process take?":
      "Most transactions are completed within 1–2 minutes. Delays can occur due to bank or server issues.",

    "Can I use this service 24x7?":
      "UPI-based transactions are supported 24x7. However, physical cash exchange may depend on agent availability and working hours.",

    "What is the maximum or minimum amount I can exchange?":
      "The minimum is usually ₹10. The maximum depends on your KYC status and regulatory limits. You will see limits before confirming.",

    "Will I get a receipt or SMS confirmation?":
      "Yes, a digital receipt and/or SMS confirmation is sent after every successful transaction. You can also download receipts from your account.",

    "How do I prove a transaction if there's a dispute?":
      "Please share your transaction ID or screenshot with our support team. We will verify it from our logs and resolve your issue.",

    "Where can I see my transaction history?":
      "If you are a registered user, your transaction history is available in the app under the 'History' or 'Transactions' section.",

    "Who do I contact if I don’t receive the money?":
      "You can contact our support via in-app chat, helpline number, or WhatsApp. We are here to help you 24x7.",

    "Is there a support number or WhatsApp I can message?":
      "Yes, our support team is available via helpline and WhatsApp. The contact details are available in the 'Help' section of the app.",
  };

  return (
    <div className="container">
      <div className="text-center mt-5 userq">
        <h1>Got questions? Find answers here</h1>

        <div className="center-box">
          <input
            list="automatic"
            type="text"
            id=""
            className="form-control w-25"
          />
          <datalist id="automatic">
            {Object.keys(user_faq).map((que) => (
              <option key={que} value={que} />
            ))}
          </datalist>
        </div>
      </div>
      <div className="card_container back_color" >
        <div className="card shadow" >
          <div className="card-body body_color" >
            <strong>What is this service and how can it help me?</strong>

            <p>
              This service is designed for anyone who needs to quickly convert
              between liquid cash and UPI balance in Indian Rupees. Instead of
              visiting a bank or ATM, you can simply choose whether you want to
              exchange cash for UPI or UPI for cash, complete a few simple
              steps, and have your money transferred instantly. It’s especially
              useful for people who prefer handling cash but occasionally need
              to make UPI payments, or for those who receive payments digitally
              but need immediate cash in hand.
            </p>
          </div>
        </div>
        <div className="card shadow">
          <div className="card-body">
            <strong> How do I convert cash to UPI?</strong>

            <p>
              If you have cash and want it transferred to your UPI account, all
              you need to do is select the “Cash to UPI” option, enter the
              amount, and provide your UPI ID. After you hand over the cash to
              our exchange point or agent, the amount will be sent instantly to
              your UPI-linked bank account. You’ll get confirmation in your UPI
              app within seconds, so you know the transaction is complete.
            </p>
          </div>
        </div>
        <div className="card shadow">
          <div className="card-body">
            <strong>How do I convert UPI to cash?</strong>

            <p>
              To exchange UPI balance for cash, you start by selecting the “UPI
              to Cash” option in our application. You enter the amount you want
              to withdraw, scan the provided QR code using your preferred UPI
              app (such as PhonePe, Google Pay, Paytm, or BHIM), and confirm the
              payment. Once the payment is successful, you can immediately
              collect the cash from the exchange agent. The process is quick,
              easy, and doesn’t require you to visit an ATM.
            </p>
          </div>
        </div>
        <div className="card  shadow">
          <div className="card-body">
            <strong>How long do transactions take?</strong>

            <p>
              Most transactions are processed instantly, and you will see the
              money transferred or receive your cash within a few seconds. In
              rare cases, depending on network issues or UPI processing delays,
              it may take up to 2 minutes. If you ever face a delay, our support
              team is ready to assist you and ensure your money is safe.
            </p>
          </div>
        </div>
        <div className="card  shadow">
          <div className="card-body">
            <strong>Are there any limits or charges?</strong>

            <p>
              Yes, we have a few limits and a small service fee to keep the
              service running securely and efficiently. The minimum amount you
              can exchange is ₹100, and the maximum per transaction is ₹50,000.
              A small service fee is applied to each exchange, and this fee is
              clearly displayed before you confirm your transaction. There are
              no hidden charges — transparency is one of our priorities.
            </p>
          </div>
        </div>
        <div className="card  shadow " >
          <div className="card-body">
            <strong>Is it safe to use this service?</strong>

            <p>
              Absolutely. All transactions are processed over secure, encrypted
              connections, and we never store your UPI PIN or sensitive banking
              information. Always make sure you are on our official application
              or website before entering any details, and never share your UPI
              PIN with anyone. For extra safety, we recommend keeping your
              transaction ID until you have fully confirmed the exchange.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Help;
