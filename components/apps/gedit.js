// import React, { Component } from 'react';
// import $ from 'jquery';
// import ReactGA from 'react-ga4';
// import emailjs from '@emailjs/browser';

// export class Gedit extends Component {

//     constructor() {
//         super();
//         this.state = {
//             sending: false,
//         }
//     }

//     componentDidMount() {
//         emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
//     }

//     sendMessage = async () => {
//         let name = $("#sender-name").val();
//         let subject = $("#sender-subject").val();
//         let message = $("#sender-message").val();

//         name = name.trim();
//         subject = subject.trim();
//         message = message.trim();

//         let error = false;

//         if (name.length === 0) {
//             $("#sender-name").val('');
//             $("#sender-name").attr("placeholder", "Name must not be Empty!");
//             error = true;
//         }

//         if (message.length === 0) {
//             $("#sender-message").val('');
//             $("#sender-message").attr("placeholder", "Message must not be Empty!");
//             error = true;
//         }
//         if (error) return;

//         this.setState({ sending: true });

//         const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
//         const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
//         const templateParams = {
//             'name': name,
//             'subject': subject,
//             'message': message,
//         }

//         emailjs.send(serviceID, templateID, templateParams).then(() => {
//             this.setState({ sending: false });
//             $("#close-gedit").trigger("click");
//         }).catch(() => {
//             this.setState({ sending: false });
//             $("#close-gedit").trigger("click");
//         })

//         ReactGA.event({
//             category: "Send Message",
//             action: `${name}, ${subject}, ${message}`
//         });

//     }

//     render() {
//         return (
//             <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none">
//                 <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm">
//                     <span className="font-bold ml-2">Send a Message to Me</span>
//                     <div className="flex">
//                         <div onClick={this.sendMessage} className="border border-black bg-black bg-opacity-50 px-3 py-0.5 my-1 mx-1 rounded hover:bg-opacity-80">Send</div>
//                     </div>
//                 </div>
//                 <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal windowMainScreen">
//                     <div className="absolute left-0 top-0 h-full px-2 bg-ub-gedit-darker"></div>
//                     <div className="relative">
//                         <input id="sender-name" className=" w-full text-ubt-gedit-orange focus:bg-ub-gedit-light outline-none font-medium text-sm pl-6 py-0.5 bg-transparent" placeholder="Your Email / Name :" spellCheck="false" autoComplete="off" type="text" />
//                         <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold light text-sm text-ubt-gedit-blue">1</span>
//                     </div>
//                     <div className="relative">
//                         <input id="sender-subject" className=" w-full my-1 text-ubt-gedit-blue focus:bg-ub-gedit-light gedit-subject outline-none text-sm font-normal pl-6 py-0.5 bg-transparent" placeholder="subject (may be a feedback for this website!)" spellCheck="false" autoComplete="off" type="text" />
//                         <span className="absolute left-1 top-1/2 transform -translate-y-1/2 font-bold  text-sm text-ubt-gedit-blue">2</span>
//                     </div>
//                     <div className="relative flex-grow">
//                         <textarea id="sender-message" className=" w-full gedit-message font-light text-sm resize-none h-full windowMainScreen outline-none tracking-wider pl-6 py-1 bg-transparent" placeholder="Message" spellCheck="false" autoComplete="none" type="text" />
//                         <span className="absolute left-1 top-1 font-bold  text-sm text-ubt-gedit-blue">3</span>
//                     </div>
//                 </div>
//                 {
//                     (this.state.sending
//                         ?
//                         <div className="flex justify-center items-center animate-pulse h-full w-full bg-gray-400 bg-opacity-30 absolute top-0 left-0">
//                             <img className={" w-8 absolute animate-spin"} src="./themes/Yaru/status/process-working-symbolic.svg" alt="Ubuntu Process Symbol" />
//                         </div>
//                         : null
//                     )
//                 }
//             </div>
//         )
//     }
// }

