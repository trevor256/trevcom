use yew::prelude::*;

#[function_component(App)]
fn app() -> Html {

html! {
    <>
<nav>
 <a href="https://trevor256.com"><h1>{ "trevor256" }</h1></a>
 <a href="https://www.artstation.com/trevor256" target="_blank"><h2>{"Art"}</h2></a>
 <a href="https://www.youtube.com/channel/UC7U47K09nNH-KX7-v4bd-kw/videos" target="_blank"><h2>{"Videos"}</h2></a>
 <a href="https://github.com/trevor256" target="_blank"><h2>{"Github"}</h2></a>
 <a href="https://github.com/trevor256" target="_blank"><h2>{"Downloads"}</h2></a>
 <a href="https://mc.trevor256.com" target="_blank"><h2>{"Games"}</h2></a>
</nav>

    <main>
      <h1>{"Hello"}</h1>
      <p> { "trevor256.com is my portfolio site." }<br/><i>{ "building" }</i> { " posts" }</p>
      <h2>{ "Site is a work in progress, Please visit links for now" }</h2>
      <footer>
</footer>

</main>
    </>
    }
}

fn main() {
    yew::start_app::<App>();
}
