export default function loadInstagram() {
  return new Promise((resolve) => {
    resolve({
      message: 'This loadInstagram came from the api server',
      time: Date.now()
    });
  });
}