// export default Gedit;

// export const displayGedit = () => {
//     return <Gedit> </Gedit>;
// }


import emailjs from '@emailjs/browser';
import React, { Component } from 'react';
import ReactGA from 'react-ga4';

export class Gedit extends Component {
  constructor() {
    super();
    this.state = {
      sending: false,
      name: '',
      subject: '',
      message: '',
      error: {},
    };
  }

  componentDidMount() {
    emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
  }

  validateInputs = () => {
    const { name, message } = this.state;
    const error = {};
    if (!name.trim()) error.name = "Name is required!";
    if (!message.trim()) error.message = "Message is required!";
    this.setState({ error });
    return Object.keys(error).length === 0;
  };

  sendMessage = async () => {
    if (!this.validateInputs()) return;

    this.setState({ sending: true });

    const { name, subject, message } = this.state;
    const templateParams = { name, subject, message };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        templateParams
      );

      ReactGA.event({
        category: "Send Message",
        action: `${name}, ${subject}, ${message}`,
      });

      this.setState({ name: '', subject: '', message: '', error: {} });
      document.getElementById("close-gedit")?.click();
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      this.setState({ sending: false });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderInput = (id, label, placeholder, name, type = "text", multiline = false) => {
    const isError = this.state.error[name];
    const baseClass = `w-full rounded-sm text-sm bg-transparent border border-gray-500 focus:outline-none focus:bg-ub-gedit-light text-white px-4 py-2 transition duration-200`;
    const inputClass = `${baseClass} ${isError ? 'border-red-500 placeholder-red-300' : ''}`;

    return (
      <div className="relative mb-4">
        <label htmlFor={id} className="text-ubt-gedit-blue text-xs absolute left-2 -top-3.5 px-1 bg-ub-gedit-dark tracking-wide font-semibold">
          {label}
        </label>
        {multiline ? (
          <textarea
            id={id}
            name={name}
            rows={6}
            className={inputClass}
            placeholder={isError || placeholder}
            value={this.state[name]}
            onChange={this.handleChange}
            spellCheck="false"
          />
        ) : (
          <input
            id={id}
            name={name}
            type={type}
            className={inputClass}
            placeholder={isError || placeholder}
            value={this.state[name]}
            onChange={this.handleChange}
            autoComplete="off"
            spellCheck="false"
          />
        )}
      </div>
    );
  };

  render() {
    const { sending } = this.state;

    return (
      <div className="w-full h-full flex flex-col bg-ub-cool-grey text-white select-none relative shadow-xl rounded overflow-hidden animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between bg-ub-gedit-light bg-opacity-70 border-b border-blue-400 px-4 py-2 text-sm font-semibold tracking-wide">
          <span>📨 Message Terminal</span>
          <button
            onClick={this.sendMessage}
            className="bg-gradient-to-r from-ub-orange via-ub-gedit-light to-ub-blue px-4 py-1 rounded-sm shadow hover:brightness-110 transition duration-200"
          >
            Send ✉️
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow p-5 bg-ub-gedit-dark relative windowMainScreen overflow-y-auto">
          {this.renderInput("sender-name", "Your Name or Email", "Type your name or email...", "name")}
          {this.renderInput("sender-subject", "Subject", "Feedback or subject...", "subject")}
          {this.renderInput("sender-message", "Message", "Write your message here...", "message", "text", true)}
        </div>

        {/* Loading Overlay */}
        {sending && (
          <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col items-center justify-center z-10">
            <img
              src="./themes/Yaru/status/process-working-symbolic.svg"
              alt="Sending..."
              className="w-8 h-8 animate-spin"
            />
            <span className="text-sm text-gray-200 mt-2 animate-pulse">Sending...</span>
          </div>
        )}
      </div>
    );
  }
}

export default Gedit;

export const displayGedit = () => {
  return <Gedit />;
};
