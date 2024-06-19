const IP = window.location.hostname;

async function fetchData(url, method, body) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");

    let options = {
        method,
        headers,
    };

    if (["POST", "PUT"].includes(method)) {
        options.body = JSON.stringify(body);
    }

    if (!url.includes("?")) {
        url += "?key=30417a39d3e76c629051edc5288cc919b37913712fd580d6e5ef0ad9";
    }

    const result = await fetch("http://" + IP + ":5000" + url, options);

    if (result.status === 204) {
        return {
            status: result.status,
        };
    }

    const fetchedData = await result.json();

    if (result.status >= 200 && result.status < 300) {
        return {
            data: fetchedData,
            status: result.status,
        };
    }

    return {
        error: fetchedData.error,
        status: result.status,
    };
}

export const webSocket = (url) => new WebSocket(`ws://${IP}:5000${url}`);

export default fetchData;
