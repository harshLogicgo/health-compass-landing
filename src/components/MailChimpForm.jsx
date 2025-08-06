// components/MailchimpForm.js
"use client";
import React, { memo, useEffect } from "react";
import Modal from "./common/Modal";
import { Images } from "@/data/images";
import Image from "next/image";

const MailchimpForm = memo(({ email, isOpen, onHide, resetForm }) => {
  useEffect(() => {
    // Load Mailchimp validation script
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Mailchimp form handlers
    script.onload = () => {
      const mcj = document.createElement("script");
      mcj.type = "text/javascript";
      mcj.innerHTML = `
        (function($) {
          window.fnames = new Array(); 
          window.ftypes = new Array();
          fnames[0]='EMAIL';ftypes[0]='email';
          fnames[1]='FNAME';ftypes[1]='text';
        }(jQuery));
        var $mcj = jQuery.noConflict(true);
      `;
      document.body.appendChild(mcj);
    };

    return () => {
      // Cleanup
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Modal isOpen={isOpen} onHide={onHide}>
      <div id="mc_embed_signup" className="mailchimp-form">
        {isOpen && (
          <form
            action="https://gohealthcompass.us10.list-manage.com/subscribe/post?u=2f830c944b3f41ef1b85b032a&id=8cb40504e6&f_id=00c8e1e5f0"
            // action="https://gohealthcompass.us21.list-manage.com/subscribe/post?u=f1a92ec108fb48c6163bbcf2d&id=129a0d6cbd&f_id=006cadf1f0"
            // action="https://gmail.us12.list-manage.com/subscribe/post?u=399a31d77877092882b9c9881&amp;id=1a9c9968f2&amp;f_id=00bcc2e1f0"
            // action="https://gohealthcompass.us10.list-manage.com/subscribe/post?u=b427fa6815-9e0ee3bd63&id=6cb40504e4"
            method="post"
            target="_blank"
            onSubmit={() => {
              setTimeout(() => {
                onHide(); // ✅ Close modal shortly after submission
                resetForm()
              }, 300); // small delay for better UX
            }}
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="text-[20px] sm:text-3xl font-semibold relative me-5 mb-3">
                Join the{" "}
                <span className="text-primary relative">
                  {" "}
                  Health Compass
                  <img
                    src={Images.other.titlePattern}
                    width={175}
                    height={12}
                    alt="title pattern"
                    className="absolute right-0 mt-[-2px]"
                  />{" "}
                </span>
                list{" "}
                {/* <img
                className="title-pattern top-[100%] sm:block"
                src={Images.other.titlePattern}
                alt=""
              /> */}
              </h2>
              <p className="text-start text-[13px] sm:text-base text-gray-500 block mb-7 sm:mb-10">
                Join the early access list and get exclusive launch updates.
              </p>

              <div className="mc-field-group mb-8 sm:mb-5">
                <label
                  htmlFor="mce-FNAME"
                  className="mb-1 block text-sm font-medium text-text-primary"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="FNAME"
                  className="required w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="mc-field-group mb-8 sm:mb-8">
                <label
                  htmlFor="mce-EMAIL"
                  className="mb-1 block text-sm font-medium text-text-primary"
                >
                  Email Address *
                </label>
                <input
                  defaultValue={email || ""}
                  type="email"
                  name="EMAIL"
                  className="required email w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <input
                type="hidden"
                name="TAG"
                value="Landing Page Lead – May 2025"
              />

              {/* <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div> */}

              {/* <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_b427fa6815_9e0ee3bd63"
                tabIndex="-1"
                value=""
              />
            </div> */}

              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                aria-hidden="true"
                style={{ position: "absolute", left: "-5000px" }}
              >
                <input
                  type="text"
                  name="b_2f830c944b3f41ef1b85b032a_8cb40504e6"
                  tabindex="-1"
                  value=""
                />
              </div>

              <div className="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  className="button btn-teal w-full block cursor-pointer"
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
});

export default MailchimpForm;
