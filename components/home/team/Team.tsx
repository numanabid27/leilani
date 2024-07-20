import useDimensions from "@/hooks/use-dimensions";
import styles from "./team.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect ,useRef, useState } from "react";
import team from "../../../data/team.json";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const component = useRef<any>();
  const slider = useRef<any>();
  console.log(team.team)

  useLayoutEffect(() => {
    if (width > 700 && slider.current && component.current) {
      let ctx = gsap.context(() => {
        let panels = gsap.utils.toArray(".panel");
        gsap.to(panels, {
          xPercent: -100 * (panels.length - 1),
          ease: "none",
          duration: 2,
          scrollTrigger: {
            trigger: slider.current,
            pin: true,
            scrub: 1,
            end: () => "+=5000",
          },
        });
      }, component);
      return () => ctx.revert();
    }

  });

  const { width } = useDimensions();
  return (
    <>
      {/* mobile */}
      {width < 700 ? (
        <div>
          <p
            style={{
              display: width && width < 700 ? "block" : "none",
              color: "#4349EE",
              fontSize: "15px",
              fontWeight: 500,
              padding: "20px 20px",
            }}
          >
            TEAM
          </p>
          <div className={styles.team_row}>
                {team.team.map(
                  (
                    { team, name, title, designation, teamName }: any,
                    i: number
                  ) => {
                    return (
                      <div

                        key={i.toString()}
                      >
                        {team && (
                          <div className={styles.panel__inner}>
                            <img src={team} alt="leilani" />
                            <div className={styles.team_desc}>
                              <h6>{name}</h6>
                              <p>{title}</p>
                              <p>{designation}</p>
                              
                            </div>
                          </div>
                        )}
                        {teamName && (
                          <div className={styles.panel__inner__team}>
                            <h2>{teamName}</h2>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
        </div>
      ) : (
        <>
          {/* desktop team */}
          <div ref={component}>
            <div ref={slider} className="container">
              <div className={styles.team_row}>
                {team.team.map(
                  (
                    { team, name, title, designation, teamName }: any,
                    i: number
                  ) => {
                    return (
                      <div
                        className={teamName ? "ct panel" : null + " panel"}
                        key={i.toString()}
                      >
                        {team && (
                          <div className={styles.panel__inner}>
                            <img src={team} alt="leilani" />
                            <div className={styles.team_desc}>
                              <h6>{name}</h6>
                              <p>{title}</p>
                              <p>{designation}</p>
                            </div>
                          </div>
                        )}
                        {teamName && (
                          <div className={styles.panel__inner__team}>
                            <h2>{teamName}</h2>
                          </div>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Team;
