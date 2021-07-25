import { Title, Description, Table, Header, Row, HeadCeil, Ceil, Footer } from "./styles/additional-info";

export default function SizeInfo() {
  return (
    <>
      <Title>Как правильно выбрать размер:</Title>
      <Description>
        <p>Выбираете вашу футболку/свитшот/худи и замеряете метром</p>
        <p>
          Ширина на размерной сетке указана буквой А, меряете под подмышками, от шва до шва, как показано красной
          линией.
        </p>
        <p>
          Длина на размерной сетке указана буквой B, меряете от горловины и до самого низа вещи, как показано красной
          линией.
        </p>
        <p>
          Длина рукава на размерной сетке указана буквой С, если это свитшот или худи, меряете от горловины и до самого
          конца рукава, если футболка, то как показано красной линией.
        </p>
        <p>
          Далее сравниваете ваши показатели с нашей таблицей размеров, прикинув плюс/минус пару сантиметров и выбираете
          размер.
        </p>
      </Description>
      <Table>
        <Header>
          <Row>
            <HeadCeil>(см)</HeadCeil>
            <HeadCeil>A</HeadCeil>
            <HeadCeil>B</HeadCeil>
            <HeadCeil>C</HeadCeil>
          </Row>
        </Header>
        <tbody>
          <Row>
            <Ceil>XS</Ceil>
            <Ceil>45</Ceil>
            <Ceil>65</Ceil>
            <Ceil>21</Ceil>
          </Row>
          <Row>
            <Ceil>S</Ceil>
            <Ceil>48</Ceil>
            <Ceil>67</Ceil>
            <Ceil>21</Ceil>
          </Row>
          <Row>
            <Ceil>M</Ceil>
            <Ceil>50</Ceil>
            <Ceil>68</Ceil>
            <Ceil>22</Ceil>
          </Row>
          <Row>
            <Ceil>L</Ceil>
            <Ceil>52</Ceil>
            <Ceil>68</Ceil>
            <Ceil>22</Ceil>
          </Row>
          <Row>
            <Ceil>XL</Ceil>
            <Ceil>54</Ceil>
            <Ceil>69</Ceil>
            <Ceil>23</Ceil>
          </Row>
          <Row>
            <Ceil>XXL</Ceil>
            <Ceil>57</Ceil>
            <Ceil>70</Ceil>
            <Ceil>24</Ceil>
          </Row>
        </tbody>
      </Table>
      <Footer>Допустимо отклонение в длину и ширину (±) на 1-2 см.</Footer>
    </>
  );
}
