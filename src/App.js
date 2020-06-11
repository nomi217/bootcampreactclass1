import React from 'react';
import './App.css';

function App(props) {
return <div>
  <h1 className='demo'>Bootcamp React Class <br/> Assignment # 3</h1>
<hr/>
<p className='name'>Hello <strong><q>{props.name}</q></strong> and my Age is {props.age+10}</p>
<h2>
  This Bootcamp started by PIAIC under the supervision of
</h2>
<ul type='square'>
  <li> Sir Zia Khan <strong>(CEO of Panacloud)</strong></li>
  <li>Sir Zeeshan Hanif</li>
  <li>Sir Adil Altaf</li>
  <li>Sir Daniyal Nagori</li>
  <li>Mam Hira Khan</li>
</ul>
<pre>This Assignment Completed By Nauman <strong>❤</strong></pre>
</div>
}

export default App;
