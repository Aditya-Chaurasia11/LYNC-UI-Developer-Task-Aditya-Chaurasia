import React from "react";
import "./Home.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import NavbarBG from "../../assets/Background.svg";

import {
  BackedByImg1,
  BackedByImg2,
  BackedByImg3,
  MakingImg1,
  MakingImg2,
  MakingImg3,
  MakingImg4,
  MakingImg5,
  ETHAnimation,
  animation1,
  animation2,
  JoinDiscord,
  Telegram,
  Ethereum,
  Polygon,
  Aptos,
  Zksyn,
  Shardeum,
  Astar,
  Saga,
  Avalanche,
  filecoin,
  chainlink,
  spheron,
  longhash,
  axelar,
  biconomy,
  lighthouse,
  believers_img,
} from "../../images/Images";

import ProductCard from "../../components/Card/ProductCard";
import BlogCarousel from "../../components/Carousel/BlogCarousel";
import ReviewCarousel from "../../components/Carousel/ReviewCarousel";

import HomeLayout from "../../Layout/HomeLayout";
import productData from "../../data/productData";

const Home = () => {
  return (
    <HomeLayout>
      <div className="home">
        <img className="home_navbar_img" src={NavbarBG}></img>
        <div className="home_launch_your_game_container">
          <div className="home_launch_your_game">
            <h2 className="heading1">
              Launch Your Game <br /> on{" "}
              <span className="redSpan">Web 3.0</span> in Minutes
            </h2>
            <p className="para1">
              We help game developers to launch their game on Web 3.0, by
              keeping blockchain complexities aside with WebWorld SDKs!
            </p>
            <div className="home_launch_your_game_button_container">
              <button className="home_launch_your_game_button1 blueBgButton">
                Get Started{" "}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7474 12L19.1009 11.6464L19.4545 12L19.1009 12.3536L18.7474 12ZM6.74738 12.5C6.47123 12.5 6.24738 12.2761 6.24738 12C6.24738 11.7239 6.47123 11.5 6.74738 11.5V12.5ZM15.1009 7.64645L19.1009 11.6464L18.3938 12.3536L14.3938 8.35355L15.1009 7.64645ZM19.1009 12.3536L15.1009 16.3536L14.3938 15.6464L18.3938 11.6464L19.1009 12.3536ZM18.7474 12.5H6.74738V11.5H18.7474V12.5Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button className="home_launch_your_game_button2">
                View Docs
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.7474 12L19.1009 11.6464L19.4545 12L19.1009 12.3536L18.7474 12ZM6.74738 12.5C6.47123 12.5 6.24738 12.2761 6.24738 12C6.24738 11.7239 6.47123 11.5 6.74738 11.5V12.5ZM15.1009 7.64645L19.1009 11.6464L18.3938 12.3536L14.3938 8.35355L15.1009 7.64645ZM19.1009 12.3536L15.1009 16.3536L14.3938 15.6464L18.3938 11.6464L19.1009 12.3536ZM18.7474 12.5H6.74738V11.5H18.7474V12.5Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="home_backedby_container">
          <h2>Backed by</h2>
          <div className="home_backedby_brands_container">
            <img src={BackedByImg1}></img>
            <img src={BackedByImg2}></img>
            <img src={BackedByImg3}></img>
          </div>
        </div>

        <div className="home_lync_provides_container">
          <div className="home_lync_provides">
            <div className="home_lync_provides_line1">
              <svg
                height="1"
                viewBox="0 0 591 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.144897"
                  y1="0.5"
                  x2="591"
                  y2="0.5"
                  stroke="url(#paint0_linear_37_76)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_76"
                    x1="591"
                    y1="1"
                    x2="0.144897"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.0620032"
                      stop-color="white"
                      stop-opacity="0"
                    />
                    <stop offset="0.545" stop-color="white" />
                    <stop
                      offset="0.895617"
                      stop-color="white"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h2 className="para2">
              LYNC provides a scalable infrastructure for launching web3 games,
              without hampering the gaming experience.
              <br />
              So that you can deliver the next big hit!
            </h2>
            <div className="home_lync_provides_line2">
              <svg
                height="1"
                viewBox="0 0 591 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.144897"
                  y1="0.5"
                  x2="591"
                  y2="0.5"
                  stroke="url(#paint0_linear_37_78)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_37_78"
                    x1="591"
                    y1="1"
                    x2="0.144897"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.0620032"
                      stop-color="white"
                      stop-opacity="0"
                    />
                    <stop offset="0.545" stop-color="white" />
                    <stop
                      offset="0.895617"
                      stop-color="white"
                      stop-opacity="0"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="home_making_blockchain_container">
            <h2 className="heading2">
              Making blockchain gaming
              <br /> accessible to everyone!
            </h2>
          </div>
          <div className="home_making_blockchain_brands">
            <img src={MakingImg1}></img>

            <img src={MakingImg2}></img>

            <img src={MakingImg3}></img>

            <img src={MakingImg4}></img>

            <img src={MakingImg5}></img>
          </div>
        </div>

        <div className="home_powerup_container">
          <div className="home_powerup_upper">
            <h2 className="heading2">
              Power Up Your Web3 Game
              <br />
              Development, With <span className="redSpan">LYNC SDKs</span>
            </h2>
            <p className="para1">
              LYNC SDKs can be easily integrated into game engines like Unity 3D
              and Unreal Engine in a few clicks.
            </p>
          </div>
          <div className="home_powerup_lower">
            <h2 className="heading2">
              Don't Worry about the <span className="redSpan">Web3</span>{" "}
              Complexities
            </h2>
            <div className="home_powerup_lower_list">
              <p>
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                    fill="url(#paint0_linear_9_196)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_9_196"
                      x1="36.4962"
                      y1="-22.4"
                      x2="-4.41141"
                      y2="64.7536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.365638" stop-color="#3F37C9" />
                      <stop offset="1" stop-color="#4CC9F0" />
                    </linearGradient>
                  </defs>
                </svg>
                Save 9-12 months of development time
              </p>
              <p>
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                    fill="url(#paint0_linear_9_196)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_9_196"
                      x1="36.4962"
                      y1="-22.4"
                      x2="-4.41141"
                      y2="64.7536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.365638" stop-color="#3F37C9" />
                      <stop offset="1" stop-color="#4CC9F0" />
                    </linearGradient>
                  </defs>
                </svg>
                Focus completely on Game Dev and Mechanics
              </p>
              <p>
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                    fill="url(#paint0_linear_9_196)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_9_196"
                      x1="36.4962"
                      y1="-22.4"
                      x2="-4.41141"
                      y2="64.7536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.365638" stop-color="#3F37C9" />
                      <stop offset="1" stop-color="#4CC9F0" />
                    </linearGradient>
                  </defs>
                </svg>
                Save Up to $500K+ on Salaries & Smart Contract Auditing
              </p>
              <p>
                {" "}
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0.333374L11 11L0.333313 15L11 19L15 29.6667L19 19L29.6666 15L19 11L15 0.333374Z"
                    fill="url(#paint0_linear_9_196)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_9_196"
                      x1="36.4962"
                      y1="-22.4"
                      x2="-4.41141"
                      y2="64.7536"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0.365638" stop-color="#3F37C9" />
                      <stop offset="1" stop-color="#4CC9F0" />
                    </linearGradient>
                  </defs>
                </svg>
                Go Cross-Chain in a few clicks
              </p>
              <img src={ETHAnimation} className="home_powerup_lower_img"></img>
            </div>
          </div>

          <div className="home_elevateGrid_container">
            <div className="home_elevateGrid_left">
              <div className="home_elevateGrid_left_text">
                <h2 className="heading3">
                  Elevate Your Gameplay <br /> with Essential Insights!
                </h2>
                <p className="para3">
                  Unleash Your Potential - Explore the Knowledge Hub Today!
                </p>
                <button className="white_bg_button">View Docs</button>
              </div>
              <Player
                autoplay
                loop
                src={animation1} // Direct link to the Lottie JSON file
                className="player1"
              />
            </div>
            <div className="home_elevateGrid_right ">
              <div class="diva">
                <h2>
                  <span className="blueSpan">200+</span>
                </h2>
                <p>Projects have downloaded & integrated LYNC SDKs</p>
              </div>
              <div class="divb">
                <h2>
                  <span className="redSpan">8000+</span>
                </h2>
                <p>Contracts have been deployed via LYNC</p>
              </div>
              <div class="divc">
                <h2>
                  <span className="blueSpan">50000+</span>
                </h2>
                <p>User ops created in 10 hours</p>

                <Player
                  autoplay
                  loop
                  src={animation2} // Direct link to the Lottie JSON file
                  style={{
                    width: "253.14px",
                    height: "262.26px",
                    transform: "rotate(8.38deg)",
                    position: "relative",
                    bottom: "-18px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="home_product_container">
          <h2 className="heading2">
            Product <span className="blueSpan">Suite</span>
          </h2>
          <div className="home_productcard_container">
            {productData?.map((data, index) => (
              <ProductCard data={data} index={index} />
            ))}
          </div>
        </div>

        <div className="home_favourite_container">
          <h2 className="heading2">
            With LYNC, build on your
            <br />
            <span className="blueSpan">favorite chain.</span>
          </h2>
          <div className="home_favourite_img_container">
            <img src={Ethereum}></img>
            <img src={Polygon}></img>
            <img src={Aptos}></img>
            <img src={Zksyn}></img>
          </div>
          <div className="home_favourite_img_container">
            <img src={Shardeum}></img>
            <img src={Astar}></img>
            <img src={Saga}></img>
            <img src={Avalanche}></img>
          </div>
        </div>

        <div className="home_blog_container">
          <div className="home_blog_heading">
            <h2 className="heading2">
              From our <span className="blueSpan">Blog</span>
            </h2>
            <p className="para1">
              Level Up Your Web3 Gaming Experience: Explore Our Blog for
              Insights, Tips, and Innovations in Gaming SDKs!
            </p>
          </div>
          <div className="home_blog_carousel">
            <BlogCarousel />
          </div>
        </div>

        <div className="home_review_container">
          <h2 className="heading2">
            Valuable <span className="redSpan">Reviews</span>{" "}
          </h2>
          <div className="home_review_carousel">
            <ReviewCarousel />
          </div>
        </div>

        <div className="home_joindiscord_container">
          <img src={JoinDiscord} className="discordImg"></img>
          <div className="home_joindiscord_text">
            <h2 className="heading2">
              Strongest Web3 <br /> <span className="blueSpan">Community</span>
            </h2>
            <button className="blueBgButton">
              <img src={Telegram} /> Join Telegram
            </button>
          </div>
        </div>

        <div className="home_believers_container">
          <h2 className="heading2">
            Our <span className="blueSpan">Believers and Partners</span>
          </h2>
          <div className="home_believers_img_container">
            <img src={filecoin}></img>
            <img src={chainlink}></img>
            <img src={spheron}></img>
            <img src={longhash}></img>
            <img src={axelar}></img>
            <img src={biconomy}></img>
            <img src={lighthouse}></img>
            <img src={believers_img}></img>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
