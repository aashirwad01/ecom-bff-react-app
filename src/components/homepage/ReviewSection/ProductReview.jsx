import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getReviewsAll } from "../../../services/ServiceWorker";

const ReviewDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const ReviewBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  gap: 30px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const HeroHeading = styled.h1(() => ({
  fontFamily: "Titan One",
  fontSize: "2rem",
  fontWeight: "bold",
  color: "#D41442",
}));

const ReviewBoxDiv = styled.div`
  background: url("testimonialquotes.png");
  background-repeat: no-repeat;
  background-position: top -10px left -10px;
  background-size: 100px 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: all 1s;
`;
const Text = styled.p`
  color: "black";
  font-size: 1.2rem;
  font-weight: bold;

  text-align: left;
  line-break: strict;
`;

const TextUser = styled.p`
  color: #d41442;
  font-size: 1rem;
  font-weight: bold;

  text-align: left;
  line-break: strict;
`;

const reviewText = [
  {
    text: `It's freshly made ice cream. The best place to have ice cream in kharghar. The quality is good and worth its price . Hope the price don't increase`,
  },
  {
    text: `The Ice Creams are fresh and really tasty.
        The staff is courteous too. Amidst the array of flavors, the season specials are THE best...`,
  },
  {
    text: `The ice cream is truly incredible. You can sit inside depending on the time of day but it tends to get packed pretty often and early. `,
  },
  {
    text: `This is some of the best ice cream found in India. Everyone in our group loved it.`,
  },
];

const getReviews = async (e) => {
  const response = await getReviewsAll();

  return response?.data;
};
export const ProductReview = () => {
  const [imagecarousel, setimagecarousel] = useState(0);
  const [reviews, setReviews] = useState([]);
  var user = localStorage.getItem("user");
  var userid = localStorage.getItem("userid");
  var isSeller = JSON.parse(localStorage.getItem("seller"));
  const [extra, setExtra] = useState(0);

  function carousel() {
    setimagecarousel((old) => old + 1);
    if (imagecarousel == 3) {
      setimagecarousel(0);
    }
  }

  useEffect(() => {
    async function getData() {
      await getReviews().then((res) => {
        setReviews(res);
      });
    }

    getData();

    setExtra((old) => old + 1);
    console.log(reviews[0]?.rating);
  }, []);

  useEffect(() => {
    user = localStorage.getItem("user");
    userid = localStorage.getItem("userid");
    isSeller = localStorage.getItem("seller");
  }, [extra]);

  return (
    <>
      <ReviewDiv>
        <ReviewBox>
          <ReviewBoxDiv>
            <Text>{reviews[imagecarousel]?.rating}</Text>
            {/* <TextUser>{user?.substring(0, user.indexOf("@")).toUpperCase()}</TextUser> */}
            <HeroHeading onClick={() => carousel()}>...</HeroHeading>
          </ReviewBoxDiv>
        </ReviewBox>
      </ReviewDiv>
    </>
  );
};
