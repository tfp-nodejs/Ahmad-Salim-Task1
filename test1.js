async function getPost() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log("First:", response);

    const dataPromise = response.json();

    console.log("Second:", dataPromise);

    const data = await dataPromise;

    console.log("Third:", data);

}

getPost();