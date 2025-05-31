import HighlightText from "./HighlightText";
import Icon from "./Icon";
import Accordion from "./Accordion";
import Panel from "./Panel";
import Tabs from "./Tabs";
import TabsItem from "./TabsItem";

function App() {
  return (
    <>
      <h1>Lesson 38 - Home work extra</h1>
      <h2>Задание 1</h2>
      <HighlightText color="red">
        <div>This text should be red</div>
      </HighlightText>
      <h2>Задание 2</h2>
      <Icon icon="⚒️" />
      <h2>Задание 3</h2>
      <Accordion>
        <Panel title="Panel 1" active={true}>Content for Panel 1</Panel>
        <Panel title="Panel 2">Content for Panel 2</Panel>
        <Panel title="Panel 3">Content for Panel 3</Panel>
      </Accordion>
      <h2>Tabs</h2>
      <Tabs>
        <TabsItem title="Tab 1">1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. A saepe expedita vel neque assumenda voluptatum. Recusandae ea praesentium officiis, esse et nesciunt, corporis dolor reprehenderit sapiente quas, voluptate expedita veritatis.</TabsItem>
        <TabsItem title="Tab 2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus culpa nulla aliquid quo numquam tempore, nemo vitae illum consectetur nobis dolor ullam earum sequi omnis facere veniam neque libero et id dolores? Assumenda dolorum soluta, suscipit ipsa voluptate adipisci et alias nihil veritatis praesentium magni eaque, explicabo esse animi eligendi distinctio! Amet dicta deleniti quaerat obcaecati iste, a, magni nemo neque eos provident dignissimos. Assumenda officia laudantium exercitationem, harum asperiores suscipit quisquam obcaecati ea officiis at quia quos blanditiis cum magnam commodi itaque eligendi repudiandae, illum placeat a! Facere et adipisci eius non saepe eum eaque soluta reiciendis labore.</TabsItem>
        <TabsItem title="Tab 3">Content for Tab 3</TabsItem>
      </Tabs>
    </>
  )
}

export default App
