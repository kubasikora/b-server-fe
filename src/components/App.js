import React, { Component } from "react";
import Header from "./Header";
import BicycleStationsFetcher from "../containers/BicycleStationsFetcher";
import { Grid, Row, Col, Panel} from "react-bootstrap";
import Footer from '../components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Grid fluid={true}>
          <Row>
            <Col sm={6} md={4}>
              <BicycleStationsFetcher />
            </Col>
            <Col sm={6} md={8}>
				<Panel>
					<Panel.Body>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non lacus efficitur, dignissim ipsum at, ornare diam. Suspendisse ligula odio, maximus quis porta sit amet, tempor sed ante. Fusce congue dui vitae nisl bibendum, luctus ornare tellus facilisis. Sed vitae tellus eget quam ornare auctor sed euismod erat. Pellentesque ornare vel ex ut placerat. Maecenas in sodales neque, sit amet rhoncus augue. Maecenas eu sapien eu odio consequat commodo eget nec lorem. Duis eu diam at dolor efficitur suscipit eu sed elit. In imperdiet, sem vel viverra cursus, mauris metus ornare velit, id blandit massa neque non elit. Curabitur tempor, justo ac faucibus fermentum, nibh risus gravida quam, eget pellentesque dui erat ut mauris. Phasellus lacinia venenatis mi. Etiam velit lectus, vehicula et massa eget, luctus efficitur nunc.<br/><br/>
Cras vitae consequat orci, sit amet rhoncus tellus. In ornare purus venenatis tortor interdum lobortis. Integer eget tellus ac dolor molestie sodales ac vitae dolor. Duis sollicitudin suscipit dapibus. Nam accumsan dignissim velit eu tincidunt. Vivamus id nibh mi. Pellentesque augue turpis, ornare ac mi a, efficitur congue lectus. Nam eleifend auctor euismod. Fusce mauris ex, dignissim vitae efficitur nec, egestas vel magna. Fusce sed sapien porta quam gravida efficitur.<br/><br/>

Donec nec felis eu dolor aliquet interdum vel sit amet ante. Mauris eget magna libero. Ut semper risus vitae arcu tincidunt, consectetur iaculis ex congue. Aliquam finibus volutpat purus, sit amet auctor ipsum dignissim ut. Nunc vitae ultrices lorem. Fusce tempor imperdiet ante et facilisis. Donec eu nisl a urna bibendum tincidunt in sit amet libero. Donec neque sem, accumsan quis ultricies sed, porttitor vitae ex. Nunc vel tempor nulla. Vestibulum tincidunt dolor ut hendrerit consectetur. Cras consectetur, urna vitae egestas porttitor, velit odio congue turpis, at tristique risus enim eget dolor. Nulla quis feugiat lorem. Nullam quis feugiat est. In sem justo, porttitor ac vestibulum vitae, aliquam at erat. Cras vel varius ipsum. Aenean diam quam, tempor ac maximus vestibulum, malesuada at odio.<br/><br/>

Vivamus auctor lorem vitae enim faucibus, placerat consectetur enim venenatis. Donec faucibus, arcu vel porttitor venenatis, sapien tortor efficitur orci, nec elementum ante erat vitae mi. Praesent tincidunt auctor egestas. Nullam scelerisque, mauris eu ultrices placerat, tellus erat consequat diam, vitae dignissim libero nisi non sapien. Aenean aliquet malesuada hendrerit. Cras mauris leo, tempus interdum nunc nec, feugiat porttitor est. Proin at nisl mi. Donec ac mattis ex.<br/><br/>

Quisque placerat molestie metus fringilla vestibulum. Duis at interdum ex. Nam imperdiet tristique laoreet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer luctus volutpat felis, vitae pellentesque metus ultricies vel. Proin congue cursus ex sit amet efficitur. Morbi vel facilisis justo. Fusce ut ullamcorper lectus. Ut eget justo facilisis, viverra ex convallis, pellentesque ipsum. Vivamus sed euismod libero, eu posuere nisl.<br/><br/>
					</Panel.Body>
				</Panel>
            </Col>
          </Row>
        </Grid>
		<Footer />
      </div>
    );
  }
}

export default App;
