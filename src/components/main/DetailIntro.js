import styled from 'styled-components';
import Detail_1 from '../assets/Detail_1.png';
import Detail_2 from '../assets/Detail_2.png';
import Detail_3 from '../assets/Detail_3.png';
import Detail_4 from '../assets/Detail_4.png';
import addBtn from '../assets/add.png';
import charactor from '../assets/charactor.png';

const DetailCardContainer = styled.section`
  width: 100%;
  display: flex;
  position: relative;
`;

const DetailCardLeftside = styled.div`
  display: flex;
  flex-direction: column;
  margin: 96px 0 0 30px;
  position: relative;
`;

const DetailCardRightside = styled.div`
  display: flex;
  flex-direction: column;
  margin: 301px 0 0 0;
  position: relative;
`;

const DetailCard = styled.img`
  width: 100%;
  margin: 0;
`;

const CardText = styled.text`
  color: black;
  font-family: 'GmarketSansMedium';
  font-size: 40px;
  font-weight: 400;
  position: absolute;
`;

const CardTextPoint = styled.span`
  color: #f44420;
  font-family: 'GmarketSansMedium';
  font-size: 22px;
  font-weight: 400;
`;

const AddBtn = styled.img`
  height: 43px;
  width: 43px;
  position: absolute;
  cursor: pointer;
`;

const Charactor = styled.img`
  height: 300px;
  width: 300px;
  position: absolute;
  right: 90px;
  top: 130px;
  z-index: 1;
`;

const DetailIntro = () => {
  return (
    <>
      <DetailCardContainer>
        <DetailCardLeftside>
          <DetailCard src={Detail_1} />
          <AddBtn src={addBtn} style={{ marginTop: '65px', marginLeft: '539px' }} />
          <CardText style={{ marginTop: '65px', marginLeft: '90px' }}>
            <CardTextPoint>오직 구독으로 누리는 혜택</CardTextPoint>
            <br />
            최대 60% 할인 받고
            <br />
            평생 무료배송 받아요!
          </CardText>
          <DetailCard src={Detail_3} />
          <AddBtn src={addBtn} style={{ marginTop: '770px', marginLeft: '539px' }} />
          <CardText style={{ marginTop: '770px', marginLeft: '90px' }}>
            <CardTextPoint>매번 다른 라면으로 먹어봐야죠!</CardTextPoint>
            <br />
            배송 받을 라면을
            <br />
            언제든지 변경해요!
          </CardText>
        </DetailCardLeftside>
        <Charactor src={charactor} />
        <DetailCardRightside>
          <DetailCard src={Detail_2} />
          <CardText style={{ marginTop: '65px', marginLeft: '90px' }}>
            <CardTextPoint>당연히 매달 안 드셔도 돼요!</CardTextPoint>
            <br />
            라면 수량과 배송주기도
            <br />
            나에게 맞게 선택해요!
          </CardText>
          <DetailCard src={Detail_4} />
          <AddBtn src={addBtn} style={{ marginTop: '770px', marginLeft: '539px' }} />
          <CardText style={{ marginTop: '770px', marginLeft: '90px' }}>
            <CardTextPoint>해외라면을 포함한 100여 종 인기라면!</CardTextPoint>
            <br />
            즐겨먹던 라면부터
            <br />
            궁금했던 라면까지 한 번에
          </CardText>
        </DetailCardRightside>
      </DetailCardContainer>
    </>
  );
};

export default DetailIntro;
