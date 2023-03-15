const rootElement = document.querySelector('.root');

const techs = ['Javascript', 'Python', 'Ruby']

const header = (
    <header>
        <h1>Welcome to 30DaysOfReact!</h1>
        <h2>Solutions by Rishab Narayana</h2>
        <h2>Day 2, humble beginnings</h2>
    </header>
)

const main = (
    <main>
        <div>{techs.join(', ')}</div>
    </main>
)

const app = (
    <div>
        {header}
        {main}
    </div>
)

ReactDOM.render(app, rootElement);