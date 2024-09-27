import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo (2).png";
import LYNC from "../../assets/LYNC Logo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <img src={LYNC} className="footer_container_logo"></img>

      <div className="footer_upper">
        <h2 className="heading2">
          Got a game idea ?
          <br />
          Let's make it big together !!!
        </h2>
        <button>Get Started</button>
      </div>

      <div className="footer_lower">
        <div className="footer_lower_first">
          <div>
            <img src={logo}></img>
            <p>A GameFi Infrastructure</p>
            <div className="footer_lower_first_social">
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.96792e-07 2.42155C2.96792e-07 1.91192 0.21125 1.42317 0.587278 1.06281C0.963305 0.70245 1.47331 0.500003 2.00509 0.500003H21.9927C22.2563 0.49959 22.5173 0.548996 22.7609 0.64539C23.0045 0.741785 23.2258 0.883276 23.4123 1.06176C23.5987 1.24025 23.7466 1.45223 23.8475 1.68556C23.9483 1.91889 24.0001 2.16899 24 2.42155V21.5764C24.0003 21.829 23.9486 22.0791 23.8479 22.3126C23.7472 22.546 23.5994 22.7582 23.4131 22.9368C23.2268 23.1155 23.0055 23.2572 22.762 23.3538C22.5184 23.4505 22.2574 23.5001 21.9938 23.5H2.00509C1.74169 23.5 1.48086 23.4503 1.23752 23.3536C0.994184 23.257 0.773096 23.1154 0.586892 22.9368C0.400688 22.7583 0.253017 22.5463 0.152316 22.3131C0.0516145 22.0798 -0.000143013 21.8298 2.96792e-07 21.5774V2.42155ZM9.49964 9.26927H12.7495V10.8333C13.2185 9.93418 14.4185 9.125 16.2218 9.125C19.6789 9.125 20.4982 10.9159 20.4982 14.2017V20.2884H16.9996V14.9503C16.9996 13.0789 16.5305 12.023 15.3393 12.023C13.6865 12.023 12.9993 13.1615 12.9993 14.9503V20.2884H9.49964V9.26927ZM3.49964 20.1451H6.99927V9.125H3.49964V20.1441V20.1451ZM7.5 5.53073C7.5066 5.81789 7.45328 6.10342 7.34317 6.37056C7.23306 6.6377 7.06838 6.88108 6.8588 7.0864C6.64921 7.29172 6.39894 7.45486 6.12268 7.56624C5.84641 7.67761 5.54972 7.73498 5.25 7.73498C4.95028 7.73498 4.65359 7.67761 4.37732 7.56624C4.10106 7.45486 3.85079 7.29172 3.6412 7.0864C3.43162 6.88108 3.26694 6.6377 3.15683 6.37056C3.04672 6.10342 2.9934 5.81789 3 5.53073C3.01295 4.96708 3.25569 4.43069 3.67624 4.03645C4.09678 3.6422 4.6617 3.42144 5.25 3.42144C5.8383 3.42144 6.40322 3.6422 6.82376 4.03645C7.24431 4.43069 7.48705 4.96708 7.5 5.53073Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.317 1.49197C18.787 0.801974 17.147 0.291974 15.432 0.0019736C15.4167 -0.000958481 15.4009 0.000931061 15.3868 0.00738094C15.3726 0.0138308 15.3608 0.0245219 15.353 0.0379736C15.143 0.406974 14.909 0.887974 14.745 1.26797C12.9261 0.99621 11.0769 0.99621 9.25799 1.26797C9.07533 0.846834 8.86934 0.436198 8.64099 0.0379736C8.63325 0.0243563 8.62154 0.0134234 8.60743 0.00663373C8.59331 -0.000155898 8.57746 -0.00247938 8.56199 -2.64894e-05C6.84799 0.289973 5.20799 0.799974 3.67699 1.49097C3.66382 1.4965 3.65265 1.50592 3.64499 1.51797C0.532992 6.09297 -0.320008 10.555 0.0989923 14.961C0.100158 14.9718 0.103508 14.9822 0.108837 14.9917C0.114167 15.0011 0.121364 15.0094 0.129992 15.016C1.94638 16.3384 3.97233 17.3458 6.12299 17.996C6.13798 18.0006 6.15402 18.0006 6.16901 17.9959C6.18399 17.9913 6.19723 17.9823 6.20699 17.97C6.66979 17.351 7.07989 16.6944 7.43299 16.007C7.43789 15.9976 7.44072 15.9872 7.44127 15.9766C7.44183 15.9661 7.44011 15.9555 7.43622 15.9456C7.43233 15.9358 7.42637 15.9268 7.41874 15.9195C7.41111 15.9121 7.40199 15.9065 7.39199 15.903C6.746 15.6597 6.12008 15.3661 5.51999 15.025C5.50921 15.0188 5.50012 15.0101 5.49355 14.9995C5.48698 14.989 5.48312 14.977 5.48233 14.9646C5.48153 14.9522 5.48383 14.9398 5.48901 14.9286C5.49418 14.9173 5.50208 14.9075 5.51199 14.9C5.63799 14.807 5.76399 14.71 5.88399 14.613C5.89479 14.6043 5.9078 14.5987 5.92158 14.5969C5.93535 14.5952 5.94934 14.5973 5.96199 14.603C9.88899 16.367 14.142 16.367 18.023 14.603C18.0357 14.5969 18.0498 14.5946 18.0638 14.5961C18.0778 14.5977 18.091 14.6032 18.102 14.612C18.222 14.71 18.347 14.807 18.474 14.9C18.484 14.9073 18.492 14.917 18.4974 14.9282C18.5027 14.9394 18.5052 14.9517 18.5046 14.9641C18.504 14.9765 18.5004 14.9885 18.494 14.9991C18.4876 15.0098 18.4787 15.0186 18.468 15.025C17.87 15.369 17.248 15.66 16.595 15.902C16.585 15.9056 16.5758 15.9114 16.5682 15.9188C16.5606 15.9263 16.5546 15.9353 16.5507 15.9452C16.5468 15.9551 16.5451 15.9658 16.5457 15.9764C16.5463 15.9871 16.5491 15.9975 16.554 16.007C16.914 16.694 17.326 17.348 17.779 17.969C17.7884 17.9817 17.8015 17.9912 17.8166 17.9963C17.8316 18.0013 17.8478 18.0015 17.863 17.997C20.0173 17.3486 22.0466 16.3407 23.865 15.016C23.8739 15.0098 23.8813 15.0017 23.8868 14.9924C23.8923 14.9831 23.8958 14.9727 23.897 14.962C24.397 9.86797 23.059 5.44197 20.348 1.51997C20.3413 1.50723 20.3303 1.49729 20.317 1.49197ZM8.01999 12.278C6.83799 12.278 5.86299 11.209 5.86299 9.89797C5.86299 8.58597 6.81899 7.51797 8.01999 7.51797C9.22999 7.51797 10.196 8.59497 10.177 9.89797C10.177 11.21 9.22099 12.278 8.01999 12.278ZM15.995 12.278C14.812 12.278 13.838 11.209 13.838 9.89797C13.838 8.58597 14.793 7.51797 15.995 7.51797C17.205 7.51797 18.171 8.59497 18.152 9.89797C18.152 11.21 17.206 12.278 15.995 12.278Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                {" "}
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.643 2.93708C22.808 3.30708 21.911 3.55708 20.968 3.67008C21.941 3.08787 22.669 2.17154 23.016 1.09208C22.1019 1.63507 21.1014 2.01727 20.058 2.22208C19.3564 1.47294 18.4271 0.976403 17.4143 0.809551C16.4016 0.642699 15.3621 0.814868 14.4572 1.29933C13.5524 1.78379 12.8328 2.55344 12.4102 3.48878C11.9875 4.42412 11.8855 5.47283 12.12 6.47208C10.2677 6.37907 8.45564 5.89763 6.80144 5.05898C5.14723 4.22034 3.68785 3.04324 2.51801 1.60408C2.11801 2.29408 1.88801 3.09408 1.88801 3.94608C1.88757 4.71307 2.07644 5.46832 2.43789 6.14481C2.79934 6.8213 3.32217 7.39812 3.96001 7.82408C3.22029 7.80054 2.49688 7.60066 1.85001 7.24108V7.30108C1.84994 8.37682 2.22204 9.41945 2.90319 10.2521C3.58434 11.0847 4.53258 11.656 5.58701 11.8691C4.9008 12.0548 4.18135 12.0821 3.48301 11.9491C3.78051 12.8747 4.36001 13.6841 5.14038 14.264C5.92075 14.8439 6.86293 15.1653 7.83501 15.1831C6.18484 16.4785 4.1469 17.1812 2.04901 17.1781C1.67739 17.1782 1.30609 17.1565 0.937012 17.1131C3.06649 18.4823 5.54535 19.2089 8.07701 19.2061C16.647 19.2061 21.332 12.1081 21.332 5.95208C21.332 5.75208 21.327 5.55008 21.318 5.35008C22.2293 4.69105 23.0159 3.87497 23.641 2.94008L23.643 2.93708Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="footer_lower_second">
          <div className="footer_lower_second_product">
            <h2>Product</h2>
            <p>SDK's</p>
            <p>Transfer API's</p>
            <p>Token API's</p>
            <p>NFT API's</p>
          </div>
          <div className="footer_lower_second_company">
            <h2>Company</h2>
            <p>About us</p>
            <p>Press Kit</p>
            <p>Security</p>
            <p>Privacy Policy</p>
          </div>
          <div className="footer_lower_second_contact">
            <h2>Contact</h2>
            <p>Email</p>
            <p>Discord</p>
            <p>Telegram</p>
            <p>Press</p>
          </div>
        </div>

        <div className="footer_lower_third">
          <h2>Supercharge your inbox</h2>
          <p>Sign up for our newsletter</p>
          <div className="footer_lower_third_email">
            <input type="text" placeholder="enter you email address" />
            <button>Submit</button>
          </div>
        </div>
      </div>

      <div className="footer_copyrite">
        <p>2024 LYNC World  · Terms of service</p>
      </div>
    </div>
  );
};

export default Footer;