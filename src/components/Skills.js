
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import colorSharp from "./assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Here are my skills, a synergy of knowledge and curiosity in the
                world of software development.
                <br /> Trying to learn something new everyday.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="skill-html">
                  <img alt="svgImg" className="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBmaWxsPSIjZjU5MTczIiBkPSJNODMuMTA1LDE1SDE2Ljg5NWw1Ljg0Miw2Ni4yMTFMNTAsODlsMjcuMjYzLTcuNzg5TDgzLjEwNSwxNUw4My4xMDUsMTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDkwYy0wLjA5MywwLTAuMTg1LTAuMDEzLTAuMjc0LTAuMDM5bC0yNy4yNjMtNy43OWMtMC4zOTgtMC4xMTQtMC42ODYtMC40NjEtMC43MjItMC44NzQJbC01Ljg0My02Ni4yMWMtMC4wMjQtMC4yNzksMC4wNjktMC41NTYsMC4yNTktMC43NjNTMTYuNjE0LDE0LDE2Ljg5NSwxNGg2Ni4yMTFjMC4yOCwwLDAuNTQ4LDAuMTE4LDAuNzM3LDAuMzI1CXMwLjI4MywwLjQ4NCwwLjI1OSwwLjc2M2wtNS44NDMsNjYuMjFjLTAuMDM2LDAuNDEzLTAuMzIzLDAuNzYtMC43MjIsMC44NzRsLTI3LjI2Myw3Ljc5QzUwLjE4NSw4OS45ODcsNTAuMDkzLDkwLDUwLDkweiBNMjMuNjczLDgwLjQzOEw1MCw4Ny45NmwyNi4zMjctNy41MjJMODIuMDE0LDE2SDE3Ljk4NkwyMy42NzMsODAuNDM4eiI+PC9wYXRoPjxwb2x5Z29uIGZpbGw9IiNlODU2NTQiIHBvaW50cz0iNTAsMjAuNSA1MCw4Mi45NjMgNzEuODExLDc2LjczMiA3Ni43MDksMjAuNSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiNmZWZkZWYiIHBvaW50cz0iNTAsMzAuNTc5IDQ5LDM0LjQ3NCA1MCwzOC4zNjggNjcuMzMyLDM4LjM2OCA2Ny45MTYsMzAuNTc5Ij48L3BvbHlnb24+PHBvbHlnb24gZmlsbD0iI2ZlZmRlZiIgcG9pbnRzPSI1MCw1My45NDcgNTguNTY4LDUzLjk0NyA1Ny45ODQsNjIuNzExIDUwLDY1LjQzNyA0OSw2OSA1MCw3My42MTYgNjUuMzg0LDY4LjU1MyA2Ni43NDcsNDYuMTU4IDUwLDQ2LjE1OCA0OSw1MCI+PC9wb2x5Z29uPjxwYXRoIGZpbGw9IiNlZWVjZDkiIGQ9Ik01MCw2NS40Mzd2OC4xNzlsLTE1LjM4NC01LjA2M2wtMC43NzktMTAuNzExaDcuNzg5bDAuMzg5LDQuODY4TDUwLDY1LjQzN3ogTTQwLjQ1OCwzOC4zNjhINTAJdi03Ljc4OUgzMi4yNzlsMS4zNjMsMjMuMzY4SDUwdi03Ljc4OWgtOC45NThMNDAuNDU4LDM4LjM2OHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNjcuNTc2LDc4LjQ0MWMtMC4yMTgsMC0wLjQxOC0wLjE0My0wLjQ4LTAuMzYzYy0wLjA3Ni0wLjI2NSwwLjA3Ny0wLjU0MiwwLjM0My0wLjYxOGwzLjkwNC0xLjExNQlMNzYuMTYzLDIxSDUwLjV2My41YzAsMC4yNzYtMC4yMjQsMC41LTAuNSwwLjVzLTAuNS0wLjIyNC0wLjUtMC41di00YzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVoMjYuNzA5CWMwLjE0MSwwLDAuMjczLDAuMDU5LDAuMzY4LDAuMTYyczAuMTQzLDAuMjQyLDAuMTMsMC4zODFsLTQuODk4LDU2LjIzMWMtMC4wMTgsMC4yMDctMC4xNjEsMC4zOC0wLjM2LDAuNDM4bC00LjIzNCwxLjIxCUM2Ny42NjgsNzguNDM1LDY3LjYyMSw3OC40NDEsNjcuNTc2LDc4LjQ0MXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNjIuNTM3LDc5Ljg4MWMtMC4yMTgsMC0wLjQxOC0wLjE0My0wLjQ4LTAuMzYzYy0wLjA3Ni0wLjI2NiwwLjA3OC0wLjU0MiwwLjM0My0wLjYxOGwxLjk5NC0wLjU2OQljMC4yNjgtMC4wNzQsMC41NDIsMC4wNzksMC42MTgsMC4zNDRjMC4wNzYsMC4yNjYtMC4wNzgsMC41NDItMC4zNDMsMC42MThsLTEuOTk0LDAuNTY5QzYyLjYyOSw3OS44NzUsNjIuNTgyLDc5Ljg4MSw2Mi41MzcsNzkuODgxCXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNTAsODMuNDYzYy0wLjEwNywwLTAuMjEzLTAuMDM1LTAuMzAxLTAuMTAxYy0wLjEyNi0wLjA5NS0wLjE5OS0wLjI0My0wLjE5OS0wLjM5OXYtOS4zNDgJYzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjVWODIuM2w4LjgxLTIuNTE3YzAuMjY3LTAuMDc0LDAuNTQzLDAuMDc5LDAuNjE4LDAuMzQ0CWMwLjA3NiwwLjI2NS0wLjA3NywwLjU0Mi0wLjM0MywwLjYxOGwtOS40NDcsMi42OTlDNTAuMDkyLDgzLjQ1Nyw1MC4wNDYsODMuNDYzLDUwLDgzLjQ2M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNTAsNjUuOTM3Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di04LjQ5YzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2OC40OQlDNTAuNSw2NS43MTMsNTAuMjc2LDY1LjkzNyw1MCw2NS45Mzd6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDQ2LjY1OGMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtNC43ODljMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXY0Ljc4OQlDNTAuNSw0Ni40MzQsNTAuMjc2LDQ2LjY1OCw1MCw0Ni42NTh6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDc0LjExNmMtMC4wNTMsMC0wLjEwNS0wLjAwOC0wLjE1Ni0wLjAyNUwzNC40Niw2OS4wMjhjLTAuMTkyLTAuMDYzLTAuMzI4LTAuMjM3LTAuMzQzLTAuNDM5CWwtMC43NzktMTAuNzFjLTAuMDEtMC4xMzgsMC4wMzgtMC4yNzUsMC4xMzMtMC4zNzZjMC4wOTUtMC4xMDIsMC4yMjgtMC4xNiwwLjM2Ni0wLjE2aDcuNzg5YzAuMjYxLDAsMC40NzgsMC4yLDAuNDk4LDAuNDYJbDAuMzY0LDQuNTQxTDUwLDY0LjkwOWw3LjUwOC0yLjU2NGwwLjUyNi03Ljg5N0gzMy42NDNjLTAuMjY1LDAtMC40ODMtMC4yMDctMC40OTktMC40NzFMMzEuNzgsMzAuNjA4CWMtMC4wMDgtMC4xMzgsMC4wNDEtMC4yNzIsMC4xMzYtMC4zNzNjMC4wOTQtMC4xLDAuMjI2LTAuMTU3LDAuMzYzLTAuMTU3aDM1LjYzN2MwLjEzOSwwLDAuMjcxLDAuMDU4LDAuMzY2LDAuMTYJYzAuMDk1LDAuMTAyLDAuMTQzLDAuMjM4LDAuMTMzLDAuMzc3bC0wLjU4NCw3Ljc5Yy0wLjAyLDAuMjYxLTAuMjM3LDAuNDYyLTAuNDk5LDAuNDYySDQwLjk5N2wwLjUwOSw2Ljc4OWgyNS4yNDEJYzAuMTM4LDAsMC4yNywwLjA1NywwLjM2NCwwLjE1N2MwLjA5NSwwLjEwMSwwLjE0NCwwLjIzNSwwLjEzNSwwLjM3M2wtMS4zNjMsMjIuMzk1Yy0wLjAxMywwLjIwNS0wLjE0OCwwLjM4MS0wLjM0MywwLjQ0NQlsLTE1LjM4NCw1LjA2M0M1MC4xMDUsNzQuMTA3LDUwLjA1Myw3NC4xMTYsNTAsNzQuMTE2eiBNMzUuMDkxLDY4LjE4M0w1MCw3My4wODlsMTQuOTA1LTQuOTA2bDEuMzExLTIxLjUyNkg0MS4wNDIJYy0wLjI2MiwwLTAuNDc5LTAuMjAyLTAuNDk5LTAuNDYybC0wLjU4NC03Ljc4OWMtMC4wMS0wLjEzOSwwLjAzOC0wLjI3NiwwLjEzMy0wLjM3N2MwLjA5NS0wLjEwMiwwLjIyOC0wLjE2LDAuMzY2LTAuMTZoMjYuNDEJbDAuNTA5LTYuNzlIMzIuODFsMS4zMDUsMjIuMzY4aDI0LjQ1NGMwLjEzOSwwLDAuMjcxLDAuMDU3LDAuMzY1LDAuMTU4czAuMTQzLDAuMjM3LDAuMTM0LDAuMzc1bC0wLjU4NCw4Ljc2MwljLTAuMDE0LDAuMjAxLTAuMTQ2LDAuMzc1LTAuMzM4LDAuNDRsLTcuOTg0LDIuNzI3Yy0wLjEwNCwwLjAzNi0wLjIxOSwwLjAzNi0wLjMyMiwwbC03Ljk4NC0yLjcyNwljLTAuMTg5LTAuMDY0LTAuMzIxLTAuMjM0LTAuMzM3LTAuNDMzbC0wLjM1NC00LjQwOGgtNi43ODlMMzUuMDkxLDY4LjE4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNTAsMzAuOWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtMi45YzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVzMC41LDAuMjI0LDAuNSwwLjV2Mi45CUM1MC41LDMwLjY3Niw1MC4yNzYsMzAuOSw1MCwzMC45eiI+PC9wYXRoPgo8L3N2Zz4=" />
                  <p>HTML</p>
                </div>

                <div className="skill-css">
                  <img alt="svgImg" className="svgImg"  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBmaWxsPSIjMzA3MGI3IiBkPSJNODMuMTA1LDE1SDE2Ljg5NWw1Ljg0Miw2Ni4yMTFMNTAsODlsMjcuMjYzLTcuNzg5TDgzLjEwNSwxNUw4My4xMDUsMTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDkwYy0wLjA5MywwLTAuMTg1LTAuMDEzLTAuMjc0LTAuMDM5bC0yNy4yNjMtNy43OWMtMC4zOTgtMC4xMTQtMC42ODYtMC40NjEtMC43MjItMC44NzQJbC01Ljg0My02Ni4yMWMtMC4wMjQtMC4yNzksMC4wNjktMC41NTYsMC4yNTktMC43NjNTMTYuNjE0LDE0LDE2Ljg5NSwxNGg2Ni4yMTFjMC4yOCwwLDAuNTQ4LDAuMTE4LDAuNzM3LDAuMzI1CXMwLjI4MywwLjQ4NCwwLjI1OSwwLjc2M2wtNS44NDMsNjYuMjFjLTAuMDM2LDAuNDEzLTAuMzIzLDAuNzYtMC43MjIsMC44NzRsLTI3LjI2Myw3Ljc5QzUwLjE4NSw4OS45ODcsNTAuMDkzLDkwLDUwLDkweiBNMjMuNjczLDgwLjQzOEw1MCw4Ny45NmwyNi4zMjctNy41MjJMODIuMDE0LDE2SDE3Ljk4NkwyMy42NzMsODAuNDM4eiI+PC9wYXRoPjxwb2x5Z29uIGZpbGw9IiMwOWFjZTMiIHBvaW50cz0iNTAsMjAuNSA1MCw4Mi45NjMgNzEuODExLDc2LjczMiA3Ni43MDksMjAuNSI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiNmZWZkZWYiIHBvaW50cz0iNjcuNzIxLDMwLjU3OSA1MCwzMC41NzkgNDksMzQgNTAsMzguMzY4IDU5LjU0MiwzOC4zNjggNTguOTU4LDQ2LjE1OCA1MCw0Ni4xNTggNDksNTAgNTAsNTMuOTQ3IDU4LjU2OCw1My45NDcgNTcuOTg0LDYyLjcxMSA1MCw2NS40MzcgNDksNzAgNTAsNzMuNjE2IDY1LjM4NCw2OC41NTMgNjYuNzQ3LDQ2LjE1OCA2Ni43NDcsNDYuMTU4Ij48L3BvbHlnb24+PHBhdGggZmlsbD0iI2VlZWNkOSIgZD0iTTUwLDMwLjU3OXY3Ljc4OUgzMi42NjhsLTAuNTg0LTcuNzg5SDUweiBNNDEuMDQyLDQ2LjE1OGwwLjM4OSw3Ljc4OUg1MHYtNy43ODlINDEuMDQyeiBNNDEuODIxLDU3Ljg0MmgtNy43ODlsMC41ODQsMTAuNzExTDUwLDczLjYxNnYtOC4xNzlsLTcuOTg0LTIuNzI2TDQxLjgyMSw1Ny44NDJ6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDMxLjA3OWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNVYyMC41YzAtMC4yNzYsMC4yMjQtMC41LDAuNS0wLjVoMy41CWMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41UzUzLjc3NiwyMSw1My41LDIxaC0zdjkuNTc5QzUwLjUsMzAuODU1LDUwLjI3NiwzMS4wNzksNTAsMzEuMDc5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik02MC41LDIxaC00Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41czAuMjI0LTAuNSwwLjUtMC41aDRjMC4yNzYsMCwwLjUsMC4yMjQsMC41LDAuNQlTNjAuNzc2LDIxLDYwLjUsMjF6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDgzLjQ2M2MtMC4xMDcsMC0wLjIxMy0wLjAzNS0wLjMwMS0wLjEwMWMtMC4xMjYtMC4wOTUtMC4xOTktMC4yNDMtMC4xOTktMC4zOTlWNzYuNQljMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXY1LjhsMjAuODQzLTUuOTU1TDc2LjE2MywyMUg2My41Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41czAuMjI0LTAuNSwwLjUtMC41CWgxMy4yMDljMC4xNDEsMCwwLjI3MywwLjA1OSwwLjM2OCwwLjE2MnMwLjE0MywwLjI0MiwwLjEzLDAuMzgxbC00Ljg5OCw1Ni4yMzFjLTAuMDE4LDAuMjA3LTAuMTYxLDAuMzgtMC4zNiwwLjQzOGwtMjEuODExLDYuMjMyCUM1MC4wOTIsODMuNDU3LDUwLjA0Niw4My40NjMsNTAsODMuNDYzeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik01MCw2NS45MzdjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjV2LTguNDljMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXY4LjQ5CUM1MC41LDY1LjcxMyw1MC4yNzYsNjUuOTM3LDUwLDY1LjkzN3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNTAsNDYuNjU4Yy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41di00Ljc4OWMwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djQuNzg5CUM1MC41LDQ2LjQzNCw1MC4yNzYsNDYuNjU4LDUwLDQ2LjY1OHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNTAsNzQuMTE2Yy0wLjA1MywwLTAuMTA1LTAuMDA4LTAuMTU2LTAuMDI1TDM0LjQ2LDY5LjAyOGMtMC4xOTUtMC4wNjQtMC4zMzItMC4yNDItMC4zNDMtMC40NDgJbC0wLjU4NS0xMC43MWMtMC4wMDgtMC4xMzcsMC4wNDItMC4yNzEsMC4xMzYtMC4zNzFjMC4wOTUtMC4xLDAuMjI2LTAuMTU2LDAuMzYzLTAuMTU2aDcuNzljMC4yNjksMCwwLjQ4OSwwLjIxMiwwLjUsMC40OAlsMC4xODEsNC41MjZMNTAsNjQuOTA5bDcuNTA4LTIuNTY0bDAuNTI2LTcuODk3SDQxLjQzMmMtMC4yNjcsMC0wLjQ4Ni0wLjIwOS0wLjQ5OS0wLjQ3NWwtMC4zOS03Ljc5CWMtMC4wMDctMC4xMzcsMC4wNDItMC4yNzEsMC4xMzctMC4zN3MwLjIyNi0wLjE1NSwwLjM2Mi0wLjE1NWgxNy40NTJsMC41MDktNi43ODlIMzIuNjY4Yy0wLjI2MiwwLTAuNDc5LTAuMjAyLTAuNDk5LTAuNDYyCWwtMC41ODQtNy43OWMtMC4wMS0wLjEzOSwwLjAzOC0wLjI3NiwwLjEzMy0wLjM3N2MwLjA5NS0wLjEwMiwwLjIyOC0wLjE2LDAuMzY2LTAuMTZoMzUuNjM3YzAuMTM4LDAsMC4yNywwLjA1NywwLjM2NCwwLjE1OAlzMC4xNDQsMC4yMzYsMC4xMzUsMC4zNzRsLTIuMzM3LDM3Ljk3M2MtMC4wMTMsMC4yMDUtMC4xNDgsMC4zODEtMC4zNDMsMC40NDVsLTE1LjM4NCw1LjA2M0M1MC4xMDUsNzQuMTA3LDUwLjA1Myw3NC4xMTYsNTAsNzQuMTE2CXogTTM1LjA5Nyw2OC4xODVMNTAsNzMuMDg5bDE0LjkwNS00LjkwNmwyLjI4My0zNy4xMDRIMzIuNjIzbDAuNTA5LDYuNzloMjYuNDFjMC4xMzksMCwwLjI3MSwwLjA1OCwwLjM2NiwwLjE2CWMwLjA5NSwwLjEwMiwwLjE0MywwLjIzOCwwLjEzMywwLjM3N2wtMC41ODQsNy43ODljLTAuMDIsMC4yNjEtMC4yMzcsMC40NjItMC40OTksMC40NjJINDEuNTY3bDAuMzQsNi43OWgxNi42NjEJYzAuMTM5LDAsMC4yNzEsMC4wNTcsMC4zNjUsMC4xNThzMC4xNDMsMC4yMzcsMC4xMzQsMC4zNzVsLTAuNTg0LDguNzYzYy0wLjAxNCwwLjIwMS0wLjE0NiwwLjM3NS0wLjMzOCwwLjQ0bC03Ljk4NCwyLjcyNwljLTAuMTA0LDAuMDM2LTAuMjE5LDAuMDM2LTAuMzIyLDBsLTcuOTg0LTIuNzI3Yy0wLjE5Ni0wLjA2Ny0wLjMzLTAuMjQ3LTAuMzM5LTAuNDUzbC0wLjE3NS00LjM4OEgzNC41NkwzNS4wOTcsNjguMTg1eiI+PC9wYXRoPgo8L3N2Zz4="/>
                  <p>CSS</p>
                </div>


                <div className="skill-java">
                  <img alt="svgImg" className="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBmaWxsPSIjZmVmZGVmIiBkPSJNODIsMjkuNDI5djQxLjE0M0M4Miw3Ni44NTcsNzYuODU3LDgyLDcwLjU3MSw4MkgyOS40MjlDMjMuMTQzLDgyLDE4LDc2Ljg1NywxOCw3MC41NzFWMjkuNDI5CUMxOCwyMy4xNDMsMjMuMTQzLDE4LDI5LjQyOSwxOGg0MS4xNDNDNzYuODU3LDE4LDgyLDIzLjE0Myw4MiwyOS40Mjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTcwLjU3MSw4M0gyOS40MjlDMjIuNTc1LDgzLDE3LDc3LjQyNCwxNyw3MC41NzFWMjkuNDI5QzE3LDIyLjU3NiwyMi41NzUsMTcsMjkuNDI5LDE3aDQxLjE0MwlDNzcuNDI1LDE3LDgzLDIyLjU3Niw4MywyOS40Mjl2NDEuMTQzQzgzLDc3LjQyNCw3Ny40MjUsODMsNzAuNTcxLDgzeiBNMjkuNDI5LDE5QzIzLjY3OSwxOSwxOSwyMy42NzgsMTksMjkuNDI5djQxLjE0MwlDMTksNzYuMzIyLDIzLjY3OSw4MSwyOS40MjksODFoNDEuMTQzQzc2LjMyMSw4MSw4MSw3Ni4zMjIsODEsNzAuNTcxVjI5LjQyOUM4MSwyMy42NzgsNzYuMzIxLDE5LDcwLjU3MSwxOUgyOS40Mjl6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTcwLjU3MSw3OEgyOS40MjlDMjUuMzMyLDc4LDIyLDc0LjY2NywyMiw3MC41NzFWMjkuNDI5QzIyLDI1LjMzMywyNS4zMzIsMjIsMjkuNDI5LDIySDMzLjUJYzAuMjc2LDAsMC41LDAuMjI0LDAuNSwwLjVTMzMuNzc2LDIzLDMzLjUsMjNoLTQuMDcxQzI1Ljg4NCwyMywyMywyNS44ODQsMjMsMjkuNDI5djQxLjE0M0MyMyw3NC4xMTYsMjUuODg0LDc3LDI5LjQyOSw3N2g0MS4xNDMJQzc0LjExNiw3Nyw3Nyw3NC4xMTYsNzcsNzAuNTcxVjY2LjVjMC0wLjI3NiwwLjIyNC0wLjUsMC41LTAuNXMwLjUsMC4yMjQsMC41LDAuNXY0LjA3MUM3OCw3NC42NjcsNzQuNjY4LDc4LDcwLjU3MSw3OHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNzcuNSw2NGMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNXYtM2MwLTAuMjc2LDAuMjI0LTAuNSwwLjUtMC41czAuNSwwLjIyNCwwLjUsMC41djMJQzc4LDYzLjc3Niw3Ny43NzYsNjQsNzcuNSw2NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNzcuNSw0OWMtMC4yNzYsMC0wLjUtMC4yMjQtMC41LTAuNVYyOS40MjlDNzcsMjUuODg0LDc0LjExNiwyMyw3MC41NzEsMjNINTEuNQljLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoMTkuMDcxQzc0LjY2OCwyMiw3OCwyNS4zMzMsNzgsMjkuNDI5VjQ4LjVDNzgsNDguNzc2LDc3Ljc3Niw0OSw3Ny41LDQ5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiMxZjIxMmIiIGQ9Ik00OC41LDIzaC0zYy0wLjI3NiwwLTAuNS0wLjIyNC0wLjUtMC41czAuMjI0LTAuNSwwLjUtMC41aDNjMC4yNzYsMCwwLjUsMC4yMjQsMC41LDAuNQlTNDguNzc2LDIzLDQ4LjUsMjN6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTQyLjUsMjNoLTZjLTAuMjc2LDAtMC41LTAuMjI0LTAuNS0wLjVzMC4yMjQtMC41LDAuNS0wLjVoNmMwLjI3NiwwLDAuNSwwLjIyNCwwLjUsMC41CVM0Mi43NzYsMjMsNDIuNSwyM3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjliNjIxIiBkPSJNNDcuODczLDUxLjU3Yy0wLjE1NiwwLTAuMzE1LTAuMDM3LTAuNDY0LTAuMTE1QzQ3LjIyOSw1MS4zNiw0Myw0OS4wNzksNDMsNDQuMwljMC0zLjIwMSwyLjQ4Ni01LjA5NCw0Ljg5MS02LjkyNGMyLjk4MS0yLjI3LDUuNTU3LTQuMjMsNC4xNi04LjQ2MmMtMC4xNzQtMC41MjQsMC4xMTEtMS4wOSwwLjYzNi0xLjI2MwljMC41MjYtMC4xNzIsMS4wOSwwLjExMiwxLjI2MywwLjYzNmMxLjg0NCw1LjU4Ni0xLjg2Niw4LjQxMS00Ljg0NywxMC42OEM0Ni45MDEsNDAuNjQzLDQ1LDQyLjA5LDQ1LDQ0LjMJYzAsMy41NTQsMy4yMDcsNS4zMTMsMy4zNDQsNS4zODdjMC40ODUsMC4yNiwwLjY3MSwwLjg2NSwwLjQxMywxLjM1MkM0OC41NzcsNTEuMzc2LDQ4LjIzLDUxLjU3LDQ3Ljg3Myw1MS41N3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjZjliNjIxIiBkPSJNNTEuMjUxLDUyLjQ4OWMtMC4zMjEsMC0wLjYzNi0wLjE1NC0wLjgyOS0wLjQ0Yy0wLjMwNy0wLjQ1My0wLjE5MS0xLjA2NywwLjI1NS0xLjM3OQljMC4wNTQtMC4wNCwwLjc3OS0wLjYwOSwwLjc3OS0xLjg4N2MwLTAuNDM1LTAuMjUyLTAuNzE0LTAuNzc2LTEuMjU2QzQ5Ljk3MSw0Ni43OTUsNDksNDUuNzkyLDQ5LDQzLjg5MQljMC0zLjg1Myw0LjYwNy02LjkzOCw3LjcyMi03LjgwOWMwLjUyNy0wLjE0NiwxLjA4NSwwLjE2MSwxLjIzMiwwLjY5M2MwLjE0OSwwLjUzMi0wLjE2MSwxLjA4My0wLjY5MywxLjIzMglDNTQuNzAyLDM4LjcyNCw1MSw0MS4yMzEsNTEsNDMuODkxYzAsMS4wOTIsMC40OTIsMS42MDEsMS4xMTYsMi4yNDVjMC41OTcsMC42MTcsMS4zNCwxLjM4NCwxLjM0LDIuNjQ3CWMwLDEuOTEyLTEuMDM0LDMuMTIyLTEuNjQ2LDMuNTM1QzUxLjYzOSw1Mi40MzQsNTEuNDQzLDUyLjQ4OSw1MS4yNTEsNTIuNDg5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM1Yzc2OWIiIGQ9Ik01Ny42MTEsNjAuNTU1Yy0wLjQxNCwwLTAuODAxLTAuMjYtMC45NDQtMC42NzNjLTAuMTgxLTAuNTIxLDAuMDk2LTEuMDkxLDAuNjE2LTEuMjcyCWMxLjMxOC0wLjQ1OSw0LjczOC0yLjE4Myw0LjczOC00LjYwOWMwLTEuMDM1LTAuMzktMS4zNC0wLjUxOC0xLjQ0MWMtMC42NDItMC41MDItMS44NDEtMC4zNTQtMi4yNTEtMC4yNTMJYy0wLjUzNywwLjEyOS0xLjA3Ny0wLjE5NC0xLjIxLTAuNzI4Yy0wLjEzNC0wLjUzNCwwLjE4OC0xLjA3NiwwLjcyMi0xLjIxMWMwLjI0NC0wLjA2MiwyLjQzOC0wLjU3NCwzLjk2NCwwLjYxMQljMC41OSwwLjQ1OCwxLjI5MywxLjM1NSwxLjI5MywzLjAyMmMwLDQuMzQ3LTUuODM1LDYuNDE0LTYuMDg0LDYuNUM1Ny44Myw2MC41MzcsNTcuNzIsNjAuNTU0LDU3LjYxMSw2MC41NTV6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzVjNzY5YiIgZD0iTTQ0LjUxMiw1NS45NzRjLTMuMTk4LDAtNS45MTYtMC4zMTgtNi44NzItMC45OTRDMzcuMDgzLDU0LjU4NiwzNyw1NC4wOTUsMzcsNTMuODM3CWMwLTIuMTM5LDMuNzc3LTMuMDQzLDUuNC0zLjMzMmMwLjU1NC0wLjA5OSwxLjA2MywwLjI2NiwxLjE2LDAuODA5YzAuMDk3LDAuNTQzLTAuMjY1LDEuMDYzLTAuODA5LDEuMTYJYy0xLjMxOSwwLjIzNi0yLjcwMywwLjcwMi0zLjM3MywxLjEwMmMyLjY1NSwwLjY4MywxMi4wNDUsMC41ODcsMTYuNzc4LTEuMDg5YzAuNTIzLTAuMTg0LDEuMDk0LDAuMDg5LDEuMjc2LDAuNjA5CWMwLjE4NSwwLjUyMS0wLjA4OCwxLjA5Mi0wLjYwOCwxLjI3N0M1My44OTksNTUuNDA3LDQ4Ljc3OCw1NS45NzQsNDQuNTEyLDU1Ljk3NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNWM3NjliIiBkPSJNNDUuNjU5LDU5Ljk2N2MtMy4yMTQsMC01LjkwNS0wLjU0NS02LjQ3Ni0yLjAyOGMtMC43MDEtMS44MjQsMS44NC0zLjI1MSwyLjY3NC0zLjcyCWMwLjQ4MS0wLjI3MSwxLjA5MS0wLjA5OSwxLjM2MiwwLjM4MmMwLjI3MSwwLjQ4MSwwLjEsMS4wOTEtMC4zODIsMS4zNjJjLTEuMjE1LDAuNjgyLTEuNjA0LDEuMTI1LTEuNzI0LDEuMzA0CWMwLjkzNSwwLjc2NCw2LjQ1NSwxLjE2NSwxMi43MDMtMC4yNDhjMC41MzctMC4xMiwxLjA3NCwwLjIxNiwxLjE5NiwwLjc1NWMwLjEyMSwwLjUzOS0wLjIxNywxLjA3NC0wLjc1NSwxLjE5NglDNTEuNzExLDU5LjU0Niw0OC40ODMsNTkuOTY3LDQ1LjY1OSw1OS45Njd6Ij48L3BhdGg+PHBhdGggZmlsbD0iIzVjNzY5YiIgZD0iTTQ2LjIwNCw2My45NjljLTIuMzY5LDAtNC40OC0wLjQyMi01LjA2LTEuODAyYy0wLjUxLTEuMjEzLDAuMjY5LTIuNTE5LDIuMzEyLTMuODgJYzAuNDYxLTAuMzA3LDEuMDgtMC4xODIsMS4zODcsMC4yNzhjMC4zMDcsMC40NTksMC4xODIsMS4wODEtMC4yNzcsMS4zODdjLTEuNDc0LDAuOTgtMS41NjUsMS40OTYtMS41NjUsMS41CWMwLjI4MywwLjM2NywzLjI2MywxLjEyNiwxMC4xNzctMC4zMzFjMC41MzktMC4xMTMsMS4wNywwLjIzMiwxLjE4NSwwLjc3MmMwLjExNCwwLjU0LTAuMjMxLDEuMDcxLTAuNzcyLDEuMTg1CUM1Mi4xOCw2My4zNzUsNDkuMDExLDYzLjk2OSw0Ni4yMDQsNjMuOTY5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM1Yzc2OWIiIGQ9Ik00NS44NzUsNjkuM0MzMy4xLDY5LjMsMzMuMSw2Ni45NTIsMzMuMSw2Ni4wNjdjMC0yLjAyOCwzLjMzOC0yLjY3NSw0Ljc3My0yLjg1OQljMC41NTMtMC4wNzYsMS4wNDksMC4zMTcsMS4xMTgsMC44NjRjMC4wNzEsMC41NDgtMC4zMTYsMS4wNDktMC44NjMsMS4xMmMtMS4xNjcsMC4xNTEtMi40MzcsMC41MzUtMi45MDIsMC44NTQJYzAuNzExLDAuNDQ3LDMuNDc3LDEuMjUzLDEwLjY0OSwxLjI1M2M3Ljc2NiwwLDEzLjUzNy0xLjIzNSwxNC40MDEtMi4xNDFjLTAuMDA1LTAuMDA2LTAuMDExLTAuMDEyLTAuMDE3LTAuMDE5CWMtMC4zNzEtMC40MDktMC4zNDEtMS4wNDEsMC4wNjctMS40MTNjMC40MDgtMC4zNzEsMS4wNDItMC4zNDEsMS40MTMsMC4wNjdjMC41OCwwLjYzOSwwLjczOCwxLjM5OCwwLjQzNSwyLjA4NQlDNjAuNjgsNjkuMjYxLDQ2LjQ3OSw2OS4zLDQ1Ljg3NSw2OS4zeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM1Yzc2OWIiIGQ9Ik00OS40OSw3Mi41NjdjLTQuNTYxLDAtOC4zMDgtMC41NDEtOC42MzUtMC41ODljLTAuNTQ3LTAuMDgxLTAuOTI0LTAuNTktMC44NDMtMS4xMzYJYzAuMDgyLTAuNTQ1LDAuNTkxLTAuOTE5LDEuMTM2LTAuODQyYzAuMTY0LDAuMDI0LDE2LjUwMiwyLjM3NywyMi4xMTItMi43MzljMC40MDctMC4zNzEsMS4wNC0wLjM0MywxLjQxMywwLjA2NQljMC4zNzIsMC40MDgsMC4zNDMsMS4wNDEtMC4wNjUsMS40MTNDNjEuMjE0LDcxLjgzNCw1NC44MDEsNzIuNTY3LDQ5LjQ5LDcyLjU2N3oiPjwvcGF0aD4KPC9zdmc+"/>
                  <p>Java</p>
                </div>


                <div className="skill-js">
                  <img alt="svgImg" className="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCI+CjxwYXRoIGZpbGw9IiNmZmUwODIiIGQ9Ik0xNS44NzksNDRDMTMuNzQ1LDQ0LDEyLDQyLjI1NSwxMiw0MC4xMjFWMTUuODc5QzEyLDEzLjc0NSwxMy43NDUsMTIsMTUuODc5LDEyaDI0LjI0MglDNDIuMjU1LDEyLDQ0LDEzLjc0NSw0NCwxNS44Nzl2MjQuMjQyQzQ0LDQyLjI1NSw0Mi4yNTUsNDQsNDAuMTIxLDQ0SDE1Ljg3OXoiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxODE5M2YiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik03LjUsMjguNTU5VjExLjUJYzAtMi4yLDEuOC00LDQtNGgyNWMyLjIsMCw0LDEuOCw0LDR2MS4yNDUiPjwvcGF0aD48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMxODE5M2YiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjMiIGQ9Ik00MC41LDE4LjYxN1YzNi41CWMwLDIuMi0xLjgsNC00LDRoLTI1Yy0yLjIsMC00LTEuOC00LTR2LTEuNzU1Ij48L3BhdGg+PHBhdGggZmlsbD0iIzE4MTkzZiIgZD0iTTI5LjI3MSwzMi4zODljMC42MjksMS4wMjYsMS4zMTIsMi4wMDksMi43NTgsMi4wMDljMS4yMTUsMCwxLjg1My0wLjYwNywxLjg1My0xLjQ0NgljMC0xLjAwNS0wLjY1OS0xLjM2Mi0xLjk5Ni0xLjk0NmwtMC43MzMtMC4zMTRjLTIuMTE1LTAuOTAxLTMuNTIyLTIuMDMxLTMuNTIyLTQuNDE4YzAtMi4xOTksMS42NzUtMy44NzMsNC4yOTQtMy44NzMJYzEuODY0LDAsMy4yMDQsMC42NDksNC4xNywyLjM0OGwtMi4yODMsMS40NjZjLTAuNTAzLTAuOTAxLTEuMDQ1LTEuMjU2LTEuODg3LTEuMjU2Yy0wLjg1OSwwLTEuNDAzLDAuNTQ1LTEuNDAzLDEuMjU2CWMwLDAuODgsMC41NDUsMS4yMzYsMS44MDMsMS43OGwwLjczMywwLjMxNGMyLjQ5MiwxLjA2NywzLjg5OCwyLjE1NiwzLjg5OCw0LjYwNWMwLDIuNjQtMi4wNzQsNC4wODYtNC44NTksNC4wODYJYy0yLjcyMywwLTQuMjctMS4zNzMtNS4xMzEtMy4wNzRMMjkuMjcxLDMyLjM4OXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTgxOTNmIiBkPSJNMTguNjIzLDMyLjQ2NGMwLjQ2NiwwLjgyNywxLjE3NiwxLjQ2MiwyLjE5NSwxLjQ2MmMwLjk3NSwwLDEuNTM3LTAuMzgxLDEuNTM3LTEuODY0VjIyLjRoMy4wNzQJdjEwLjEyOWMwLDMuMDcyLTEuODAxLDQuNDcxLTQuNDMxLDQuNDcxYy0yLjM3NiwwLTQuMDkxLTEuNTkzLTQuNzktMy4wNzRMMTguNjIzLDMyLjQ2NHoiPjwvcGF0aD4KPC9zdmc+" />
                  <p>JavaScript</p>
                </div>

                <div className="skill-react">
                  <img alt="svgImg" className="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8cGF0aCBmaWxsPSIjYzhlZGU2IiBkPSJNODcuMiw1NS42YzAuMy0wLjYsMC42LTEuMywwLjgtMS45YzIuNi03LjgtMS4zLTE3LjEtOS43LTE5LjNjLTAuOS0xMS40LTguOS0xOS4yLTE3LjktMjAuNSBjLTEwLjMtMS41LTE5LjgsNS0yMywxNS41Yy0zLjgtMS4zLTcuNS0xLjItMTEsMC45Yy0xLjYsMC43LTMsMS44LTQuMywzLjJjLTEuOSwyLjEtMy4xLDQuNy0zLjcsNy41Yy0wLjcsMC4xLTEuNSwwLjItMi4yLDAuNSBjLTQsMS40LTYuNiw0LjQtNy4zLDguOWMtMC40LDIuOCwwLjQsNS42LDAuOSw2LjdjMS45LDQuNSw2LjQsNywxMSw2LjNjMC4yLDAsMC42LDAuMSwwLjgsMC4yYzAuMiw3LjEsMy43LDEzLjQsOC45LDE3IGM4LjMsNS44LDE5LDQsMjUuOC0zLjljMi45LDMsNi4zLDQuNCwxMC40LDMuOWM0LTAuNSw3LjEtMi43LDkuNC02LjNjMS4xLDAuMywyLjEsMC43LDMuMSwwLjhjNCwwLjQsNy4zLTEuMiw5LjctNC44IGMwLjEtMC4xLDAuMi0wLjIsMC4zLTAuM2MwLjMtMC44LDAuNy0xLjYsMS0yLjRjMC4yLTEuMiwwLjQtMi40LDAuNC0zLjZDOTAuNyw2MC41LDg5LjQsNTcuNSw4Ny4yLDU1LjZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZkZmNlZiIgZD0iTTQxLjMsMzQuNGMwLDAsMTEuNywwLDExLjgsMGMyLjcsMCw0LjktMi4yLDQuOS00LjljMC0yLjQtMS43LTQuMy0zLjktNC44YzAtMC4yLDAtMC40LDAtMC42IGMwLTIuOC0yLjMtNS4xLTUuMS01LjFjLTEuNywwLTMuMSwwLjgtNCwyYy0wLjItMy4xLTMtNS41LTYuMy01LjFjLTIuNCwwLjMtNC4zLDIuMS00LjgsNC41Yy0wLjEsMC44LTAuMSwxLjUsMCwyLjIgYy0wLjYtMC43LTEuNS0xLjEtMi42LTEuMWMtMS45LDAtMy40LDEuNC0zLjUsMy4zYy0wLjgtMC4yLTEuOC0wLjItMi43LDAuMmMtMS44LDAuNy0zLjEsMi40LTMuMiw0LjRjLTAuMSwyLjgsMi4xLDUuMSw0LjksNS4xIGMwLjIsMCwwLjksMCwxLjEsMGgxMC4yIj48L3BhdGg+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTUzLjEsMzQuOUg0MS4zYy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDExLjhjMi40LDAsNC40LTIsNC40LTQuNGMwLTIuMS0xLjUtMy45LTMuNS00LjMgYy0wLjMtMC4xLTAuNC0wLjMtMC40LTAuNmMwLTAuMiwwLTAuNCwwLTAuNmMwLTIuNS0yLTQuNi00LjYtNC42Yy0xLjQsMC0yLjgsMC43LTMuNiwxLjhjLTAuMSwwLjItMC4zLDAuMi0wLjUsMC4yIGMtMC4yLTAuMS0wLjMtMC4yLTAuNC0wLjRjLTAuMS0xLjQtMC44LTIuNy0xLjgtMy41Yy0xLjEtMC45LTIuNS0xLjMtMy45LTEuMWMtMi4yLDAuMy00LDEuOS00LjQsNC4xYy0wLjEsMC43LTAuMSwxLjMsMCwyIGMwLDAuMi0wLjEsMC40LTAuMywwLjVjLTAuMiwwLjEtMC40LDAuMS0wLjYtMC4xYy0wLjYtMC42LTEuNC0xLTIuMi0xYy0xLjYsMC0yLjksMS4yLTMsMi44YzAsMC4xLTAuMSwwLjMtMC4yLDAuNCBjLTAuMSwwLjEtMC4zLDAuMS0wLjQsMC4xYy0wLjgtMC4yLTEuNi0wLjEtMi40LDAuMmMtMS43LDAuNi0yLjgsMi4yLTIuOSwzLjljMCwxLjIsMC40LDIuNCwxLjIsMy4yYzAuOCwwLjksMiwxLjMsMy4yLDEuM2gxMS4zIGMwLjMsMCwwLjUsMC4yLDAuNSwwLjVzLTAuMiwwLjUtMC41LDAuNUgyNi45Yy0xLjUsMC0yLjktMC42LTMuOS0xLjdjLTEtMS4xLTEuNi0yLjUtMS41LTRjMC4xLTIuMSwxLjUtNC4xLDMuNS00LjggYzAuOC0wLjMsMS42LTAuNCwyLjUtMC4zYzAuNC0xLjgsMi0zLjIsMy45LTMuMmMwLjcsMCwxLjQsMC4yLDEuOSwwLjVjMC0wLjQsMC0wLjgsMC4xLTEuMmMwLjUtMi42LDIuNi00LjYsNS4yLTQuOSBjMS43LTAuMiwzLjMsMC4zLDQuNiwxLjNjMSwwLjgsMS43LDIsMiwzLjJjMS0wLjksMi4zLTEuNCwzLjctMS40YzMuMSwwLDUuNiwyLjUsNS42LDUuNmMwLDAuMSwwLDAuMiwwLDAuMiBjMi4zLDAuNywzLjgsMi44LDMuOCw1LjJDNTguNSwzMi41LDU2LjEsMzQuOSw1My4xLDM0Ljl6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZkZmNlZiIgZD0iTTM4LjUsMjMuN2MtMS44LTAuMS0zLjQsMS4xLTMuNSwyLjhjMCwwLjIsMCwwLjQsMCwwLjZjLTAuMy0wLjQtMC45LTAuNy0xLjUtMC43Yy0xLjEtMC4xLTIsMC42LTIuMiwxLjYgYy0wLjItMC4xLTAuNC0wLjEtMC42LTAuMWMtMS42LTAuMS0yLjksMS0zLDIuNCI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik0yNy44LDMwLjZDMjcuOCwzMC42LDI3LjgsMzAuNiwyNy44LDMwLjZjLTAuMiwwLTAuMy0wLjEtMC4zLTAuM2MwLjEtMS42LDEuNi0yLjgsMy4zLTIuNyBjMC4xLDAsMC4zLDAsMC40LDAuMWMwLjMtMSwxLjMtMS42LDIuNC0xLjZjMC40LDAsMC44LDAuMiwxLjIsMC40YzAsMCwwLDAsMC0wLjFjMC4xLTEuOCwxLjgtMy4yLDMuNy0zYzAuMSwwLDAuMiwwLjEsMC4yLDAuMyBzLTAuMSwwLjMtMC4zLDAuMmMtMS43LTAuMS0zLjEsMS0zLjIsMi42YzAsMC4yLDAsMC40LDAsMC42YzAsMC4xLDAsMC4yLTAuMSwwLjNzLTAuMiwwLTAuMy0wLjFjLTAuMy0wLjQtMC44LTAuNi0xLjMtMC42IGMtMSwwLTEuOCwwLjYtMS45LDEuNGMwLDAuMSwwLDAuMS0wLjEsMC4yYy0wLjEsMC0wLjEsMC4xLTAuMiwwYy0wLjItMC4xLTAuNC0wLjEtMC42LTAuMUMyOS40LDI4LDI4LjEsMjksMjgsMzAuMyBDMjgsMzAuNSwyNy45LDMwLjYsMjcuOCwzMC42eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZGZjZWYiIGQ9Ik01NS4xLDI1LjNjLTEuNy0wLjgtMy43LTAuMi00LjQsMS4zYy0wLjEsMC4yLTAuMiwwLjQtMC4yLDAuNiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik01MC41LDI3LjRDNTAuNSwyNy40LDUwLjUsMjcuNCw1MC41LDI3LjRjLTAuMiwwLTAuMy0wLjItMC4yLTAuM2MwLTAuMiwwLjEtMC40LDAuMi0wLjYgYzAuOC0xLjYsMi45LTIuMiw0LjctMS40YzAuMSwwLjEsMC4yLDAuMiwwLjEsMC4zYy0wLjEsMC4xLTAuMiwwLjItMC4zLDAuMWMtMS42LTAuNy0zLjQtMC4yLTQuMSwxLjFjLTAuMSwwLjItMC4xLDAuMy0wLjIsMC41IEM1MC43LDI3LjMsNTAuNiwyNy40LDUwLjUsMjcuNHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTcuOSw1N2gtMTBjLTAuMywwLTAuNS0wLjItMC41LTAuNVM3LjYsNTYsNy45LDU2aDEwYzAuMywwLDAuNSwwLjIsMC41LDAuNVMxOC4yLDU3LDE3LjksNTd6IE0yMS4zLDU2LjUgYzAtMC4zLTAuMi0wLjUtMC41LTAuNWgtMS40Yy0wLjMsMC0wLjUsMC4yLTAuNSwwLjVzMC4yLDAuNSwwLjUsMC41aDEuNEMyMS4xLDU3LDIxLjMsNTYuOCwyMS4zLDU2LjV6IE0yNS4zLDU2LjUgYzAtMC4zLTAuMi0wLjUtMC41LTAuNWgtMi41Yy0wLjMsMC0wLjUsMC4yLTAuNSwwLjVTMjIsNTcsMjIuMyw1N2gyLjVDMjUuMSw1NywyNS4zLDU2LjgsMjUuMyw1Ni41eiBNMjUuMyw1OC41IGMwLTAuMy0wLjItMC41LTAuNS0wLjVoLTkuNmMtMC4zLDAtMC41LDAuMi0wLjUsMC41czAuMiwwLjUsMC41LDAuNWg5LjZDMjUuMSw1OSwyNS4zLDU4LjgsMjUuMyw1OC41eiBNMTQsNTguNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC0wLjZjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVoMC42QzEzLjgsNTksMTQsNTguOCwxNCw1OC41eiBNMTEuNiw1OC41IGMwLTAuMy0wLjItMC41LTAuNS0wLjVIOS43Yy0wLjMsMC0wLjUsMC4yLTAuNSwwLjVTOS40LDU5LDkuNyw1OWgxLjVDMTEuNCw1OSwxMS42LDU4LjgsMTEuNiw1OC41eiBNMjAuNyw1NC41IGMwLTAuMy0wLjItMC41LTAuNS0wLjVoLTVjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVoNUMyMC41LDU1LDIwLjcsNTQuOCwyMC43LDU0LjV6IE0yMC43LDUyLjUgYzAtMC4zLTAuMi0wLjUtMC41LTAuNUgxOWMtMC4zLDAtMC41LDAuMi0wLjUsMC41UzE4LjcsNTMsMTksNTNoMS4zQzIwLjUsNTMsMjAuNyw1Mi44LDIwLjcsNTIuNXogTTE3LjUsNjAuNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC0xLjhjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVIMTdDMTcuMyw2MSwxNy41LDYwLjgsMTcuNSw2MC41eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03MS43LDI1aC0xMGMtMC4zLDAtMC41LTAuMi0wLjUtMC41czAuMi0wLjUsMC41LTAuNWgxMGMwLjMsMCwwLjUsMC4yLDAuNSwwLjVTNzIsMjUsNzEuNywyNXogTTc1LjEsMjQuNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC0xLjRjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVoMS40Qzc0LjksMjUsNzUuMSwyNC44LDc1LjEsMjQuNXogTTc5LjIsMjQuNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC0yLjVjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVoMi41Qzc5LDI1LDc5LjIsMjQuOCw3OS4yLDI0LjV6IE03Ny4yLDIwLjUgYzAtMC4zLTAuMi0wLjUtMC41LTAuNUg2N2MtMC4zLDAtMC41LDAuMi0wLjUsMC41UzY2LjgsMjEsNjcsMjFoOS42Qzc2LjksMjEsNzcuMiwyMC44LDc3LjIsMjAuNXogTTY1LjgsMjAuNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC0wLjZjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVoMC42QzY1LjYsMjEsNjUuOCwyMC44LDY1LjgsMjAuNXogTTYzLjQsMjAuNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC0xLjVjLTAuMywwLTAuNSwwLjItMC41LDAuNXMwLjIsMC41LDAuNSwwLjVoMS41QzYzLjIsMjEsNjMuNCwyMC44LDYzLjQsMjAuNXogTTc0LjYsMjIuNSBjMC0wLjMtMC4yLTAuNS0wLjUtMC41aC01Yy0wLjMsMC0wLjUsMC4yLTAuNSwwLjVzMC4yLDAuNSwwLjUsMC41aDVDNzQuNCwyMyw3NC42LDIyLjgsNzQuNiwyMi41eiBNNzQuNiwyMC41IGMwLTAuMy0wLjItMC41LTAuNS0wLjVoLTEuM2MtMC4zLDAtMC41LDAuMi0wLjUsMC41czAuMiwwLjUsMC41LDAuNWgxLjNDNzQuNCwyMSw3NC42LDIwLjgsNzQuNiwyMC41eiBNNjguMSwyMi41IGMwLTAuMy0wLjItMC41LTAuNS0wLjVoLTEuOGMtMC4zLDAtMC41LDAuMi0wLjUsMC41czAuMiwwLjUsMC41LDAuNWgxLjhDNjcuOSwyMyw2OC4xLDIyLjgsNjguMSwyMi41eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM3N2NiZDIiIGQ9Ik01Miw2My4xYy0xNC44LDAtMjYtNS4yLTI2LTEyLjFzMTEuMi0xMi4xLDI2LTEyLjFjMTQuOCwwLDI2LDUuMiwyNiwxMi4xUzY2LjgsNjMuMSw1Miw2My4xeiBNNTIsNDIuNSBjLTEzLjMsMC0yMi41LDQuNS0yMi41LDguNXM5LjMsOC41LDIyLjUsOC41Uzc0LjUsNTUsNzQuNSw1MVM2NS4zLDQyLjUsNTIsNDIuNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjNDcyYjI5IiBkPSJNNTIsNjMuOGMtMTUuMiwwLTI2LjctNS41LTI2LjctMTIuOFMzNi44LDM4LjIsNTIsMzguMlM3OC43LDQzLjcsNzguNyw1MVM2Ny4yLDYzLjgsNTIsNjMuOHogTTUyLDM5LjYgYy0xNC4yLDAtMjUuMyw1LTI1LjMsMTEuNFMzNy44LDYyLjQsNTIsNjIuNHMyNS4zLTUsMjUuMy0xMS40UzY2LjIsMzkuNiw1MiwzOS42eiBNNTIsNjAuMmMtMTMuOSwwLTIzLjItNC44LTIzLjItOS4yIHM5LjMtOS4yLDIzLjItOS4yczIzLjIsNC44LDIzLjIsOS4yUzY1LjksNjAuMiw1Miw2MC4yeiBNNTIsNDMuMmMtMTMuNSwwLTIxLjgsNC41LTIxLjgsNy44czguMyw3LjgsMjEuOCw3LjhzMjEuOC00LjUsMjEuOC03LjggUzY1LjUsNDMuMiw1Miw0My4yeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM3N2NiZDIiIGQ9Ik00Mi4zLDc0LjRjLTEuMiwwLTIuMi0wLjMtMy4yLTAuOEMzMy40LDcwLjIsMzQuNiw1OCw0Miw0NS4yYzUuMS05LDEyLTE1LjgsMTcuNS0xNy4yYzItMC41LDMuOS0wLjQsNS40LDAuNSBjNS43LDMuMyw0LjUsMTUuNS0yLjksMjguNGMtNS4xLDktMTIsMTUuOC0xNy41LDE3LjJDNDMuNyw3NC4zLDQzLDc0LjQsNDIuMyw3NC40eiBNNjEuNywzMS4xYy0wLjQsMC0wLjksMC4xLTEuMywwLjIgYy00LjYsMS4yLTEwLjgsNy41LTE1LjQsMTUuNmMtNi40LDExLjItNy41LDIxLjgtNC4xLDIzLjdjMC43LDAuNCwxLjYsMC41LDIuOCwwLjJjNC42LTEuMiwxMC44LTcuNSwxNS40LTE1LjYgYzYuNC0xMS4yLDcuNS0yMS44LDQuMS0yMy43QzYyLjgsMzEuMiw2Mi4zLDMxLjEsNjEuNywzMS4xeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik00Mi4zLDc1LjFjLTEuMywwLTIuNS0wLjMtMy41LTAuOWMtNi0zLjUtNC45LTE2LjIsMi42LTI5LjRjNS4yLTkuMiwxMi4zLTE2LjEsMTcuOS0xNy42IGMyLjItMC42LDQuMy0wLjQsNS45LDAuNmM2LDMuNSw0LjksMTYuMi0yLjYsMjkuNGMtNS4yLDkuMi0xMi4zLDE2LjEtMTcuOSwxNy42QzQzLjksNzUsNDMuMSw3NS4xLDQyLjMsNzUuMXogTTYxLjcsMjguMyBjLTAuNywwLTEuMywwLjEtMi4xLDAuM2MtNS4zLDEuNC0xMiw4LjEtMTcuMSwxNi45Yy03LDEyLjMtOC40LDI0LjQtMy4xLDI3LjVjMS4zLDAuOCwzLDAuOSw0LjksMC40YzUuMy0xLjQsMTItOC4xLDE3LjEtMTYuOSBjNy0xMi4zLDguNC0yNC40LDMuMS0yNy41QzYzLjcsMjguNSw2Mi44LDI4LjMsNjEuNywyOC4zeiBNNDIuMyw3MS42Yy0wLjcsMC0xLjMtMC4xLTEuOC0wLjRjLTQuMS0yLjQtMi4zLTEzLjksMy45LTI0LjcgYzQuNy04LjMsMTEuMS0xNC43LDE1LjgtMTUuOWMxLjMtMC40LDIuNC0wLjMsMy4zLDAuMmM0LjEsMi40LDIuMywxMy45LTMuOSwyNC43Yy00LjcsOC4zLTExLjEsMTQuNy0xNS44LDE1LjkgQzQzLjMsNzEuNiw0Mi43LDcxLjYsNDIuMyw3MS42eiBNNjEuNywzMS44Yy0wLjMsMC0wLjcsMC4xLTEuMiwwLjJjLTQuNCwxLjItMTAuNCw3LjMtMTUsMTUuM2MtNi42LDExLjYtNywyMS4yLTQuNCwyMi44IGMwLjUsMC4zLDEuMywwLjMsMi4yLDAuMWM0LjQtMS4yLDEwLjQtNy4zLDE1LTE1LjNjNi42LTExLjYsNy0yMS4yLDQuNC0yMi44QzYyLjUsMzEuOSw2Mi4xLDMxLjgsNjEuNywzMS44eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM3N2NiZDIiIGQ9Ik02MS43LDc0LjRjLTAuNywwLTEuNS0wLjEtMi4yLTAuM0M1NCw3Mi42LDQ3LjEsNjUuOCw0Miw1Ni44Yy03LjMtMTIuOS04LjYtMjUuMS0yLjktMjguNCBjMS41LTAuOSwzLjQtMS4xLDUuNC0wLjVDNTAsMjkuNCw1Ni45LDM2LjIsNjIsNDUuMmM3LjMsMTIuOSw4LjYsMjUuMSwyLjksMjguNEM2NCw3NC4xLDYyLjksNzQuNCw2MS43LDc0LjR6IE00Mi4zLDMxLjEgYy0wLjUsMC0xLDAuMS0xLjQsMC4zYy0zLjMsMS45LTIuMywxMi41LDQuMSwyMy43YzQuNiw4LjEsMTAuOCwxNC40LDE1LjQsMTUuNmMxLjEsMC4zLDIuMSwwLjMsMi44LTAuMmMzLjMtMS45LDIuMy0xMi41LTQuMS0yMy43IGMtNC42LTguMS0xMC44LTE0LjQtMTUuNC0xNS42QzQzLjEsMzEuMSw0Mi43LDMxLjEsNDIuMywzMS4xeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik02MS43LDc1LjFjLTAuOCwwLTEuNi0wLjEtMi40LTAuM2MtNS43LTEuNS0xMi43LTguNC0xNy45LTE3LjZjLTcuNy0xMy40LTguOC0yNS44LTIuNi0yOS40IGMxLjctMSwzLjctMS4yLDUuOS0wLjZjNS43LDEuNSwxMi43LDguNCwxNy45LDE3LjZjNy41LDEzLjIsOC43LDI1LjgsMi42LDI5LjRDNjQuMiw3NC44LDYzLDc1LjEsNjEuNyw3NS4xeiBNNDIuMywyOC4zIGMtMSwwLTIsMC4yLTIuOCwwLjdjLTUuMywzLjEtMy45LDE1LjEsMy4xLDI3LjVjNSw4LjksMTEuOCwxNS41LDE3LjEsMTYuOWMxLjgsMC41LDMuNSwwLjMsNC45LTAuNGM1LjMtMy4xLDMuOS0xNS4xLTMuMS0yNy41IGMtNS04LjktMTEuOC0xNS41LTE3LjEtMTYuOUM0My42LDI4LjQsNDIuOSwyOC4zLDQyLjMsMjguM3ogTTYxLjcsNzEuNmMtMC41LDAtMS0wLjEtMS41LTAuMmMtNC44LTEuMy0xMS4xLTcuNy0xNS44LTE1LjkgYy02LjEtMTAuOC03LjktMjIuMy0zLjktMjQuN2MwLjktMC41LDItMC42LDMuMy0wLjJjNC44LDEuMywxMS4xLDcuNywxNS44LDE1LjljNi4xLDEwLjgsNy45LDIyLjMsMy45LDI0LjcgQzYzLDcxLjUsNjIuNCw3MS42LDYxLjcsNzEuNnogTTQyLjMsMzEuOGMtMC40LDAtMC44LDAuMS0xLjEsMC4zYy0yLjYsMS41LTIuMiwxMS4yLDQuNCwyMi44YzQuNSw4LDEwLjYsMTQuMSwxNSwxNS4zIGMxLDAuMywxLjcsMC4yLDIuMi0wLjFjMi42LTEuNSwyLjItMTEuMi00LjQtMjIuOGMtNC41LTgtMTAuNi0xNC4xLTE1LTE1LjNDNDMsMzEuOCw0Mi42LDMxLjgsNDIuMywzMS44eiI+PC9wYXRoPjxjaXJjbGUgY3g9IjUyIiBjeT0iNTEiIHI9IjUuNSIgZmlsbD0iIzc3Y2JkMiI+PC9jaXJjbGU+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTUyLDU3Yy0zLjMsMC02LTIuNy02LTZzMi43LTYsNi02czYsMi43LDYsNlM1NS4zLDU3LDUyLDU3eiBNNTIsNDZjLTIuOCwwLTUsMi4yLTUsNXMyLjIsNSw1LDVzNS0yLjIsNS01IFM1NC44LDQ2LDUyLDQ2eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik01Miw1NC41Yy0wLjEsMC0wLjMtMC4xLTAuMy0wLjNTNTEuOSw1NCw1Miw1NGMwLjMsMCwwLjctMC4xLDEtMC4yYzAuNC0wLjIsMC45LTAuNCwxLjItMC44IGMwLjEtMC4xLDAuMy0wLjEsMC40LDBjMC4xLDAuMSwwLjEsMC4zLDAsMC40Yy0wLjQsMC40LTAuOSwwLjctMS40LDAuOUM1Mi44LDU0LjQsNTIuNCw1NC41LDUyLDU0LjV6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTU0LjksNTIuN2MwLDAtMC4xLDAtMC4xLDBjLTAuMS0wLjEtMC4yLTAuMi0wLjEtMC4zYzAuMi0wLjQsMC4zLTAuOSwwLjMtMS4zYzAtMS4yLTAuNi0yLjItMS43LTIuNyBjLTAuMS0wLjEtMC4yLTAuMi0wLjEtMC4zYzAuMS0wLjEsMC4yLTAuMiwwLjMtMC4xYzEuMiwwLjYsMiwxLjgsMiwzLjFjMCwwLjUtMC4xLDEuMS0wLjQsMS41QzU1LjEsNTIuNiw1NSw1Mi43LDU0LjksNTIuN3oiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTUwLjIsNDguNWMtMC4xLDAtMC4yLDAtMC4yLTAuMWMtMC4xLTAuMSwwLTAuMywwLjEtMC4zYzAuNi0wLjQsMS4yLTAuNiwxLjktMC42YzAuMSwwLDAuMywwLjEsMC4zLDAuMyBTNTIuMSw0OCw1Miw0OGMtMC42LDAtMS4xLDAuMi0xLjYsMC41QzUwLjMsNDguNSw1MC4zLDQ4LjUsNTAuMiw0OC41eiI+PC9wYXRoPjwvZz48Zz48cGF0aCBmaWxsPSIjNDcyYjI5IiBkPSJNNTUuMywzOC43Yy0wLjEsMC0wLjEsMC0wLjItMC4xYy0zLjQtNC4yLTYuNy03LTkuNi04LjNjLTAuMS0wLjEtMC4yLTAuMi0wLjEtMC4zYzAuMS0wLjEsMC4yLTAuMiwwLjMtMC4xIGMzLDEuMyw2LjQsNC4xLDkuOCw4LjVjMC4xLDAuMSwwLjEsMC4zLDAsMC40QzU1LjQsMzguNyw1NS4zLDM4LjcsNTUuMywzOC43eiI+PC9wYXRoPjwvZz48Zz48cGF0aCBmaWxsPSIjNDcyYjI5IiBkPSJNMzkuNSwzMC40Yy0wLjEsMC0wLjEsMC0wLjItMC4xYy0wLjEtMC4xLTAuMS0wLjMsMC0wLjRjMC4zLTAuMiwxLjctMS4yLDQuNC0wLjdjMC4xLDAsMC4yLDAuMiwwLjIsMC4zIGMwLDAuMS0wLjIsMC4yLTAuMywwLjJjLTIuNS0wLjUtMy45LDAuNC00LDAuNkMzOS42LDMwLjMsMzkuNSwzMC40LDM5LjUsMzAuNHoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTczLjYsNTYuMWMtMC4xLDAtMC4xLDAtMC4yLTAuMWMtMC4xLTAuMS0wLjEtMC4zLDAtMC40YzIuMi0xLjgsMy0zLjgsMi41LTYuMWMwLTAuMSwwLjEtMC4zLDAuMi0wLjMgYzAuMSwwLDAuMywwLjEsMC4zLDAuMmMwLjUsMi40LTAuNCw0LjctMi43LDYuNkM3My43LDU2LjEsNzMuNyw1Ni4xLDczLjYsNTYuMXoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTY5LjYsNTguM2MtMC4xLDAtMC4yLTAuMS0wLjItMC4yYzAtMC4xLDAtMC4zLDAuMi0wLjNjMCwwLDEuMy0wLjQsMi43LTEuM2MwLjEtMC4xLDAuMywwLDAuMywwLjEgYzAuMSwwLjEsMCwwLjMtMC4xLDAuM0M3MSw1Ny45LDY5LjcsNTguMyw2OS42LDU4LjNDNjkuNyw1OC4zLDY5LjYsNTguMyw2OS42LDU4LjN6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik00MS45LDczQzQxLjksNzMsNDEuOSw3Myw0MS45LDczYy0yLjUtMC4xLTQuMS0xLjktNC43LTUuM2MwLTAuMSwwLjEtMC4zLDAuMi0wLjNjMC4xLDAsMC4zLDAuMSwwLjMsMC4yIGMwLjUsMy4yLDEuOSw0LjgsNC4yLDQuOWMwLjEsMCwwLjIsMC4xLDAuMiwwLjNDNDIuMSw3Mi44LDQyLDczLDQxLjksNzN6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik0zNy4zLDY1LjZjLTAuMSwwLTAuMi0wLjEtMC4zLTAuMmMtMC4xLTIuMSwwLjItNCwwLjMtNC4yYzAtMC4xLDAuMi0wLjIsMC4zLTAuMmMwLjEsMCwwLjIsMC4yLDAuMiwwLjMgYzAsMC4xLTAuMywxLjktMC4zLDQuMUMzNy41LDY1LjUsMzcuNCw2NS42LDM3LjMsNjUuNkMzNy4zLDY1LjYsMzcuMyw2NS42LDM3LjMsNjUuNnoiPjwvcGF0aD48L2c+PGc+PHBhdGggZmlsbD0iI2ZkZmNlZiIgZD0iTTc5LjIsNjQuM2MxLjksMCwzLjUsMCwzLjUsMGMyLjEsMCwzLjgtMS43LDMuOC0zLjdjMC0xLjgtMS4zLTMuMy0zLTMuN2MwLTAuMiwwLTAuMywwLTAuNSBjMC0yLjEtMS44LTMuOS00LTMuOWMtMS4zLDAtMi40LDAuNi0zLjIsMS41Yy0wLjItMi40LTIuNC00LjItNC45LTMuOWMtMS45LDAuMi0zLjQsMS42LTMuNywzLjRjLTAuMSwwLjYtMC4xLDEuMSwwLDEuNyBjLTAuNS0wLjUtMS4yLTAuOS0yLTAuOWMtMS40LDAtMi42LDEuMS0yLjcsMi41Yy0wLjctMC4xLTEuNC0wLjEtMi4xLDAuMWMtMS40LDAuNS0yLjUsMS45LTIuNSwzLjRjLTAuMSwyLjEsMS43LDMuOSwzLjgsMy45IGMwLjIsMCwwLjcsMCwwLjksMGg3LjkgTTcyLjcsNjQuM2gwLjQiPjwvcGF0aD48cGF0aCBmaWxsPSIjNDcyYjI5IiBkPSJNODIuNyw2NC44aC0zLjVjLTAuMywwLTAuNS0wLjItMC41LTAuNXMwLjItMC41LDAuNS0wLjVoMy41YzEuOCwwLDMuMy0xLjUsMy4zLTMuMmMwLTEuNS0xLjEtMi45LTIuNi0zLjIgYy0wLjMtMC4xLTAuNC0wLjMtMC40LTAuNmMwLTAuMSwwLTAuMywwLTAuNGMwLTEuOS0xLjYtMy40LTMuNS0zLjRjLTEuMSwwLTIuMSwwLjUtMi44LDEuM2MtMC4xLDAuMi0wLjMsMC4yLTAuNSwwLjIgYy0wLjItMC4xLTAuMy0wLjItMC40LTAuNGMtMC4xLTEtMC42LTEuOS0xLjQtMi42Yy0wLjgtMC43LTEuOS0xLTMtMC45Yy0xLjYsMC4yLTMsMS40LTMuMywzYy0wLjEsMC41LTAuMSwxLDAsMS41IGMwLDAuMi0wLjEsMC40LTAuMywwLjVjLTAuMiwwLjEtMC40LDAuMS0wLjYtMC4xYy0wLjQtMC41LTEtMC43LTEuNi0wLjdjLTEuMiwwLTIuMSwwLjktMi4yLDJjMCwwLjEtMC4xLDAuMy0wLjIsMC40IGMtMC4xLDAuMS0wLjMsMC4xLTAuNCwwLjFjLTAuNi0wLjEtMS4yLTAuMS0xLjgsMC4xYy0xLjMsMC41LTIuMSwxLjYtMi4yLDIuOWMwLDAuOSwwLjMsMS43LDAuOSwyLjNjMC42LDAuNywxLjUsMSwyLjQsMWg4LjggYzAuMywwLDAuNSwwLjIsMC41LDAuNXMtMC4yLDAuNS0wLjUsMC41aC04LjhjLTEuMiwwLTIuMy0wLjUtMy4xLTEuM2MtMC44LTAuOC0xLjItMS45LTEuMi0zLjFjMC4xLTEuNywxLjItMy4yLDIuOC0zLjggYzAuNi0wLjIsMS4yLTAuMywxLjktMC4yYzAuMy0xLjQsMS42LTIuNCwzLjEtMi40YzAuNSwwLDEsMC4xLDEuNCwwLjNjMC0wLjIsMC0wLjUsMC4xLTAuN2MwLjQtMiwyLjEtMy42LDQuMi0zLjggYzEuNC0wLjIsMi43LDAuMiwzLjcsMS4xYzAuNywwLjYsMS4zLDEuNCwxLjUsMi4zYzAuOC0wLjYsMS44LTEsMi44LTFjMi41LDAsNC41LDIsNC41LDQuNGMwLDAsMCwwLjEsMCwwLjFjMS44LDAuNiwzLDIuMiwzLDQgQzg3LDYyLjksODUuMSw2NC44LDgyLjcsNjQuOHogTTczLjEsNjQuOGgtMC40Yy0wLjMsMC0wLjUtMC4yLTAuNS0wLjVzMC4yLTAuNSwwLjUtMC41aDAuNGMwLjMsMCwwLjUsMC4yLDAuNSwwLjUgUzczLjMsNjQuOCw3My4xLDY0Ljh6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iIzQ3MmIyOSIgZD0iTTgxLDU5QzgxLDU5LDgxLDU5LDgxLDU5Yy0wLjIsMC0wLjMtMC4yLTAuMi0wLjNjMC0wLjIsMC4xLTAuMywwLjItMC41YzAuNi0xLjIsMi4zLTEuNywzLjctMSBjMC4xLDAuMSwwLjIsMC4yLDAuMSwwLjNjLTAuMSwwLjEtMC4yLDAuMi0wLjMsMC4xYy0xLjItMC42LTIuNi0wLjItMy4xLDAuOGMtMC4xLDAuMS0wLjEsMC4yLTAuMSwwLjRDODEuMiw1OC45LDgxLjEsNTksODEsNTl6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGZpbGw9IiM0NzJiMjkiIGQ9Ik03NS45LDY0LjhoLTEuMWMtMC4zLDAtMC41LTAuMi0wLjUtMC41czAuMi0wLjUsMC41LTAuNWgxLjFjMC4zLDAsMC41LDAuMiwwLjUsMC41Uzc2LjEsNjQuOCw3NS45LDY0Ljh6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+" />
                  <p>ReactJS</p>
                </div>

                <div className="skill-sql">
                  <img src="data:image/png;base64,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" alt="svgImg" className="svgImg"/>
                  <p>MySQL</p>
                </div>

               
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};